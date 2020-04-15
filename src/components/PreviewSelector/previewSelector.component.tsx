import React from 'react';
import './previewSelector.style.css';


interface PreviewSelectorProps { }

const PreviewSelector: React.FC<PreviewSelectorProps> = ({ children }) => {
  return <div className='preview-selector'>{children}</div>;
}

export default PreviewSelector;
