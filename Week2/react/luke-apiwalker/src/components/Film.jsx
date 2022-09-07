import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Film = () => {
    const [data, setData] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}/?format=json`)
        .then((response) => {
            console.log("This is the axios response ", response)
            setData(response.data)
        })
        .catch((err) => {
            console.error("Uh-oh, this is your error: ", err)
            setData({error: "These aren't the droids you're looking for!"})
        })
    }, [id])

    return data.error ? (
        <div>
            <h1>{data.error}</h1>
            <img src="https://i.insider.com/50eba1fb6bb3f77312000002" alt="Obi-Wan Kenobi picture" height={"400px"} />
        </div>
        ) : (
        <div>
            <h1>{data.title}</h1>
            <p style={{textTransform: "capitalize"}}><strong>Release Date: </strong>{data.release_date}</p>
            <p style={{textTransform: "capitalize"}}><strong>Director: </strong>{data.director}</p>
            <p style={{textTransform: "capitalize"}}><strong>Producer: </strong>{data.producer}</p>
            <p><strong>Opening Crawl: </strong></p>
            <p>{data.opening_crawl}</p>
        </div>
        )
}

export default Film;