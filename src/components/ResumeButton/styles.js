import styled from 'styled-components';

const StyledResumeButton = styled.a`
	width: fit-content;
	display: flex;
	align-items: center;
	padding: 10px 20px;
	background-color: #7C1414;
	color: white;
	border-radius: 2px;
	margin-left: auto;
	margin-bottom: 20px;
	cursor: pointer;
	text-decoration: none;

	& svg {
		width: 15px;
		height: 15px;
		margin: 0 0 5px 5px;
	}

	&:hover {
		background-color: #962e2e;
		text-decoration: underline;
	}
`;
export default StyledResumeButton;
