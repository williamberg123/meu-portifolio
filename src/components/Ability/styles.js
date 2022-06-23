import styled from 'styled-components';

const StyledAbility = styled.details`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 0 20px;
    box-shadow: 2px 2px 7px rgb(102, 102, 102);
    border-radius: 10px;
    transition: 0.4s;
    text-transform: uppercase;

	& svg {
		width: 40px;
		height: 40px;
		display: flex;
		margin-right: 10px;
	}

	&:hover {
		background-color: black;
		color: white;
	}

	&:hover svg {
		fill: white;
	}

	& .Ability-name {
		display: flex;
		align-items: center;
	}

	& .Ability-description {
		display: block;
		font-size: 0.7rem;
		color: rgb(114, 114, 114);
		transition: 0.4s;
		padding-bottom: 20px;
	}
`;

export const StyledSummary = styled.summary`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 20px;
`;

export default StyledAbility;
