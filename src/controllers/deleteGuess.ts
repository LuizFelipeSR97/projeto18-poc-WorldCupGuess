import {Request, Response} from 'express';
import {deleteGuessRepository} from "../repositories/guessRepository.js"

async function deleteGuess(req: Request, res: Response){
    
    const ans = await deleteGuessRepository(req.body.id)

    if (ans.rowCount===0){
        return res.status(404).send('A aposta procurada não existe. Tente novamente!')
    }
    
    return res.status(200).send('Aposta excluida com sucesso!')
}

export {
    deleteGuess
}