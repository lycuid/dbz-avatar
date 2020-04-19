import React, { useState, useEffect } from 'react';
import './header.style.css';

import AvatarImage from '../AvatarImage/avatarImage.component';
import SwatchContainer from '../SwatchContainer/swatchContainer.component';


const backgroundColors = [
  'grey', 'black', 'red', 'yellow', 'green'
]

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const [style, setStyle] = useState<any>({});

  useEffect(() => {
    const scroll = () => {
      setStyle(
        window.scrollY >= 70 ?
          { height: '25vh', padding: '7.5px', borderBottom: '4px solid #000' }
          : {}
      );
    }

    document.addEventListener('scroll', scroll);
    return () => document.removeEventListener('scroll', scroll);
  }, []);

  return <header style={style}><AvatarImage /></header>;
}

export default Header;
