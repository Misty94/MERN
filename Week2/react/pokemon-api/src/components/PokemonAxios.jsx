import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonAxios = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [buttonSubmit, setButtonSubmit] = useState(false);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => {
                console.log("This is the response: ", response);
                setPokemonData(response.data.results)})
            .catch((err) => {console.log("Uh oh, this is your error: ", err);})
    }, []);

    const handleSubmit = (e) => {
        setButtonSubmit(!buttonSubmit);
    }

    return(
        <div>
            <button onClick={ handleSubmit } style={{backgroundColor: "gray", color: "snow", padding: "5px"}}>Fetch Pokemon</button>
            {
                buttonSubmit?
                <div>
                    { pokemonData.map((pkmn, i) =>
                        <h3 key={i} style={{textTransform: "capitalize"}}>{i + 1}. {pkmn.name}</h3>
                    )}
                </div> : ""
            }
        </div>
    )
}

export default PokemonAxios;