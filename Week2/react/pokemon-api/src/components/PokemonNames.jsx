import React, { useEffect, useState } from 'react';

const PokemonNames = () => {

    const [pokemonList, setPokemon] = useState([]);
    const [buttonSubmit, setButtonSubmit] = useState(false);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log("This is the response from API: ", response.results);
                setPokemon(response.results);
            })
            .catch((err) => {
                console.log("Uh-oh, this is the error: ", err);
            })
            // console.log("This is what I'm trying to map: ", pokemonList);
    }, [buttonSubmit])

    return (
        <div>
            <button onClick={ () => {setButtonSubmit(!buttonSubmit)}}>Fetch Pokemon</button>
            {
                pokemonList.map((pkmn, idx) => {
                    return (
                        <div key={idx}>
                            <h3 style={{textTransform: "capitalize"}}>{idx+1}. {pkmn.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )

    }

export default PokemonNames;