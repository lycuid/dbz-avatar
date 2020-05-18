import styled from 'styled-components';
import { Retro } from '../../../style/global';


const StyledCard = styled(Retro)`
  padding: .5em 10px 5px;
  display: flex;
  flex-direction: column;
  position: relative;

  background-color: var(--color-bg-secondary);
`;

export const CardTitle = styled.span`
  position: absolute;
  text-transform: uppercase;

  top: -1rem;
  left: 1rem;
  padding: .25em;

  border-top: 4px solid var(--color-primary);
  background-color: var(--color-bg-secondary);
`;

export const CardBody = styled.div`
  flex: 1;
`;

export const CardFooter = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledCard;
