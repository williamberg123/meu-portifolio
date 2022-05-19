import React, { useState } from 'react';

import Project from '../../components/Project';

import './style.css';

export default function ProjectsContainer(){
    const [ projects ] = useState([
        {
            name: 'Consumindo API - Rick & Morty',
            description: 'Tenha acesso à inúmeras informações sobre o seriado Rick e morty, com uma interface bonita e interativa.',
            linkToProject: 'https://williamberg123.github.io/rick-and-morty/',
            linkToRepository: 'https://github.com/williamberg123/rick-and-morty/',
            videoToRender: 'rickAndMorty'
        },
        {
            name: 'Ecommerce Restaurante',
            description: 'Venha e faça seus pedidos no Berg restaurante, contamos com um cardápio variado para todos os gostos.',
            linkToProject: 'https://williamberg123.github.io/ecommerce-restaurante/',
            linkToRepository: 'https://github.com/williamberg123/ecommerce-restaurante/',
            videoToRender: 'restaurant'
        },
        {
            name: 'Jogo da Velha',
            description: 'Use a lógica para vencer seu adversário, e se divirta com este joguinho.',
            linkToProject: 'https://williamberg123.github.io/jogo-da-velha/',
            linkToRepository: 'https://github.com/williamberg123/jogo-da-velha/',
            videoToRender: 'jogodavelha'
        },
        {
            name: 'ToDo List App',
            description: 'Cansado de ter que fazer listas no papel? Aqui está sua solução, experimente e use em seu dia a dia.',
            linkToProject: 'https://williamberg123.github.io/todolist-react/',
            linkToRepository: 'https://github.com/williamberg123/todolist-react',
            videoToRender: 'toDoList'
        }
    ]);

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