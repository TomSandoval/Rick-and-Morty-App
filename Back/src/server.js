const express = require("express");
const router = require("../routes/index"); 
const cors = require("cors")
const { conn } = require('./DB_connection');

const PORT = 3001;
const server = express();
server.use(express.json());
server.use(cors())
server.use("/rickandmorty",router);

server.listen(PORT, ()=>{
    console.log(`Server raised in port ${PORT}`)
})