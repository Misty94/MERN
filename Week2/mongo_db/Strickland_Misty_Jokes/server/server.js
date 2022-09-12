const express = require("express");
const port = 8000;
const app = express();
const mongoose = require("mongoose");

app.use( express.json(), express.urlencoded({ extended: true }) );

require("./config/mongoose.config")
require("./routes/jokes.routes")(app)

app.listen(port, () => console.log(`Please report to the bridge: ${port}`));