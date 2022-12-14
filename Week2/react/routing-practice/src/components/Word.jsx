import React from 'react';
import { useParams } from 'react-router';

const Word = () => {

    const {input} = useParams();

    return isNaN(input) ?
        (
            <h1>The word is: {input}.</h1> ) : (
            <h1>The number is: {input}.</h1>
        )
}

export default Word;