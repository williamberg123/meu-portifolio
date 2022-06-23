import styled from 'styled-components';

const StyledNavLink = styled.li`
	& a {
		color: #7C1414;
		text-decoration: none;
		padding: 8px 20px;
		border-radius: 5px;
		transition: 0.3s;
		font-weight: lighter;
		margin: 0 10px;
	}

	& a:hover {
		background-color: #7C1414;
		color: white;
	}

	@media (max-width: 600px) {
		& {
			padding: 20px 0;
			width: 100%;
			display: flex;
			justify-content: center;
		}

		& a {
			width: 100%;
			border-radius: 0;
			text-align: center;
			color: white;
		}
	}

	@media (max-width: 350px) {
		& a {
			padding: 8px 5px;
		}
	}
`;

export default StyledNavLink;
