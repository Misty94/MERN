// const express = require("express");
import express from 'express';
const app = express();
const port = 8000;
import { faker } from '@faker-js/faker';
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const User = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
    return newUser;
}

const Company = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

app.get("/api/users/new", (req, res) => {
    res.json({ newUser: User() })
});

app.get("/api/companies/new", (req, res) => {
    res.json({ newCompany: Company() })
});

app.get("/api/user/company", (req, res) => {
    res.json({
        newUser: User(),
        newCompany: Company()
    })
});



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );