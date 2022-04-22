import React from 'react';

import Image from '../Image/Image';
import Header2 from '../Header2/Header2';

import profileImageRoot from '../../../public/images/foto-arredondada.png';
import whatsAppImageRoot from '../../../public/images/whatsapp-icon.png';
import instagramImageRoot from '../../../public/images/instagram-icon.png';
import gitHubImageRoot from '../../../public/images/github-icon.png';
import linkedInImageRoot from '../../../public/images/linkedin-icon.png';
import emailImageRoot from '../../../public/images/email-icon.png';

import './Profile.css';

export default function Profile(){
    return (
        <div className="Profile">
            <figcaption>
                <figure>
                    <Image
                        imageRoot={profileImageRoot}
                        description="profile-image"
                    />
                </figure>
            </figcaption>

            <div className="Profile-info">
                <Header2 text="WILLIAM BERG ARAUJO DIOGO" />

                <p>Desenvolvedor Web Frontend - ReactJS</p>
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