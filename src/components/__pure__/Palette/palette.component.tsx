import React from 'react';
import './palette.style.css';

import ColorInput from '../ColorInput/colorInput.component';


interface PaletteProps {
  title: string,
  selected: string,
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => Maybe<void>,
}

const Palette: React.FC<PaletteProps> = ({
  title,
  selected,
  onSelect,
  children,
}) => {
  return (<>
    <div className='palette retro'>
      <span className='palette-title'>{title.toUpperCase()}</span>

      <div className='palette-body'>
        {children}
      </div>

      <hr />
      <div className='palette-footer'>
        {selected
          ? <ColorInput value={selected} name={title} id={title} onChange={onSelect} />
          : <label className='text-muted'>Color not supported</label>
        }
      </div>
      <div style={{}}>
      </div>
    </div>
  </>);
}

export default Palette;
