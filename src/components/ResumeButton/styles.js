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
	animation: pulse 1s infinite;

	& svg {
		width: 15px;
		height: 15px;
		margin: 0 0 5px 5px;
	}

	&:hover {
		background-color: #962e2e;
		text-decoration: underline;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.05);
		}

		100% {
			transform: scale(1);
		}
	}
`;
export default StyledResumeButton;
