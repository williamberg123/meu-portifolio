import styled from 'styled-components';

const StyledProjectsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	grid-gap: 30px;

	@media (max-width: 400px) {
		& {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}
`;

export default StyledProjectsContainer;
