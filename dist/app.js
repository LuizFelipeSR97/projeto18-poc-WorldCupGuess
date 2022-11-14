import { createGuess } from './controllers/createGuess.js';
import express from 'express';
var server = express();
server.post("/create", createGuess);
server.listen(4000, function () {
    console.log("Servidor rodando na porta 4000");
});
