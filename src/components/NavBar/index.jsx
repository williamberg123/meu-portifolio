import React, { useState, useContext } from 'react';

import NavLink from '../NavLink';

import HomeContext from '../../templates/Home/HomeContext';

import './style.css';

export default function NavBar(){
    const [ navBarConfigData ] = useState([
        {linkText: 'sobre mim', idToScroll: 'sobre-mim'},
        {linkText: 'habilidades', idToScroll: 'habilidades'},
        {linkText: 'experiência', idToScroll: 'experiencia'},
        {linkText: 'projetos', idToScroll: 'projetos'}
    ]);

    const { handleClickLink } = useContext(HomeContext);

    const navBarHtml = navBarConfigData.map(({linkText, idToScroll}) => <NavLink handleClickLink={e => handleClickLink(e, idToScroll)} key={linkText} linkText={linkText} />);

    return (
        <nav className="NavBar">
            <ul className="Navigation">
                {navBarHtml}
            </ul>
        </nav>
    );
}