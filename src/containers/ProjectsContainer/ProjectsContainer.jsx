import React, { useState } from 'react';

import Project from '../../components/Project/Project';

import './ProjectsContainer.css';

export default function ProjectsContainer(){
    const [ projectsInfo ] = useState([
        {
            name: 'Consumindo API - Rick & Morty',
            description: 'Tenha acesso à inúmeras informações sobre o seriado Rick e morty, com uma interface bonita e interativa.',
            linkToProject: 'https://sensational-donut-4959b6.netlify.app/',
            imageToRender: 'rickMorty'
        },
        {
            name: 'Agenda de contatos digital',
            description: 'Quem disse que um Dev Frontend não pode manjar de Backend também? Haha, venha e veja você mesmo esse projeto.',
            linkToProject: 'dfbergvburfguyt',
            imageToRender: 'rickMorty'
        }
    ]);

    const htmlGenerating = projectsInfo.map(({ name, description, linkToProject, imageToRender }) => {
        return (
            <Project
                title={name}
                description={description}
                linkToProject={linkToProject}
                key={name}
                imageToRender={imageToRender}
            />
        );
    });

    return (
        <div className="Container">
            {htmlGenerating}
        </div>
    );
}