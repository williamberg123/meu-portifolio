import PropTypes from 'prop-types';

import Header3 from '../Heading3';
import Paragraph from '../Paragraph';
import StyledProject from './styles';

export default function Project({ name, description, linkToProject, linkToRepository, videoToRender }){
    return (
        <StyledProject>
            <Header3 text={name} />
            <Paragraph paragraph={description} />
            Para testar: <a href={linkToProject} target="_blank" rel="noreferrer">{linkToProject}</a>
            Repositório do GitHub: <a href={linkToRepository} target="_blank" rel="noreferrer">{linkToRepository}</a>
            <video autoPlay muted loop>
                <source src={videoToRender} type="video/webm" />
            </video>

        </StyledProject>
    );
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkToProject: PropTypes.string.isRequired,
    linkToRepository: PropTypes.string.isRequired,
    videoToRender: PropTypes.string.isRequired
};
