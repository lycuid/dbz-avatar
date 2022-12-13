import React from 'react';
import { SwatchRadio, SwatchLabel } from './colorSwatch.style';

interface ColorSwatchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  selected: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  selected,
  value,
  ...props
}) => {
  return (
    <>
      <span>
        <SwatchRadio checked={selected === value} {...props} />
        <SwatchLabel htmlFor={props.id} style={{ backgroundColor: value as string }} />
      </span>
    </>
  );
};

export default ColorSwatch;
