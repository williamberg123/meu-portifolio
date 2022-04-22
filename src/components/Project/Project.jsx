import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Header3 from '../Header3/Header3';
import Paragraph from '../Paragraph/Paragraph';
import Image from '../Image/Image';

import './Project.css';

import rickMortyProjectImage from '../../../public/images/projeto-rick-morty.png';

export default function Project({ title, description, linkToProject, imageToRender }){
    const [ imagesRootArray ] = useState({
        rickMorty: rickMortyProjectImage
    });

    return (
        <div className="Project">
            <Header3 text={title} />
            <Paragraph paragraph={description} />
            <a href={linkToProject} target="_blank" rel="noreferrer">{linkToProject}</a>
            <a className="imageWithLink" href={linkToProject} target="_blank" rel="noreferrer">
                <Image imageRoot={imagesRootArray[`${imageToRender}`]} description={description} />
                <div className="hidden">Clique para acessar</div>
            </a>
        </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkToProject: PropTypes.string.isRequired,
    imageToRender: PropTypes.string.isRequired
};