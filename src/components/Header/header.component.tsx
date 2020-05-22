import React, { useState, useEffect, useRef } from 'react';
import StyledHeader, { LabelledInput, DownloadContainer, ModalContent, ModalCloseButton, DownloadButtonsContainer } from './header.style';
import { RetroButton } from '../../style/global';

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
        <LabelledInput>
          size 
          <input
            type='number'
            min={0}
            value={imageSize || ''}
            onChange={({ target }) => { setimageSize(parseInt(target.value, 10) || undefined) }}
          />
        </LabelledInput>

        <RetroButton
          as='button'
          className='primary'
          onClick={() => { setDownloadDialogOpen(true); }}
        >
          Download
        </RetroButton>
      </DownloadContainer>

      <AvatarImage ref={avatarRef} />

      <Modal show={downloadDialogOpen} closeFunc={() => { setDownloadDialogOpen(false); }}>
        <ModalContent as='div'>
          <ModalCloseButton
            as='button'
            className='primary'
            onClick={() => { setDownloadDialogOpen(false); }}
          >
            &times;
          </ModalCloseButton>

          {Object.values(dataUri).map((x) => x?.length > 0).every(Boolean) ?
            (<DownloadButtonsContainer>
              {(Object.keys(dataUri) as ImageFormat[]).map((type) => (
                <RetroButton as='a' key={type} href={dataUri[type]} download={`avatar.${SHORT_NAMES[type]}`}>
                  {SHORT_NAMES[type]}
                </RetroButton>
              ))}
            </DownloadButtonsContainer>) :
            (<div>Preparing to export...please wait!.</div>)
          }

        </ModalContent>
      </Modal>
    </StyledHeader>
  );
}

export default Header;
