import styled from 'styled-components';

const StyledCardContainer = styled.div`
  margin: 20px 0;
  padding: 2em 5px;
  box-sizing: border-box;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: #ccc;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }
`;

export default StyledCardContainer;
