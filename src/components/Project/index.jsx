import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Header3 from '../Heading3';
import Paragraph from '../Paragraph';

import './style.css';

import rickAndMortyVideoSrc from '../../videos/rick-and-morty.webm';
import restaurantVideoSrc from '../../videos/restaurante.webm';
import jogoDaVelhaVideoSrc from '../../videos/jogo-da-velha.webm';
import toDoListVideoSrc from '../../videos/to-do-list.webm';
import appClimaVideoSrc from '../../videos/previsao-do-tempo.webm';
import soccerVideoSrc from '../../videos/soccer.webm';
import gotVideoSrc from '../../videos/game-of-thrones.webm';

export default function Project({ title, description, linkToProject, linkToRepository, videoToRender }){
    const [ videosRootArray ] = useState({
        rickAndMorty: rickAndMortyVideoSrc,
        restaurant: restaurantVideoSrc,
        jogodavelha: jogoDaVelhaVideoSrc,
        toDoList: toDoListVideoSrc,
        appClima: appClimaVideoSrc,
        soccer: soccerVideoSrc,
		got: gotVideoSrc
    });

    return (
        <div className="Project">
            <Header3 text={title} />
            <Paragraph paragraph={description} />
            Para testar: <a href={linkToProject} target="_blank" rel="noreferrer">{linkToProject}</a>
            Repositório do GitHub: <a href={linkToRepository} target="_blank" rel="noreferrer">{linkToRepository}</a>
            <video autoPlay muted loop>
                <source src={videosRootArray[`${videoToRender}`]} type="video/webm" />
            </video>

        </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkToProject: PropTypes.string.isRequired,
    linkToRepository: PropTypes.string.isRequired,
    videoToRender: PropTypes.string.isRequired
};
