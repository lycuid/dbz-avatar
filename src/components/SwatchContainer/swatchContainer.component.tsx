import React from 'react';
import './swatchContainer.style.css';

import ColorSwatch from '../__pure__/ColorSwatch/colorSwatch.component';


interface SwatchContainerProps {
  colors: string[],
  selected: string,
  onSelect: (color: string) => void
}

const SwatchContainer: React.FC<SwatchContainerProps> = ({
  colors = [],
  selected,
  onSelect,
}) => {
  return (<>
    <div className='color-swatch--container'>
      {colors.map((color, key) => (
        <ColorSwatch
          key={color + String(key)}
          color={color}
          selected={selected}
          onClick={() => onSelect(color)}
        />
      ))}
    </div>
  </>);
}

export default SwatchContainer;
