const express = require('express');
const app = express();
const port = 8000;

const server = app.listen(port, () => 
    console.log(`The server is all fired up on ${port}!`)
);

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand) " + socket.id);
    socket.on("client_event", data => {
        io.emit("Welcome!", data);
    });
});