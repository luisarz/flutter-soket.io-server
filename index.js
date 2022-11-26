const express = require('express');

// app de express
const app = express();


const path = require('path');
require('dotenv').config();


// Node server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
// mensajes de 
require('./sokets/soket');

// path publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('servi corriendo en el puerto '+process.env.PORT);
});