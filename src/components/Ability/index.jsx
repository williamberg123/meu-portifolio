import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';

import StyledAbility, { StyledSummary } from './styles';

export default function Ability({ text, whichAbility, description }) {
	const [abilitysIcons] = useState({
		react: <FaReact />,
		javascript: <FaJs />,
		html: <FaHtml5 />,
		css: <FaCss3 />,
		git: <FaGitAlt />,
		github: <FaGithub />,
		firebase: <SiFirebase />
	});

	return (
		<StyledAbility>
			<StyledSummary>
				<div className="Ability-name">
					{abilitysIcons[whichAbility]}
					<p>{text}</p>
				</div>
			</StyledSummary>
			<p className="Ability-description">{description}</p>
		</StyledAbility>
	);
}

Ability.propTypes = {
	text: PropTypes.string.isRequired,
	whichAbility: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
