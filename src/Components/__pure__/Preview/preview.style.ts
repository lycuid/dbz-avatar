import styled from 'styled-components';
import { RetroButton, RetroSelectionCSS } from '../../../Style/global';

const StyledPreview = styled(RetroButton) <{ selected: boolean; }>`
  box-sizing: border-box;
  height: 80px;
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  ${(p) =>
    p.selected
      ? `
    &::after {
      ${RetroSelectionCSS}
    }
    svg { padding-top: 4px; }
  `
      : ''}
`;

export default StyledPreview;
