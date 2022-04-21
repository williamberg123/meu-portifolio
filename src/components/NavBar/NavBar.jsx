import React, { useState } from 'react';

import NavLink from '../NavLink/NavLink';

import './NavBar.css';

export default function NavBar(){
    const [ navBarConfigData ] = useState([
        {linkText: 'sobre mim'},
        {linkText: 'experiência'},
        {linkText: 'projetos'},
        {linkText: 'habilidades'},
        {linkText: 'contato'}
    ]);

    const navBarHtml = navBarConfigData.map(({linkText}) => <NavLink key={linkText} linkText={linkText} />);

    return (
        <nav className="NavBar">
            <ul className="Navigation">
                {navBarHtml}
            </ul>
        </nav>
    );
}