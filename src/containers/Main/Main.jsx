import React from 'react';

import Profile from '../../components/Profile/Profile';
import ParagraphsDiv from '../../components/ParagraphsDiv/ParagraphsDiv';
import Header2 from '../../components/Header2/Header2';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';

import './Main.css';

export default function Main(){
    return (
        <main className="Main">
            <Profile />
            <ParagraphsDiv />
            <section>
                <Header2 text="experência" />
                <p>fgtb</p>
            </section>

            <section>
                <Header2 text="projetos" />
                <ProjectsContainer />
            </section>
        </main>
    );
}