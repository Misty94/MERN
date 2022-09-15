import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { authorId, successCallback } = props;

    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/author/delete/${authorId}`)
            .then(res => {
                console.log("Successful deletion: ", res)
                successCallback();
            })
            .catch(err => console.log("Error when trying to delete: ", err))
    }

    return (
        <>
            <button onClick={ deleteAuthor } className='btn btn-danger ms-2'>Delete</button>
        </>
    )
}

export default DeleteButton;