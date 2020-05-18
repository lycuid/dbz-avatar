import React from 'react';
import StyledMain from './main.style';

import CardContainer from '../CardContainer/cardContainer.component';


interface MainProps extends React.HTMLAttributes<HTMLElement> { }

const Main: React.FC<MainProps> = (props) => {
  return <StyledMain as='main' {...props}><CardContainer /></StyledMain>;
}

export default Main;
