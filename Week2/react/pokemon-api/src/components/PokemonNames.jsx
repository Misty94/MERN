import React, { useState } from 'react';

const PokemonNames = () => {

    const [pokemonList, setPokemon] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log("This is the response from API: ", response);
                setPokemon(response.results);
            })
            .catch((err) => {
                console.log("Uh-oh, this is the error: ", err);
            })
            // console.log("This is what I'm trying to map: ", pokemonList);
    }

    return (
        <div>
            <button onClick={ fetchPokemon } style={{backgroundColor: "grey", color: "snow", padding: "10px", border: "none"}}>Fetch Pokemon</button>
            <div >
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
        </div>
    )

    }

export default PokemonNames;