import React from 'react';
import './selectionBox.style.css';

import ColorInput from '../ColorInput/colorInput.component';


interface SelectionBoxProps {
  title: string,
  selected: string,
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => Maybe<void>,
}

const SelectionBox: React.FC<SelectionBoxProps> = ({
  title,
  selected,
  onSelect,
  children,
}) => {
  return (<>
    <div className='selection-box'>
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

export default SelectionBox;
