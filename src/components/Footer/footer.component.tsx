import React from 'react';
import StyledFooter from './footer.style';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <small>
        {'Artwork and Code by '}
        <a href='https://lycuid.github.io' target='_blank'>lycuid</a>
      </small>
      <small>
        {' style reference '}
        <a href='https://nostalgic-css.github.io/NES.css/' target='_blank'>nes.css</a>
      </small>
    </StyledFooter>
  )
}

export default Footer;
