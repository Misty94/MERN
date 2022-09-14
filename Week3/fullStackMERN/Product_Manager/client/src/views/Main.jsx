import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayProducts from '../components/DisplayProducts';
import ProductForm from '../components/ProductForm';

const Main = () => {
    const [productList, setProductList] = useState([]); // all data gets held in an empty array
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/all')
            .then(response => {
                console.log("This is the response: ", response)
                setProductList(response.data.results)})
                // setLoaded(true)
            .catch(err => console.log("There is an error: ", err));
    }, []);

    const removeFromDOM = productId => {
        setProductList(productList.filter(product => product._id !== productId));
    }

    return (
        <>
            <div>
                <ProductForm />
                <hr />
                {<DisplayProducts productList={productList} removeFromDOM={removeFromDOM} />}
            </div>
    </>
    )
}

export default Main;