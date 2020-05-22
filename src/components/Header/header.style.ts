import styled from 'styled-components';
import { Retro, RetroButton } from '../../style/global';

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
      margin-bottom: calc(1em + 25px);
      border-bottom: 4px solid #000;
      background-color: var(--color-bg-secondary);
      grid-gap: 0;`
    : `
      grid-gap: 25px;
    `}
`;

export const DownloadContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto;
`;

export const LabelledInput = styled.label`
  margin: 0 1rem;
  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
  padding-left: .5rem;
  display: grid;
  grid-template-columns: auto minmax(0, auto);
  align-items: center;

  input {
    padding: .5rem;
    border: none;
    outline: none;
    margin-left: .5rem;
  }
`;

export const ModalContent = styled(Retro)`
  position: relative;
  padding: 2rem;
  display: grid;
  grid-template-rows: 1fr;
`;

export const DownloadButtonsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 120px);

  width: 100%;
`;

export const ModalCloseButton = styled(RetroButton)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: -1.5rem;
  right: -1.5rem;
  padding: 0;

  display: grid;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
`;

export default StyledHeader;
