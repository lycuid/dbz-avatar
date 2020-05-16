import React, { useState, useEffect, useRef } from 'react';
import StyledHeader, { Label, DownloadContainer, ModalContent, ModalCloseButton, DownloadButtonsContainer } from './header.style';

import AvatarImage from '../AvatarImage/avatarImage.component';
import Modal from '../__pure__/Modal/modal.component';

import { useStateReducer } from '../../utils/hooks';
import { getSVGDataUri, getImageDataUri, getSerializedSVGString } from '../../utils';
import { SHORT_NAMES, IMAGE_URIS } from '../../configs';


interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const avatarRef = useRef<SVGSVGElement>(null);

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [downloadDialogOpen, setDownloadDialogOpen] = useState<boolean>(false);

  const [dataUri, dispatchDataUri] = useStateReducer<DownloadableImageFormats>(IMAGE_URIS);
  const [imageSize, setimageSize] = useState<Maybe<number>>(100);

  useEffect(() => {
    const scrollListener = () => { setScrolled(window.scrollY >= 70); }

    document.addEventListener('scroll', scrollListener);
    return () => document.removeEventListener('scroll', scrollListener);
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
    <StyledHeader scrolled={scrolled}>
      <DownloadContainer>
        <Label>
          size 
          <input
            type='number'
            min={0}
            value={imageSize || ''}
            style={{ padding: '.5rem', border: 'none', outline: 'none', marginLeft: '.5rem' }}
            onChange={({ target }) => { setimageSize(parseInt(target.value, 10) || undefined) }}
          />
        </Label>
        <button
          type='button'
          className='retro-btn primary'
          onClick={() => { setDownloadDialogOpen(true); }}
        >Download</button>
      </DownloadContainer>

      <AvatarImage ref={avatarRef} />

      <Modal id='image-download-modal' show={downloadDialogOpen} closeFunc={() => { setDownloadDialogOpen(false); }}>
        <ModalContent className='retro'>
          <ModalCloseButton
            className='retro-btn'
            onClick={() => { setDownloadDialogOpen(false); }}
          >
            &times;
          </ModalCloseButton>
          <DownloadButtonsContainer>
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
          </DownloadButtonsContainer>
        </ModalContent>
      </Modal>
    </StyledHeader>
  );
}

export default Header;
