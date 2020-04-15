import React from 'react';
import './colorSelector.style.css';


interface ColorSelectorProps {
  colors: string[],
  selected: string,
  onSelect: (color: string) => void
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors = [],
  selected,
  onSelect,
}) => {
  return (<>
    <div className='color-selector'>
      {colors.map((color, key) => (
        <div key={color + String(key)}
          className='color-selector--cell'
          style={{ backgroundColor: color }}
          onClick={() => onSelect(color)}
        >
          {color === selected && <>&#x272A;</>}
        </div>
      ))}
    </div>
  </>);
}

export default ColorSelector;
