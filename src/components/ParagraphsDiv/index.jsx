import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function ParagraphsDiv({ children, classToElement }){
    return (
        <div className={classToElement}>
            {children}
        </div>
    );
}

ParagraphsDiv.propTypes = {
    children: PropTypes.node.isRequired,
    classToElement: PropTypes.string
};
