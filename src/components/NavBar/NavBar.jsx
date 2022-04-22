import React, { useState } from 'react';

import NavLink from '../NavLink/NavLink';

import './NavBar.css';

export default function NavBar(){
    const [ navBarConfigData ] = useState([
        {linkText: 'sobre mim', heightToScroll: 100},
        {linkText: 'experiência', heightToScroll: 200},
        {linkText: 'projetos', heightToScroll: 300},
        {linkText: 'habilidades', heightToScroll: 400},
        {linkText: 'contato', heightToScroll: 500}
    ]);

    const handleClickLink = (e, heightToScroll) => {
        e.preventDefault();
        alert(`Altura do scroll: ${heightToScroll}`);
    };

    const navBarHtml = navBarConfigData.map(({linkText, heightToScroll}) => <NavLink handleClickLink={e => handleClickLink(e, heightToScroll)} key={linkText} linkText={linkText} />);

    return (
        <nav className="NavBar">
            <ul className="Navigation">
                {navBarHtml}
            </ul>
        </nav>
    );
}