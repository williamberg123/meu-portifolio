import React from 'react';

import PropTypes from 'prop-types';

import './Header3.css';

export default function Header3({ text }){
    return <h3 className="Header3">{text.toUpperCase()}</h3>;
}

Header3.propTypes = {
    text: PropTypes.string.isRequired
};