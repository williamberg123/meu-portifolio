import React from 'react';
import PropTypes from 'prop-types';
import StyledHeading2 from './styles';

export default function Heading2({ text, elementId }){
    return <StyledHeading2 id={elementId} className="Header2">{text.toUpperCase()}</StyledHeading2>;
}

Heading2.propTypes = {
    text: PropTypes.string.isRequired,
    elementId: PropTypes.string
};
