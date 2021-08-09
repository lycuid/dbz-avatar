import styled from 'styled-components';

export const SwatchLabel = styled.label`
  width: 25px;
  height: 25px;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  grid-template-column: 1fr;
  grid-template-row: 1fr;

  ::before {
    content: '';
    color: white;
    font-size: 24px;
  }
`;

export const SwatchRadio = styled.input.attrs({ type: 'radio' })`
  display: none;

  &:checked + ${SwatchLabel}::before {
    content: '\u2605';
  }
`;
