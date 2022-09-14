import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

const Details = () => {
    const [product, setProduct] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response => { 
                console.log("This is the response: ", response)
                setProduct(response.data.results)
            })
            .catch(err => console.log("Error with the get one request: ", err))
    }, [id]); // putting something inside that array will make it refresh when it is changed

    const deleteButton = () => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res => {
                console.log("Successfully deleted this: ", res)
                navigate('/')
            })
            .catch(err => console.log("Error when using delete: ", err))
    }

    return (
        <>
            {
                product ?
                <div>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>
                        <Link to={`/${product._id}/edit`} className='btn btn-warning'>Edit</Link> | 
                        <button onClick={() => deleteButton()} className='btn btn-danger ms-2' >Delete</button>
                        </p>
                </div> :
                <p></p>
            }
            
        </>
    )
}

export default Details;