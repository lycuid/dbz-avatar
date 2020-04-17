import React from 'react';
import './main.style.css';

import CardContainer from '../CardContainer/cardContainer.component';


interface MainProps { }

const Main: React.FC<MainProps> = () => {
  return <main className='container'><CardContainer /></main>;
}

export default Main;
