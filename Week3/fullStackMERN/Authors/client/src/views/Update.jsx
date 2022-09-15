import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Paper, FormControl, OutlinedInput, Button } from '@material-ui/core';
// import Form from '../components/Form';

const styles = {
    paper: { width: "20rem", padding: "1rem"},
    input: { marginBottom: "1rem"},
    button: { width: "100%"}
}

const Update = () => {
    const [name, setName] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log("This is the update response: ", res)
                setName(res.data.results.name)
            })
            .catch(err => console.log("Update get reqest error: ", err))
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/update/${id}`, {name})
            .then(res => {
                console.log("This is your axios put res: ", res)
                navigate('/')
            })
            .catch(err => {
                console.log("Update author error: ", err);
                const errorResponse = err.response.data.err.errors;
                console.log("Update Validation: ", err.response.data.err.errors)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return (
        <>
            <Link to={'/'}>Home</Link>
            <p>Edit this author:</p>
            {/* <Form initialName={author} onSubmitProp={ updateAuthor } /> */}
            <Paper elevation={3} style={styles.paper}>
            <form onSubmit={ updateAuthor } className='m-5'>
                {errors.map((err, index) => <p key={index} className='text-danger'>{err}</p>)}
                <FormControl variant="outlined" style={styles.input}>
                    <OutlinedInput type="text" name="name" onChange={ (e) => setName(e.target.value) } value={name} />
                </FormControl>
                <Link to={'/'}><Button variant="contained" color="primary" className='me-2'>Cancel</Button></Link>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        </Paper>
        </>
    )

}

export default Update;