import styled from 'styled-components';

const StyledModal = styled.div`
	position: fixed;
	z-index: 100000;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	overflow: auto;
`;

export const ModalContent = styled.div`
	margin: auto;
	padding: auto;
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: block;
	border: none;
	width: 80%;
	max-width: 700px;
`;

export default StyledModal;
