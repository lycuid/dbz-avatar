import React from 'react';
import StyledFooter from './footer.style';


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <small>
        {'Artwork and Code by'}&nbsp;
        <a href='https://abhishek-kdm.github.io' target='_blank'>abhishek-kdm</a>
      </small>
    </StyledFooter>
  )
}

export default Footer;
