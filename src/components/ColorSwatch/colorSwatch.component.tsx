import React from 'react';
import './colorSwatch.style.css';


interface ColorSwatchProps {
  colors: string[],
  selected: string,
  onSelect: (color: string) => void
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  colors = [],
  selected,
  onSelect,
}) => {
  return (<>
    <div className='color-swatch--container'>
      {colors.map((color, key) => (
        <div key={color + String(key)}
          className='color-swatch'
          style={{ backgroundColor: color }}
          onClick={() => onSelect(color)}
        >
          {color === selected && <>&#x2605;</>}
        </div>
      ))}
    </div>
  </>);
}

export default ColorSwatch;
