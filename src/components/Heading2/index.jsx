import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default function Heading2({ text }){
    return <h2 className="Header2">{text.toUpperCase()}</h2>;
}

Heading2.propTypes = {
    text: PropTypes.string.isRequired
};