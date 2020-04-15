import React from 'react';
import './preview.style.css';


interface PreviewProps { }

const Preview: React.FC<PreviewProps> = ({ children }) => {
  return <span className='preview-image'>{children}</span>;
}

export default Preview;
