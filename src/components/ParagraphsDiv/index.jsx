import PropTypes from 'prop-types';

import StyledParagraphsDiv from './styles';

export default function ParagraphsDiv({ children, classToElement }){
    return (
        <StyledParagraphsDiv className={classToElement}>
            {children}
        </StyledParagraphsDiv>
    );
}

ParagraphsDiv.propTypes = {
    children: PropTypes.node.isRequired,
    classToElement: PropTypes.string
};
