import { upsertGuess } from "./controllers/createGuess.js";
import { listGuesses } from "./controllers/getGuesses.js";
import { deleteGuess } from "./controllers/deleteGuess.js";

import express from 'express';

const server = express();
server.use(express.json())

server.post("/guess", upsertGuess)
server.delete("/guess", deleteGuess)
server.get("/guesses", listGuesses)


server.listen(4000, ()=> {
    console.log("Server running on port 4000")
})