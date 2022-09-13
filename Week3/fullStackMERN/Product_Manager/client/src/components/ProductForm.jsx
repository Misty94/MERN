import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", {title, price, description})
            .then(res => console.log("This is the response: ", res))
            .catch(err => console.log("There is an error: ", err))
    }

    return (
        <>
            <h1 className='mb-3'>Product Manager</h1>
            <form onSubmit={ submitHandler }>
                <p>
                    <label className='me-3'>Title</label>
                    <input type="text" onChange={ (e) => setTitle(e.target.value) } value={ title }/>
                </p>
                <p>
                    <label className='me-3'>Price</label>
                    <input type="number" onChange={ (e) => setPrice(e.target.value) } value={ price }/>
                </p>
                <p>
                    <label className='me-3'>Description</label>
                    <input type="text" onChange={ (e) => setDescription(e.target.value) } value={ description }/>
                </p>
                <input type="submit" value="Create" />
            </form>
        </>
    )
}

export default ProductForm;