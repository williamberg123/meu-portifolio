import React, { useState, useMemo, useCallback, useEffect } from 'react';
import './style.css';

import NavBar from '../../components/NavBar';
import Main from '../../containers/Main';

import HomeContext from './HomeContext';

export default function Home() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ bodyWidth ] = useState(document.body.clientWidth);

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
            { handleClickLink, bodyWidth, toggleHamburguerMenu, isMenuOpen }
        ),
        [ bodyWidth, isMenuOpen ]
    );

    return (
        <div className="Home">
            <HomeContext.Provider value={memoizedHomeContext}>
                <NavBar />
                <Main />
            </HomeContext.Provider>
        </div>
    );
}
