import React, { useState } from 'react';
import Display from './Display';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirm};
        console.log("Welcome ", newUser);
    };

    return (
        <div className="w-50 m-5">
            <form onSubmit={createUser}>
                <div className="mb-3">
                    <label className="me-5">First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName }/>
                </div>
                <div className="mb-3">
                    <label className="me-5">Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }/>
                </div>
                <div className="mb-3">
                    <label className="me-5">Email: </label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value)} value={ email }/>
                </div>
                <div className="mb-3">
                    <label className="me-5">Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)} value={ password }/>
                </div>
                <div className="mb-3">
                    <label className="me-2">Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirm(e.target.value)} value={ confirm }/>
                </div>
                {/* <input type="submit" className="my-2" value="Create User" /> */}
            </form>
            <h5 className="my-2">Your Form Data:</h5>
            <Display firstName = {firstName} lastName = {lastName} email = {email} password = {password} confirm = {confirm}/>
        </div>
    );
};

export default HookForm;