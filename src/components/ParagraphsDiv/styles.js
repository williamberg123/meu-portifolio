import styled from 'styled-components';

const StyledParagraphsDiv = styled.div`
	display: flex;
	flex-direction: column;

	& p, & p {
		text-indent: 30px;
		font-size: 1.5rem;
		margin-top: 20px;
	}

	& p:first-child {
		margin-top: 0;
	}

	& .red-span {
		color: #7C1414;
		font-weight: bold;
	}

	@media (max-width: 500px) {
		& p, & p {
			font-size: 1.2rem;
		}
	}
`;

export default StyledParagraphsDiv;
