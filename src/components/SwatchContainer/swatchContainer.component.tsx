import React from 'react';
import StyledSwatchContainer from './swatchContainer.style';

import ColorSwatch from '../__pure__/ColorSwatch/colorSwatch.component';


interface SwatchContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  colors: string[],
  selected: string,
  onSelection: (color: string) => void
}

const SwatchContainer: React.FC<SwatchContainerProps> = ({
  colors = [],
  selected,
  onSelection,
  ...props
}) => {
  return (<>
    <StyledSwatchContainer {...props}>
      {colors.map((color, key) => (
        <ColorSwatch
          key={color + String(key)}
          color={color}
          selected={selected}
          onClick={() => onSelection(color)}
        />
      ))}
    </StyledSwatchContainer>
  </>);
}

export default SwatchContainer;
