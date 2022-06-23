import styled from 'styled-components';
// import StyledResumeButton from '../ResumeButton/styles';

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	background-color: #111;
	color: white;
	padding: 50px 20px;
	margin-top: 50px;

	& ul {
		width: fit-content;
		display: flex;
		flex-direction: column;
		list-style: none;
	}

	& > a {
		margin: 0;
	}

	& ul a {
		width: fit-content;
		color: white;
		text-decoration: none;
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		font-size: 1rem;
		transition: 0.1s;
	}

	& ul a:hover {
		color: #7C1414;
	}

	& ul a > svg {
		width: 20px;
		height: 20px;
		margin-right: 10px;
		margin-bottom: 5px;
	}
`;

export default StyledFooter;
