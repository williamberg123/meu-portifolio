import React from 'react';

import Project from '../../components/Project';

import projects from '../../utils/projects';

import './style.css';

export default function ProjectsContainer(){
    const htmlGenerating = projects.map((project) => {
        return (
            <Project
				{...project}
                key={project.name}
            />
        );
    });

    return (
        <div className="Container">
            {htmlGenerating}
        </div>
    );
}
