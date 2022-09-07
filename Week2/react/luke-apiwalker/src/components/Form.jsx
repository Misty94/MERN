import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [type, setType] = useState("people");
    const [id, setId] = useState(1);

    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`)
    }

    return (
        <div className="m-3">
            <form onSubmit={search}>
                <label className="me-2">Search for: </label>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option>People</option>
                    <option>Planets</option>
                    <option>Films</option>
                </select>
                <label className="mx-2">ID: </label>
                <input type="number" min={1} onChange={e => setId(e.target.value)} value={id} />
                <input type="submit" value="Search" className="btn btn-primary ms-2 px-4" />
            </form>
        </div>
    )

}

export default Form;