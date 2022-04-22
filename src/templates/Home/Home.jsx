import React from 'react';
import './Home.css';

import NavBar from '../../components/NavBar/NavBar';
import Main from '../../containers/Main/Main';

export default function Home(){
    return (
        <div className="Home">
            <NavBar />
            <Main />
        </div>
    );
}
