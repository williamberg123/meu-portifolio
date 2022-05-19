import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaGithub } from 'react-icons/fa';

import './style.css';

export default function Ability({ text, whichAbility }) {
    const [ abilitysIcons ] = useState({
        react: <FaReact />,
        javascript: <FaJs />,
        html: <FaHtml5 />,
        css: <FaCss3 />,
        git: <FaGitAlt />,
        github: <FaGithub />
    });

    return (
        <div className="Ability">
            {abilitysIcons[whichAbility]}
            {text}
        </div>
    );
}

Ability.propTypes = {
    text: PropTypes.string.isRequired,
    whichAbility: PropTypes.string.isRequired
};
