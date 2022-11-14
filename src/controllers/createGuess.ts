import {Request, Response} from 'express';

import {upsertGuessRepository} from "../repositories/guessRepository.js";
import {guesserSchema} from "../schemas/guesserSchema.js";

async function upsertGuess(req: Request, res: Response){

    const validation = guesserSchema.validate(req.body, {abortEarly: false});

    if (validation.error){

        const errors = validation.error.details.map(err=>err.message);
        return res.status(422).send(errors)

    } else if (req.body.status) {
        if (req.body.status !== "open" && req.body.status !== "closed"){
            return res.status(422).send("Ocorreu um erro ao definir o status do palpite. Escolha 'open', 'closed' ou não envie no body e tente novamente!")
        }
    }

    const upsertedGuess = await upsertGuessRepository(req.body)

    if (upsertedGuess==='update'){
        return res.status(201).send('Palpite alterado com sucesso!')
    } else if (upsertedGuess==='creation'){
        return res.status(201).send('Palpite criado com sucesso!')
    }
}

export {
    upsertGuess
}