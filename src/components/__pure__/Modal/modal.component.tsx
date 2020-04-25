import React, { useCallback, useMemo, useEffect } from 'react';
import './modal.style.css';


interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean
  opacity?: number,
  closeFunc: () => void
}
 
const Modal: React.FC<ModalProps> = ({
  show = false,
  opacity = .6,
  closeFunc,
  children,
  ...rest
}) => {
  const handleClose = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) { closeFunc(); }
  }, [closeFunc]);

  const style = useMemo(() => ({
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
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
      <div {...rest} className='modal' style={style} onClick={handleClose}>
        <div className='modal-content'>{children}</div>
      </div>
    );
  }

  return null;
}
 
export default Modal;
