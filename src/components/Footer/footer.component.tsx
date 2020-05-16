import React from 'react';
import './footer.style.css';


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <small>
        {'Artwork and Code by'}&nbsp;
        <a href='https://abhishek-kdm.github.io' target='_blank'>abhishek-kdm</a>
      </small>
    </footer>
  )
}

export default Footer;
