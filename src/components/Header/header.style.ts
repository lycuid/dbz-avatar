import styled from 'styled-components';
// @ts-ignore
import background from '../../images/background.svg';


const StyledHeader = styled.header<{ scrolled: boolean }>`
  width: 100%;
  padding: 1rem;

  box-sizing: border-box;
  position: sticky;
  top: 0;
  transition-duration: .2s;
  z-index: 100;

  display: grid;
  grid-template-rows: 3rem 20vh;

  ${({ scrolled }) => scrolled
    ? `
      padding: .5em;
      margin-bottom: calc(1em);
      border-bottom: 4px solid #000;
      background-color: var(--color-bg-secondary);`
    : `background-image: url(${background})`}
`;

export const DownloadContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto;
`;

export const Label = styled.label`
  margin: 0 1rem;
  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
  padding-left: .5rem;
  display: grid;
  grid-template-columns: auto minmax(0, auto);
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 2rem;
`;

export const DownloadButtonsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(auto - fit, 120px);
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  top: -25px;
  right: -25px;
  color: #ffffff;
  cursor: pointer;
  background-color: #FF6B81;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

export default StyledHeader;
