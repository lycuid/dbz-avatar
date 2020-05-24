import React from 'react';
import StyledFooter from './footer.style';


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <small>
        {'Artwork and Code by '}
        <a href='https://abhishek-kdm.github.io' target='_blank'>abhishek</a>
        {' (style reference '}
        <a href='https://nostalgic-css.github.io/NES.css/' target='_blank'>nes.css</a>)
      </small>
    </StyledFooter>
  )
}

export default Footer;
