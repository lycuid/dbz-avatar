import React, { useCallback, useMemo, useEffect } from 'react';
import StyledModal, { ModalContent } from './modal.style';


interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean
  opacity?: number,
  closeFunc: () => void
}
 
const Modal: React.FC<ModalProps> = ({
  show = false,
  opacity = .75,
  closeFunc,
  children,
  ...props
}) => {
  const handleClose = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) { closeFunc(); }
  }, [closeFunc]);

  const style = useMemo(() => ({
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
  }), [opacity]);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.which === 27 && show) { closeFunc(); }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  }, [show, closeFunc]);

  if (show) {
    return (
      <StyledModal {...props} style={style} onClick={handleClose}>
        <ModalContent className='modal-content'>{children}</ModalContent>
      </StyledModal>
    );
  }

  return null;
}
 
export default Modal;
