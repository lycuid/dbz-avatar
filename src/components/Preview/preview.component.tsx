import React from 'react';
import './preview.style.css';


interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean
}

const Preview: React.FC<PreviewProps> = ({
  selected = false,
  children,
  ...props
}) => {
  const classes = ['preview-image']
    .concat(selected ? ['selected'] : []);

  return (<>
    <span {...props} className={classes.join(' ')}>
      {children}
    </span>
  </>);
}

export default Preview;