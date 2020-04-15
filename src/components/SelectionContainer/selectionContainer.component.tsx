import React from 'react';
import './selectionContainer.style.css';


interface SelectionContainerProps { }

const SelectionContainer: React.FC<SelectionContainerProps> = ({ children }) => {
  return <div className={'selection-container'}>{children}</div>;
}

export default SelectionContainer;
