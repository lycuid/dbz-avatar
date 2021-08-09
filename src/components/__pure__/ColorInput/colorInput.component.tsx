import React from 'react';

interface ColorInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const ColorInput: React.FC<ColorInputProps> = (props) => {
  return (
    <>
      <div>
        <label htmlFor={props.id || ''}>
          <code>custom:&nbsp;&nbsp;</code>
          <input {...props} type="color" />
        </label>
      </div>
    </>
  );
};

export default ColorInput;
