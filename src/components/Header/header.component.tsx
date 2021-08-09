import React, { useState, useEffect, useCallback, useRef } from 'react';
import StyledHeader, {
  LabelledInput,
  ModalContent,
  DownloadContainer,
  DownloadButtonsContainer,
} from './header.style';
import { RetroButton } from '../../style/global';

import AvatarImage from '../AvatarImage/avatarImage.component';
import Modal from '../__pure__/Modal/modal.component';

import { useStateReducer } from '../../utils/hooks';
import {
  getSVGDataUri,
  getImageDataUri,
  getSerializedSVGString,
} from '../../utils';
import { SHORT_NAMES } from '../../configs';

const DEFAULT_IMAGE_URIS: { [k in ImageFormat]: string } = {
  svg: '',
  png: '',
  jpeg: '',
};

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const avatarRef = useRef<SVGSVGElement>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [imageSize, setimageSize] = useState<Maybe<number>>(100);
  // This will hold the downloadable uri's for the final image.
  const [dataUri, dispatchDataUri] =
    useStateReducer<DownloadableImageFormats>(DEFAULT_IMAGE_URIS);

  useEffect(() => {
    const scrollListener = () => setScrolled(window.scrollY >= 1);

    document.addEventListener('scroll', scrollListener);
    return () => document.removeEventListener('scroll', scrollListener);
  }, []);

  const readyExport = useCallback(() => {
    modalRef?.current?.showModal();
    // Constructing a svg string out of the all selected image parts.
    const node = avatarRef.current as SVGSVGElement;
    const svgString = getSerializedSVGString(node, imageSize);

    // converting the svg string into actual svg image blob (ready for download).
    const svg = getSVGDataUri(svgString, dataUri.svg || null);

    // converting the svg string into the blobs of other
    // image formats (ready for download).
    getImageDataUri((uris) => dispatchDataUri({ ...uris, svg }), {
      svgString,
      size: imageSize,
      imageObjs: (Object.keys(dataUri) as ImageFormat[]).reduce(
        (acc, format) =>
          format === 'svg'
            ? acc
            : [...acc, { format, prevUri: dataUri[format] || null }],
        [] as { format: ImageFormat; prevUri: string | null }[]
      ),
    });
  }, [modalRef, dispatchDataUri, imageSize, dataUri]);

  const clearExport = useCallback(() => {
    modalRef?.current?.close();
    dispatchDataUri(DEFAULT_IMAGE_URIS);
  }, [modalRef, dispatchDataUri]);

  return (
    <>
      <StyledHeader scrolled={scrolled}>
        <DownloadContainer>
          <LabelledInput>
            size (px)
            <input
              type="number"
              min={0}
              value={imageSize || ''}
              onChange={({ target }) => {
                setimageSize(parseInt(target.value, 10) || undefined);
              }}
            />
          </LabelledInput>

          <RetroButton as="button" className="primary" onClick={readyExport}>
            Download
          </RetroButton>
        </DownloadContainer>

        <AvatarImage ref={avatarRef} />
      </StyledHeader>
      <Modal ref={modalRef} closeFunc={clearExport}>
        <ModalContent>
          {Object.values(dataUri)
            .map((x) => x?.length > 0)
            .every(Boolean) ? (
            <DownloadButtonsContainer>
              {(Object.keys(dataUri) as ImageFormat[]).map((format) => (
                <RetroButton
                  as="a"
                  key={format}
                  href={dataUri[format]}
                  download={`avatar.${SHORT_NAMES[format]}`}
                >
                  {SHORT_NAMES[format]}
                </RetroButton>
              ))}
            </DownloadButtonsContainer>
          ) : (
            <div>Preparing to export...please wait!.</div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
