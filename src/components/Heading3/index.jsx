import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default function Heading3({ text }){
    return <h3 className="Header3">{text.toUpperCase()}</h3>;
}

Heading3.propTypes = {
    text: PropTypes.string.isRequired
};