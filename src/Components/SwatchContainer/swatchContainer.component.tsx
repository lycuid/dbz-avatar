import React from 'react';
import StyledSwatchContainer from './swatchContainer.style';

import ColorSwatch from '../__pure__/ColorSwatch/colorSwatch.component';

interface SwatchContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  colors: string[];
  selected: string;
  group: string;
  onSelection: (color: string) => void;
}

const SwatchContainer: React.FC<SwatchContainerProps> = ({
  colors = [],
  selected,
  group,
  onSelection,
  ...props
}) => {
  return (
    <>
      <StyledSwatchContainer {...props}>
        {colors.map((color, key) => (
          <ColorSwatch
            key={color + String(key)}
            id={`${group}-${color}`}
            name={group}
            value={color}
            selected={selected}
            onChange={() => onSelection(color)}
          />
        ))}
      </StyledSwatchContainer>
    </>
  );
};

export default SwatchContainer;
