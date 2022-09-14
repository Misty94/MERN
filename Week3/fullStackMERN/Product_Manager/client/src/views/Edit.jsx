import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => { // first you have to get the one product you're gonna update
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response => {
                console.log("This is the edit page get request: ", response)
                setTitle(response.data.results.title);
                setPrice(response.data.results.price);
                setDescription(response.data.results.description);
            })
            .catch(err => console.log("Edit page get request error: ", err))
    }, [id]);

    const submitUpdate = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${id}`, {title, price, description})
            .then(response => {
                console.log("This is your axios put response: ", response)
                navigate('/')
            })
            .catch(err => console.log("Update put error: ", err))
    }

    return (
        <div>
            <h1>Edit the Product:</h1>
            <form onSubmit={ submitUpdate }>
                <p>
                    <label className='me-3'>Title</label>
                    <input type="text" name="title" onChange={ (e) => setTitle(e.target.value) } value={ title }/>
                </p>
                <p>
                    <label className='me-3'>Price</label>
                    <input type="number" name='price' onChange={ (e) => setPrice(e.target.value) } value={ price }/>
                </p>
                <p>
                    <label className='me-3'>Description</label>
                    <input type="text" name='description' onChange={ (e) => setDescription(e.target.value) } value={ description }/>
                </p>
                <input type="submit" value="Edit" className='btn btn-success' />
            </form>
        </div>
    )
}

export default Edit;