import React from 'react';
import StyledFooter from './footer.style';

interface FooterProps {  }

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <StyledFooter>
        <small>
          <a target="_blank" rel="noreferer" href="https://www.nextjs.org/">
            &lt;NextJS /&gt;
          </a>
        </small>
        <small>
          <a target="_blank" rel="noreferer" href="https://nostalgic-css.github.io/NES.css/">
            #nes.css
          </a>
        </small>
      </StyledFooter>
    </>
  );
};

export default Footer;
