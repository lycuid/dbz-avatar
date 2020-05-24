import styled from 'styled-components';

const StyledColorSwatch = styled.div<{ color: string }>`
  width: 25px;
  height: 25px;
  color: white;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: flex-end;

  font-size: 24px;
`;

export default StyledColorSwatch;
