import React from 'react';
import './colorInput.style.css';


interface ColorInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const ColorInput: React.FC<ColorInputProps> = (props) => {
  return (<>
    <div className='color-input'>
      <label htmlFor={props.id || ''}>
        <small>set custom color:</small>
        <input {...props} type='color' />
      </label>
    </div>
  </>);
}

export default ColorInput;
