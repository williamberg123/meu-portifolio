import React from 'react';

import './ParagraphsDiv.css';

export default function ParagraphsDiv(){
    return (
        <div className="ParagraphsDiv">
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
               desenvolvidos ao longo de mais de 7 meses de dedicação.
            </p>
        </div>
    );
}