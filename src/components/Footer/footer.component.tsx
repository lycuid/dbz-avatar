import React from 'react';
import StyledFooter from './footer.style';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <StyledFooter>
        <small>
          <a target="_blank" href="https://www.gatsbyjs.org/">
            &lt;GatsbyJS /&gt;
          </a>
        </small>
        <small>
          <a target="_blank" href="https://nostalgic-css.github.io/NES.css/">
            #nes.css
          </a>
        </small>
      </StyledFooter>
    </>
  );
};

export default Footer;
