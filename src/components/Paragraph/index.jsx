import React from 'react';

import PropTypes from 'prop-types';

export default function Paragraph({ paragraph }){
    return <p>{paragraph}</p>;
}

Paragraph.propTypes = {
    paragraph: PropTypes.string.isRequired
};