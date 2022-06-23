import React, { useContext, useEffect } from 'react';

import { HiMenuAlt1 } from 'react-icons/hi';

import Profile from '../../components/Profile';
import ParagraphsDiv from '../../components/ParagraphsDiv';
import Heading2 from '../../components/Heading2';
import ProjectsContainer from '../ProjectsContainer';
import AbilitysContainer from '../AbilitysContainer';
import RenderIf from '../../components/RenderIf';
import ResumeButton from '../../components/ResumeButton';

import HomeContext from '../../contexts/HomeProvider/HomeContext';
import StyledMain from './styles';

export default function Main(){
    const { bodyWidth, toggleHamburguerMenu, isMenuOpen, menuBarRef } = useContext(HomeContext);

    useEffect(() => {
        if (isMenuOpen && bodyWidth <= 600) {
            menuBarRef.current.style.display = 'flex';
            menuBarRef.current.style.width = '60%';
        } else if (bodyWidth <= 600) {
            menuBarRef.current.style.display = 'none';
            menuBarRef.current.style.width = 0;
        }
    }, [isMenuOpen]);

    return (
        <StyledMain>
            <RenderIf isTrue={ bodyWidth <= 600 }>
                <HiMenuAlt1 onClick={toggleHamburguerMenu} className="menu-hamburguer" />
            </RenderIf>
            <Profile />
			<ResumeButton />
            <ParagraphsDiv classToElement="ParagraphsAboutMe">
                <p>
                    Olá, se você chegou até aqui provavelmente acessou o link por alguma das redes sociais que utilizo,
                    aproveita e já me acompanha nas outras também &#128517;, os links para todas estão no card acima.
                    Como já &quot;dev&quot; ter visto, me chamo <span className="red-span">William Berg</span> e sou desenvolvedor Frontend, ou seja, minha especialidade
                    está em desenvolver interfaces agradáveis e interativas para o usuário.
                </p>

                <p>
                    Meu gosto pela programação começou logo quando a descobri, no meu primeiro ano do ensino médio, onde fazia
                    um curso técnico integrado de Redes de computadores e tínhamos matérias que envolviam a mesma. Com o tempo,
                    resolvi me especializar na área de desenvolvimento web Frontend.
                </p>

                <p>Mas agora partindo para o que realmente interessa, logo abaixo mostro minhas habilidades e projetos
                desenvolvidos ao longo de mais de 1 ano de dedicação.
                </p>
            </ParagraphsDiv>

            <section>
                <Heading2 elementId="habilidades" text="habilidades" />
                <AbilitysContainer />
            </section>

            {/* <section>
                <Heading2 elementId="experiencia" text="experiência" />
                <ParagraphsDiv classToElement="ParagraphsExperience">
                    <p>
                        Durante esses mais de 12 meses de dedicação ao estudos, adquiri o conhecimento que acredito ser
                        essencial para um dev Frontend júnior, estando preparado para iniciar uma carreira na área. Por meio
                        de projetos consigo demonstrar do que estou falando.
                    </p>

                    <p>
                        Manipulações da DOM, requisições fetch/axios, display flex e grid, layout responsivo e organização de código são alguns das
                        habilidades que domino.
                    </p>

                    <p>
                        Mas deixando um pouco de lado a explicação, bora pros projetos que é aqui que eu confirmo o que estou
                        falando.
                    </p>
                </ParagraphsDiv>

            </section> */}

            <section>
                <Heading2 elementId="projetos" text="projetos" />
                <ProjectsContainer />
            </section>
        </StyledMain>
    );
}
