import styled from 'styled-components';

const StyledMain = styled.main`
	max-width: 1000px;
	margin: 50px auto 0;
	padding: 0 20px 40px;

	& .menu-hamburguer {
		width: 40px;
		height: 40px;
		border-radius: 5px;
		color: #7C1414;
	}

	@media (max-width: 600px) {
		& {
			margin-top: 20px;
		}
	}
`;

export default StyledMain;
