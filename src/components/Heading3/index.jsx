import React from 'react';
import PropTypes from 'prop-types';

import StyledHeading3 from './styles';

export default function Heading3({ text }){
    return <StyledHeading3 className="Header3">{text.toUpperCase()}</StyledHeading3>;
}

Heading3.propTypes = {
    text: PropTypes.string.isRequired
};
