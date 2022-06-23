import React from 'react';

import Project from '../../components/Project';

import projects from '../../utils/projects';

import StyledProjectsContainer from './styles';

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
        <StyledProjectsContainer>
            {htmlGenerating}
        </StyledProjectsContainer>
    );
}
