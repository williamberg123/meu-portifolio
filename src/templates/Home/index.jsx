import React from 'react';
import './style.css';

import NavBar from '../../components/NavBar';
import Main from '../../containers/Main';

export default function Home(){
    return (
        <div className="Home">
            <NavBar />
            <Main />
        </div>
    );
}
