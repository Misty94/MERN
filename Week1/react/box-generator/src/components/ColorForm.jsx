import React, { useState } from 'react';

const ColorForm = () => {
    const [color, setColor] = useState("");
    const [listOfColors, setListOfColors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setListOfColors([...listOfColors, color]);
    }

    return (
        <>
            <div className="mt-2">
                <form onSubmit={ handleSubmit }>
                    <label className="me-2">Color </label>
                    <input type="text" onChange={ (e) => setColor(e.target.value) } value={ color } />
                    <input type="submit" value="Add" className="ms-2" />
                </form>
            </div>
            <div className="d-flex justify-content-center mt-5">
                {
                listOfColors.map((color, i) => {
                    return(
                        <div key={i} style={{backgroundColor: color, height: '100px', width: '100px', marginRight: '10px'}}></div>
                    )
                })
                }
            </div>
        </>
    )
}

export default ColorForm;