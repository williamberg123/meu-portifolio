import styled from 'styled-components';

const StyledProject = styled.div`
	display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 8px rgb(189, 189, 189);
    padding: 20px;
    border-radius: 10px;
    word-wrap: break-word;

	& video {
		width: 100%;
		box-shadow: 1px 1px 10px rgb(156, 156, 156);
		margin-top: 10px;
		border-radius: 2px;
	}

	& p {
		margin: 10px 0;
	}

	& img {
		width: 100%;
		height: 100%;
		z-index: 1;
		border-radius: 0 0 10px 10px;
	}

	@media (max-width: 450px) {
		& {
			padding: 15px;
		}
	}
`;

export default StyledProject;
