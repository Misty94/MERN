import React, { useState } from 'react';
import Display from './Display';

const HookForm = () => {
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
                    { firstName.length < 2 && firstName.length > 0 ? <p className="text-danger">First Name must be at least 2 characters long!</p> : '' }
                </div>
                <div className="mb-3">
                    <label className="me-5">Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }/>
                    { lastName.length < 2 && lastName.length > 0 ? <p className="text-danger">Last Name must be at least 2 characters long!</p> : '' }
                </div>
                <div className="mb-3">
                    <label className="me-5">Email: </label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value)} value={ email }/>
                    { email.length < 5 && email.length > 0 ? <p className="text-danger">Email must be at least 5 characters long!</p> : '' }
                </div>
                <div className="mb-3">
                    <label className="me-5">Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)} value={ password }/>
                    { password.length < 8 && password.length > 0 ? <p className="text-danger">Your password must be at least 8 characters long!</p> : '' }
                </div>
                <div className="mb-3">
                    <label className="me-2">Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirm(e.target.value)} value={ confirm }/>
                    { confirm != password && confirm.length > 0 ? <p className="text-danger">Your passwords must match!</p> : '' }
                </div>
                {/* <input type="submit" className="my-2" value="Create User" /> */}
            </form>
            <h5 className="my-2">Your Form Data:</h5>
            <Display firstName = {firstName} lastName = {lastName} email = {email} password = {password} confirm = {confirm}/>
        </div>
    );
};

export default HookForm;