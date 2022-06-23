import React, { useState } from 'react';

import Ability from '../../components/Ability';
import StyledAbilitysContainer from './styles';

export default function AbilitysContainer() {
    const [ abilitys ] = useState([
        {
            text: 'html5',
            whichAbility: 'html',
            description: 'Linguagem responsável por estruturar o conteúdo do site, é escrita por meio de tags. Exemplo: <img />, <h1>, <p>.'
        },
        {
            text: 'css3',
            whichAbility: 'css',
            description: 'É usada para estilizar o seu site, tudo relacionado a visualização do conteúdo é feito nela.'
        },
        {
            text: 'javascript',
            whichAbility: 'javascript',
            description: 'Linguagem de programação entendida pelo browser, utilizada para dar interatividade ao sistema.Originalmente criada para ser uma linguagem client side (que roda do lado do cliente), mas que com o tempo foi implementada também do lado do servidor(server side).'
        },
        {
            text: 'git',
            whichAbility: 'git',
            description: 'Sistema de versionamento de código, ou seja, usada para salvar localmente os arquivos de projetos.'
        },
        {
            text: 'github',
            whichAbility: 'github',
            description: 'Repositório remoto do Git, usado para salvar remotamente os arquivos de projetos.'
        },
        {
            text: 'react',
            whichAbility: 'react',
            description: 'Lib de desenvolvimento de interfaces Frontend, criada pelo grupo do Facebook em 2011. '
        }
    ]);

    const children = abilitys.map((ability) => {
        return <Ability key={ability.text} {...ability} />;
    });

    return (
        <StyledAbilitysContainer>
            {children}
        </StyledAbilitysContainer>
    );
}
