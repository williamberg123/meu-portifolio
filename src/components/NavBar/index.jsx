import React, { useState } from 'react';

import NavLink from '../NavLink';

import './style.css';

export default function NavBar(){
    const [ navBarConfigData ] = useState([
        {linkText: 'sobre mim', idToScroll: 'sobre-mim'},
        {linkText: 'experiência', idToScroll: 'experiencia'},
        {linkText: 'projetos', idToScroll: 'projetos'},
        {linkText: 'habilidades', idToScroll: 'habilidades'}
    ]);

    const handleClickLink = (e, idToScroll) => {
        e.preventDefault();
        document.querySelector(`#${idToScroll}`).scrollIntoView({
            behavior: 'smooth'
        });
    };

    const navBarHtml = navBarConfigData.map(({linkText, idToScroll}) => <NavLink handleClickLink={e => handleClickLink(e, idToScroll)} key={linkText} linkText={linkText} />);

    return (
        <nav className="NavBar">
            <ul className="Navigation">
                {navBarHtml}
            </ul>
        </nav>
    );
}