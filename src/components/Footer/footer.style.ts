import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 5px;
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
  border-top: 4px solid #000;

  display: grid;
  justify-content: center;

  box-sizing: border-box;
  text-align: center;

  * {
    color: var(--color-bg-primary);
  }
`;

export default StyledFooter;
