const mongoose = require('mongoose');

const database = "authors_db";

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log(`Successfully established a connection to: ${database}`))
    .catch( (err) => console.log("Something went wrong when connecting to the database: ", err));