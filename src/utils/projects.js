import rickAndMortyVideo from '../videos/rick-and-morty.webm';
import restaurantVideo from '../videos/restaurante.webm';
import jogoDaVelhaVideo from '../videos/jogo-da-velha.webm';
// import toDoListVideo from '../videos/to-do-list.webm';
import appClimaVideo from '../videos/previsao-do-tempo.webm';
// import soccerVideo from '../videos/soccer.webm';
// import gotVideo from '../videos/game-of-thrones.webm';
import urnaVideo from '../videos/urna-eletronica.webm';

const projects = [
    {
        name: 'Rick & Morty API',
        description: 'Tenha acesso à inúmeras informações sobre o seriado Rick e morty, com uma interface bonita e interativa.',
        linkToProject: 'https://williamberg123.github.io/rick-and-morty/',
        linkToRepository: 'https://github.com/williamberg123/rick-and-morty/',
        videoToRender: rickAndMortyVideo
    },
    {
        name: 'Ecommerce Restaurante',
        description: 'Venha e faça seus pedidos no Berg restaurante, contamos com um cardápio variado para todos os gostos.',
        linkToProject: 'https://williamberg123.github.io/ecommerce-restaurante/',
        linkToRepository: 'https://github.com/williamberg123/ecommerce-restaurante/',
        videoToRender: restaurantVideo
    },
    // {
    //     name: 'ToDo List App',
    //     description: 'Cansado de ter que fazer listas no papel? Aqui está sua solução, experimente e use em seu dia a dia.',
    //     linkToProject: 'https://williamberg123.github.io/todolist-react/',
    //     linkToRepository: 'https://github.com/williamberg123/todolist-react',
    //     videoToRender: toDoListVideo
    // },
    {
        name: 'App Clima',
        description: 'Acesse as informações do clima da sua cidade, como temperatura atual, mínima e máxima e umidade do ar.',
        linkToProject: 'https://williamberg123.github.io/previsao-tempo/',
        linkToRepository: 'https://github.com/williamberg123/previsao-tempo',
        videoToRender: appClimaVideo
    },
	{
        name: 'Jogo da Velha',
        description: 'Use a lógica para vencer seu adversário, e se divirta com este joguinho.',
        linkToProject: 'https://williamberg123.github.io/jogo-da-velha/',
        linkToRepository: 'https://github.com/williamberg123/jogo-da-velha/',
        videoToRender: jogoDaVelhaVideo
    },
    // {
    //     name: 'Soccer API',
    //     description: 'Quer ficar por dentro de tudo que rola no mundo do futebol? Aqui você tem acesso a tudo e um pouco mais.',
    //     linkToProject: 'https://williamberg123.github.io/soccer/',
    //     linkToRepository: 'https://github.com/williamberg123/soccer',
    //     videoToRender: soccerVideo
    // },
	// {
    //     name: 'Game of Thrones',
    //     description: 'Primeiro projeto desenvolvido usando o conceito de styled-components, onde consumo uma API da série Game oh Thrones.',
    //     linkToProject: 'https://williamberg123.github.io/game-of-thrones/',
    //     linkToRepository: 'https://github.com/williamberg123/game-of-thrones/',
    //     videoToRender: gotVideo
    // },
	{
        name: 'Simulador de Urna',
        description: 'Simule um processo de votação real aqui! Projeto desenvolvido para fins somente de estudo, nenhum dado seu é armazenado.',
        linkToProject: 'https://williamberg123.github.io/simulador-de-urna/',
        linkToRepository: 'https://github.com/williamberg123/simulador-de-urna/',
        videoToRender: urnaVideo
    }
];

export default projects;
