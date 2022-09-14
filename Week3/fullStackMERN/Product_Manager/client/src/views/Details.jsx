import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const Details = () => {
    const [product, setProduct] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response => { 
                console.log("This is the response: ", response)
                setProduct(response.data.results)
            })
            .catch(err => console.log("Error with the get one request: ", err))
    }, [id]); // putting something inside that array will make it refresh when it is changed

    return (
        <>
            {
                product ?
                <div>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </div> :
                <p></p>
            }
            
        </>
    )
}

export default Details;