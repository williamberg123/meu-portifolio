import React, { useState, useContext } from 'react';

import NavLink from '../NavLink';
import HomeContext from '../../contexts/HomeProvider/HomeContext';
import StyledNavBar, { StyledList } from './styles';

export default function NavBar(){
    const [ navBarConfigData ] = useState([
        {linkText: 'sobre mim', idToScroll: 'sobre-mim'},
        {linkText: 'habilidades', idToScroll: 'habilidades'},
        {linkText: 'projetos', idToScroll: 'projetos'}
    ]);

    const { handleClickLink, menuBarRef } = useContext(HomeContext);

    const navBarHtml = navBarConfigData.map(({linkText, idToScroll}) => <NavLink handleClickLink={e => handleClickLink(e, idToScroll)} key={linkText} linkText={linkText} />);

    return (
        <StyledNavBar>
            <StyledList ref={menuBarRef}>
                {navBarHtml}
            </StyledList>
        </StyledNavBar>
    );
}
