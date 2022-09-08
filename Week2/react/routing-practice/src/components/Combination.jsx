import React from 'react';
import { useParams } from 'react-router';

const Combination = () => {

    const {word, textColor, bgColor} = useParams();

    return (
        <div>
            <h1 style={{color: textColor, backgroundColor: bgColor}}>The word is: {word}.</h1>
        </div>
    )
}

export default Combination;