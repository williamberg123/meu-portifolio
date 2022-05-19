import React from 'react';

import Profile from '../../components/Profile';
import ParagraphsDiv from '../../components/ParagraphsDiv';
import Heading2 from '../../components/Heading2';
import ProjectsContainer from '../ProjectsContainer';

import './style.css';

export default function Main(){
    return (
        <main className="Main">
            <Profile />
            <ParagraphsDiv />
            <section>
                <Heading2 text="experência" />
                <p>fgtb</p>
            </section>

            <section>
                <Heading2 text="projetos" />
                <ProjectsContainer />
            </section>

            <section>
                <Heading2 text="habilidades" />
            </section>
        </main>
    );
}