import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import HomeContext from './HomeContext';

export default function HomeProvider({ children }) {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ bodyWidth ] = useState(document.body.clientWidth);

	const menuBarRef = useRef(null);

    const toggleHamburguerMenu = useCallback(() => {
        setIsMenuOpen((lastState) => !lastState);
    }, []);

    const handleClickLink = useCallback((e, idToScroll) => {
        e.preventDefault();
        document.querySelector(`#${idToScroll}`).scrollIntoView({
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        const outSideClick = (e) => {
            if (e.target.tagName !== 'NAV' && !e.target.classList.contains('menu-hamburguer')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', outSideClick);
        }

        return () => {
            document.removeEventListener('click', outSideClick);
        };
    }, [isMenuOpen]);

    const memoizedHomeContext = useMemo(
        () => (
            { handleClickLink, bodyWidth, toggleHamburguerMenu, isMenuOpen, menuBarRef }
        ),
        [ bodyWidth, isMenuOpen, menuBarRef ]
    );

	return (
		<HomeContext.Provider value={memoizedHomeContext}>
			{children}
		</HomeContext.Provider>
	);
}

HomeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
