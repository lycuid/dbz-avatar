import React from 'react';
import StyledModal, { ModalCloseButton } from './modal.style';

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  closeFunc: () => void;
}

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  ({ closeFunc, children, ...props }, ref) => {
    return (
      <StyledModal ref={ref} {...props}>
        <ModalCloseButton onClick={closeFunc}>&times;</ModalCloseButton>
        {children}
      </StyledModal>
    );
  }
);

export default Modal;
