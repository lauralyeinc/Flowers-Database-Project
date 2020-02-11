const express = require('express');

const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    res.send(`<h1> 
    🌺 Flowers blooming and 🐝 buzzing Flower Database Project 
    </h1>`); 
});

module.exports = server; 