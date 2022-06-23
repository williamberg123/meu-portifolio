import styled from 'styled-components';

const StyledAbilitysContainer = styled.div`
	display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;

	@media (max-width: 350px) {
		& {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

export default StyledAbilitysContainer;
