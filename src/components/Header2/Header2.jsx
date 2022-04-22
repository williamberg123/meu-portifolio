import React from 'react';

import PropTypes from 'prop-types';

import './Header2.css';

export default function Header2({ text }){
    return <h2 className="Header2">{text.toUpperCase()}</h2>;
}

Header2.propTypes = {
    text: PropTypes.string.isRequired
};