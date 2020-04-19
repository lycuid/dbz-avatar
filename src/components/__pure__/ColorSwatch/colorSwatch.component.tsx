import React from 'react';
import './colorSwatch.style.css';


interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string,
  selected: string,
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  selected,
  className,
  style,
  ...rest
}) => {
  const classes = ['color-swatch'].concat(className ? [className] : []);

  return (<>
    <div {...rest}
      className={classes.join(' ')}
      style={{ ...style, backgroundColor: color }}
    >
      {color === selected && <>&#x2605;</>}
    </div>
  </>);
}

export default ColorSwatch;
