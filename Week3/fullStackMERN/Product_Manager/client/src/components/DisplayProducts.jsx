import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProducts = (props) => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.productList.map( (item, i) => 
                <p key={i}><Link to={`/${item._id}`}>{item.title}</Link></p>
            )}
        </div>
    )
}

export default DisplayProducts;