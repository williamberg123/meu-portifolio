import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default function NavLink(props){
    const { linkText, handleClickLink } = props;

    return (
        <li className="Navigation-item"><a onClick={handleClickLink} href={linkText}>{linkText.toUpperCase()}</a></li>
    );
}

NavLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    handleClickLink: PropTypes.func.isRequired
};