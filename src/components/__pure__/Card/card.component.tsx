import React from 'react';
import './card.style.css';

import ColorInput from '../ColorInput/colorInput.component';


interface CardProps {
  title: string,
  footer: JSX.Element
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
}) => {
  return (<>
    <div className='card retro'>
      <span className='card__title'>{title.toUpperCase()}</span>
      <div className='card__body'>{children}</div>
      <hr />
      <div className='card__footer'>{footer}</div>
    </div>
  </>);
}

export default Card;
