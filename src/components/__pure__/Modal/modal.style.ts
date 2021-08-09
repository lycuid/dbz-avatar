import styled from 'styled-components';
import { Retro, RetroButton } from '../../../style/global';

const StyledModal = styled.dialog`
  ${Retro}
  margin: 15vh auto auto;
  width: 80%;
  max-width: 700px;

  &[open] {
    display: flex;
    flex-direction: column;
  }

  ::backdrop {
    background-color: rgba(200, 200, 200, 0.5);
    backdrop-filter: blur(5px);
  }
`;

export const ModalCloseButton = styled.span`
  cursor: pointer;
  align-self: flex-end;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
`;

export default StyledModal;
