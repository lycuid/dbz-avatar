import React from 'react';
import './paletteContainer.style.css';


interface PaletteContainerProps { }

const PaletteContainer: React.FC<PaletteContainerProps> = ({ children }) => {
  return <div className={'palette-container'}>{children}</div>;
}

export default PaletteContainer;
