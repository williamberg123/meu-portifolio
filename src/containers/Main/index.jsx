import React, { useState, useEffect } from 'react';

import { RiMenuFill } from 'react-icons/ri';

import Profile from '../../components/Profile';
import ParagraphsDiv from '../../components/ParagraphsDiv';
import Heading2 from '../../components/Heading2';
import ProjectsContainer from '../ProjectsContainer';
import AbilitysContainer from '../AbilitysContainer';
import RenderIf from '../../components/RenderIf';

import './style.css';

export default function Main(){
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ bodyWidth ] = useState(document.body.clientWidth);

    const toggleHamburguerMenu = () => {
        const menuNavBar = document.querySelector('.Navigation');

        if (isMenuOpen) {
            menuNavBar.style.display = 'none';
            menuNavBar.style.width = 0;
        } else {
            menuNavBar.style.display = 'flex';
            menuNavBar.style.width = '60%';
        }

        setIsMenuOpen(!isMenuOpen);
    };

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

    return (
        <main className="Main">
            <RenderIf isTrue={ bodyWidth <= 600 }>
                <RiMenuFill onClick={toggleHamburguerMenu} className="menu-hamburguer" />
            </RenderIf>
            <Profile />
            <ParagraphsDiv />
            <section>
                <Heading2 elementId="experiencia" text="experiência" />
                <p>fgtb</p>
            </section>

            <section>
                <Heading2 elementId="projetos" text="projetos" />
                <ProjectsContainer />
            </section>

            <section>
                <Heading2 elementId="habilidades" text="habilidades" />
                <AbilitysContainer />
            </section>
        </main>
    );
}