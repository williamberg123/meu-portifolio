import React from 'react';

import Project from '../../components/Project';

import projects from '../../utils/projects';

import './style.css';

export default function ProjectsContainer(){
    const htmlGenerating = projects.map(({ name, description, linkToProject, linkToRepository, videoToRender }) => {
        return (
            <Project
                title={name}
                description={description}
                linkToProject={linkToProject}
                linkToRepository={linkToRepository}
                key={name}
                videoToRender={videoToRender}
            />
        );
    });

    return (
        <div className="Container">
            {htmlGenerating}
        </div>
    );
}