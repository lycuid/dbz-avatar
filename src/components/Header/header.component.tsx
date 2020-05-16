import React, { useState, useEffect, useRef } from 'react';
import './header.style.css';

// @ts-ignore
import background from '../../images/background.svg';

import AvatarImage from '../AvatarImage/avatarImage.component';
import Modal from '../__pure__/Modal/modal.component';

import { useStateReducer } from '../../utils/hooks';
import { getSVGDataUri, getImageDataUri, getSerializedSVGString } from '../../utils';
import { SHORT_NAMES, IMAGE_URIS } from '../../configs';


const defaultStyle = { backgroundImage: `url(${background})` };

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const avatarRef = useRef<SVGSVGElement>(null);

  const [style, setStyle] = useState<any>(defaultStyle);
  const [downloadDialogOpen, setDownloadDialogOpen] = useState<boolean>(false);

  const [dataUri, dispatchDataUri] = useStateReducer<DownloadableImageFormats>(IMAGE_URIS);
  const [imageSize, setimageSize] = useState<Maybe<number>>(100);

  useEffect(() => {
    const scroll = () => {
      setStyle(
        window.scrollY >= 70 ?
        {
          height: '25vh',
          padding: '.5em',
          marginBottom: 'calc(1em + 10vh)',
          borderBottom: '4px solid #000',
          backgroundColor: 'var(--color-bg-secondary)',
        } : defaultStyle
      );
    }

    document.addEventListener('scroll', scroll);
    return () => document.removeEventListener('scroll', scroll);
  }, []);

  useEffect(() => {
    if (downloadDialogOpen) {
      const node = avatarRef.current as SVGSVGElement;
      const svgString = getSerializedSVGString(node, imageSize);
      
      const svg = getSVGDataUri(svgString, dataUri.svg || null);

      const options = { svgString, size: imageSize };
      getImageDataUri(
        (dataUris) => { dispatchDataUri({ svg, ...dataUris }); },
        {
          ...options,
          imageObjs: (Object.keys(dataUri) as ImageFormat[]).reduce((acc, key) => {
            if (key === 'svg') { return acc; }
            return [...acc, { type: key, prevUri: dataUri[key] || null }];
          }, ([] as { type: ImageFormat, prevUri: string | null }[]))
        }
      );
    } else {
      dispatchDataUri(IMAGE_URIS);
    }
  }, [downloadDialogOpen, imageSize]);

  return (
    <header style={style}>
      <div className='download-container'>
        <label style={{
          margin: '0 1rem',
          border: '2px solid var(--color-primary)',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-bg-primary)',
          paddingLeft: '.5rem',
          display: 'grid',
          gridTemplateColumns: 'auto minmax(0, auto)',
          alignItems: 'center',
        }}>
          size 
          <input
            type='number'
            min={0}
            value={imageSize || ''}
            style={{ padding: '.5rem', border: 'none', outline: 'none', marginLeft: '.5rem' }}
            onChange={({ target }) => { setimageSize(parseInt(target.value, 10) || undefined) }}
          />
        </label>
        <button
          type='button'
          className='retro-btn primary'
          onClick={() => { setDownloadDialogOpen(true); }}
        >Download</button>
      </div>

      <AvatarImage ref={avatarRef} />

      <Modal id='image-download-modal' show={downloadDialogOpen} closeFunc={() => { setDownloadDialogOpen(false); }}>
        <div className='retro content' style={{ padding: '2em' }}>
          <span
            className='modal-close-button retro-btn'
            onClick={() => { setDownloadDialogOpen(false); }}
          >
            &times;
          </span>
          <div className='download-buttons-container'>
            {(dataUri.svg?.length && dataUri.png?.length && dataUri.jpeg?.length) ?
              (Object.keys(dataUri) as ImageFormat[])
                .map((type) => (
                  <a key={type}
                    className='retro-btn as-btn'
                    href={dataUri[type]}
                    download={`avatar.${SHORT_NAMES[type]}`}
                  >{SHORT_NAMES[type]}</a>
                )) : (
              <div>Preparing to export...please wait!.</div>
            )}
          </div>
        </div>
      </Modal>
    </header>
  );
}

export default Header;
