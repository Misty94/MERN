import React, { useState } from 'react';
import { Paper, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const styles = {
    paper: { width: "20rem", padding: "1rem"},
    input: { marginBottom: "1rem"},
    button: { width: "100%"}
}

const Form = () => {
    // const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); // this array will store the errors from the api

    const submitHandler = (e) => {
        e.preventDefault();
        // onSubmitProp({name})
        axios.post('http://localhost:8000/api/author/new', {name})
            .then(res => {
                console.log("Response when creating an author: ", res) 
                navigate('/')
            })
            .catch(err => { 
                console.log("Error Creating: ", err)
                const errorResponse = err.response.data.err.errors;
                console.log("Create Validation: ", err.response.data.err.errors)
                const errorArr= [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return (
        <Paper elevation={3} style={styles.paper}>
            {errors.map((err, i) => {
                return (
                    <p key={i} className='text-danger'>{err}</p>
                )
            })}
            <form onSubmit={ submitHandler } className='m-5'>
            {/* {errors.map((err, i) => { <p key={i} className='text-danger'>{err}</p>})} */}
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Name:</InputLabel>
                    <OutlinedInput type="text" name="name" onChange={ (e) => setName(e.target.value) } value={name} />
                </FormControl>
                <Link to={'/'}><Button variant="contained" color="primary" className='me-2'>Cancel</Button></Link>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        </Paper>
    )

}

export default Form;