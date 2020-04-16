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
    <div className='palette'>
      <strong>{title.toUpperCase()}</strong>
      <hr />

      {children}
      <hr />

      {selected &&
        <ColorInput value={selected} name={title} id={title} onChange={onSelect} />
      }
    </div>
  </>);
}

export default Palette;
