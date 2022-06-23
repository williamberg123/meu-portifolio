import React from 'react';

import PropTypes from 'prop-types';
import StyledNavLink from './styles';

export default function NavLink(props) {
	const { linkText, handleClickLink } = props;

	return (
		<StyledNavLink>
			<a onClick={handleClickLink} href={linkText}>{linkText.toUpperCase()}</a>
		</StyledNavLink>
	);
}

NavLink.propTypes = {
	linkText: PropTypes.string.isRequired,
	handleClickLink: PropTypes.func.isRequired
};
