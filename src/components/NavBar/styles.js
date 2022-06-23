import styled from 'styled-components';

const StyledNavBar = styled.nav``;

export const StyledList = styled.ul`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	max-width: 1000px;
	margin: 30px auto;
	padding: 10px 20px;
	font-weight: bold;
	list-style: none;
	border-radius: 20px;

	@media (max-width: 600px) {
		& {
			background-color: #7c1414ef;
			display: none;
			width: 0;
			position: fixed;
			right: 0;
			top: -30px;
			flex-direction: column;
			justify-content: flex-start;
			border-radius: 0;
			height: 100vh;
			transition: 1s;
		}
	}
`;

export default StyledNavBar;
