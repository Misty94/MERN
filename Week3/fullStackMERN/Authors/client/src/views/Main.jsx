import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const Main = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/all')
            .then(res => {
                console.log("This is the get all response: ", res)
                setAuthors(res.data.results)
            })
            .catch(err => console.log("Error finding all: ", err))
    }, []);

    const removeFromDOM = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <>
            <Link to={'/new'}>Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map( (a, idx) => 
                            <tr key={idx}>
                                <td>{a.name}</td>
                                <td>
                                    <Link to={`/edit/${a._id}`}><button className='btn btn-secondary'>Edit</button></Link> | 
                                    <DeleteButton authorId={a._id} successCallback={() => removeFromDOM(a._id)} />
                                </td>
                            </tr>
                    )}
                </tbody>
            </table>
        </>
    )

}

export default Main;