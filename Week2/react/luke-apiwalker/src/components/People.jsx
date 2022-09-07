import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const People = () => {
    const [data, setData] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((response) => {
            console.log("This is the axios response ", response)
            setData(response.data)
        })
        .catch((err) => {
            console.error("Uh-oh, this is your error: ", err)
            setData({error: "These aren't the droids you're looking for!"})
        })
    }, [id]) // This forces the useEffect callback to run when the ID given for the route changes

    return data.error ? (
        <div>
            <h1>{data.error}</h1>
            <img src="https://i.insider.com/50eba1fb6bb3f77312000002" alt="Obi-Wan Kenobi picture" height={"400px"} />
        </div>
        ) : (
        <div>
            <h1>{data.name}</h1>
            <p style={{textTransform: "capitalize"}}><strong>Gender: </strong>{data.gender}</p>
            <p style={{textTransform: "capitalize"}}><strong>Hair Color: </strong>{data.hair_color}</p>
            <p style={{textTransform: "capitalize"}}><strong>Eye Color: </strong>{data.eye_color}</p>
            <p style={{textTransform: "capitalize"}}><strong>Skin Color: </strong>{data.skin_color}</p>
        </div>
        )
}

export default People;