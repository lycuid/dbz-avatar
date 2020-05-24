import React from 'react';
import StyledColorSwatch from './colorSwatch.style';


interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string,
  selected: string,
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  selected,
  style,
  ...props
}) => {
  return (<>
    <StyledColorSwatch color={color} {...props}>
      {color === selected && <>&#x2605;</>}
    </StyledColorSwatch>
  </>);
}

export default ColorSwatch;
