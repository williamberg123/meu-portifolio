import React from 'react';

import PropTypes from 'prop-types';

import './NavLink.css';

export default function NavLink(props){
    const { linkText, funcClickLink } = props;

    return (
        <li className="Navigation-item"><a onClick={funcClickLink} href={linkText}>{linkText.toUpperCase()}</a></li>
    );
}

NavLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    funcClickLink: PropTypes.func.isRequired
};