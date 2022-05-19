import React, { useState } from 'react';

import Ability from '../../components/Ability';

import './style.css';

export default function AbilitysContainer() {
    const [ abilitys ] = useState([
        { text: 'html5', whichAbility: 'html' },
        { text: 'css3', whichAbility: 'css' },
        { text: 'javascript', whichAbility: 'javascript' },
        { text: 'git', whichAbility: 'git' },
        { text: 'github', whichAbility: 'github' },
        { text: 'react', whichAbility: 'react' }
    ]);

    const children = abilitys.map((ability) => {
        return <Ability {...ability} />;
    });

    return (
        <div className="AbilitysContainer">
            {children}
        </div>
    );
}
