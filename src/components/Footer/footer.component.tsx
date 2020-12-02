import React from 'react';
import StyledFooter from './footer.style';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <small>
        &lt;<a target="_blank" href="https://www.gatsbyjs.org/">GatsbyJS</a> /&gt;
      </small>
      <small>
        #<a target='_blank' href='https://nostalgic-css.github.io/NES.css/'>nes.css</a>
      </small>
    </StyledFooter>
  )
}

export default Footer;
