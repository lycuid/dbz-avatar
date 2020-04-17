import React, { useState, useEffect } from 'react';
import './header.style.css';

import AvatarImage from '../AvatarImage/avatarImage.component';


interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const [style, setStyle] = useState<any>({});

  useEffect(() => {
    const scroll = () => {
      setStyle(
        window.scrollY !== 0 ?
          { height: '25vh', padding: '10px' } : {}
      );
    }

    document.addEventListener('scroll', scroll);
    return () => document.removeEventListener('scroll', scroll);
  }, []);

  return <header style={style}><AvatarImage /></header>;
}

export default Header;
