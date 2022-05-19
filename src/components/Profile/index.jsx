import React from 'react';

import Image from '../Image';
import Heading2 from '../Heading2';

import profileImageRoot from '../../images/foto-arredondada.png';
import whatsAppImageRoot from '../../images/whatsapp-icon.png';
import instagramImageRoot from '../../images/instagram-icon.png';
import gitHubImageRoot from '../../images/github-icon.png';
import linkedInImageRoot from '../../images/linkedin-icon.png';
import emailImageRoot from '../../images/email-icon.png';

import './style.css';

export default function Profile(){
    return (
        <div className="Profile">
            <figure>
                <Image
                    imageRoot={profileImageRoot}
                    description="profile-image"
                />
            </figure>

            <div className="Profile-info">
                <Heading2 text="WILLIAM BERG ARAUJO DIOGO" />

                <p>Desenvolvedor Web Frontend - React</p>
                <div className="Profile-medias">
                    <a href="https://github.com/williamberg123" target="_blank" rel="noreferrer">
                        <Image
                            imageRoot={gitHubImageRoot}
                            description="github-icon"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/william-berg-124826230/" target="_blank" rel="noreferrer">
                        <Image
                            imageRoot={linkedInImageRoot}
                            description="linkedin-icon"
                        />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5588997830537" target="_blank" rel="noreferrer">
                        <Image
                            imageRoot={whatsAppImageRoot}
                            description="whatsapp-icon"
                        />
                    </a>
                    <a className="instagram-link" href="https://www.instagram.com/wi_diogo/" target="_blank" rel="noreferrer">
                        <Image
                            imageRoot={instagramImageRoot}
                            description="instagram-icon"
                        />
                    </a>
                    <a href="mailto:williamberg567@gmail.com" target="_blank" rel="noreferrer">
                        <Image
                            imageRoot={emailImageRoot}
                            description="image-icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}