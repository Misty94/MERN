import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProducts = (props) => {
    const { removeFromDOM } = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
            .then(res => {
                console.log("Delete was successful: ", res)
                removeFromDOM(productId)
            })
            .catch(err => console.error("Error from delete axios: ", err));
    }

    return (
        <div>
            <h1>All Products:</h1>
            {props.productList.map( (item, i) => 
                <p key={i}>
                    <Link to={`/${item._id}`}>{item.title}</Link> | 
                    <button onClick={(e) => {deleteProduct(item._id)}} className='btn btn-danger ms-2'>Delete</button>
                </p>
            )}
        </div>
    )
}

export default DisplayProducts;