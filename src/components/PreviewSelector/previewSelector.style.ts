import styled from 'styled-components';

const StyledPreviewSelector = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 15px;
  overflow: hidden;
  overflow-x: auto;
  display: flex;

  * { margin: 0 10px; }

  ::-webkit-scrollbar {
    height: .5rem;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: .25rem;
    background-color: #ccc;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
  ::-webkit-scrollbar-track {
    background-color: none;
  }
`;

export default StyledPreviewSelector;
