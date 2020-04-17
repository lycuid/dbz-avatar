import React from 'react';
import './footer.style.css';


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      {'</> with '}
      <span className='heart'>&#x2764;</span>
      {' and '}
      <span className='react-logo'>&#x269B;</span>
    </footer>
  )
}

export default Footer;
