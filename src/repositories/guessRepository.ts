import { GuessType } from '../protocols/Types.js';
import connection from "../database/postgres.js";

async function deleteGuessRepository(id){

    //Fazer validacao do body
        //{"id": 2} 
        //Deu certo? Entao segue

    const guessId : number = id;

    const existentGuess = await connection.query(`SELECT * FROM palpite WHERE id=$1;`,[guessId])

    if (existentGuess.rowCount===0){
        return existentGuess
    } 
    const deletedGuess = await connection.query(`DELETE FROM palpite WHERE id = $1;`,[guessId])
    return deletedGuess
}

async function upsertGuessRepository(body){

    

    //Fazer validacao do body
        //{} igual ao GuessType - Deu certo? Entao segue

    let operation : string;
    const {userId, gameId, result} : GuessType = body;

    const existentGuess = await connection.query(`SELECT * FROM palpite WHERE "userId"=$1 and "gameId"=$2;`,[userId, gameId])

    if(existentGuess.rowCount>0){
        
        operation = "update";
        const id = existentGuess.rows[0].id
        if (body.status){
            const {status} = body;
            await connection.query(`UPDATE palpite SET result = $1, "status"=$2 WHERE id = $3;`,[result, status, id]);
        } else {
            await connection.query(`UPDATE palpite SET result = $1 WHERE id = $2;`,[result, id]);
        }
        

    } else {

        operation = "creation";
        if (body.status){
            const {status} = body;
            await connection.query(`INSERT INTO palpite ("userId","gameId",result,status) VALUES ($1,$2,$3,$4);`,[userId, gameId, result,status]);
        } else {
            await connection.query(`INSERT INTO palpite ("userId","gameId",result) VALUES ($1,$2,$3);`,[userId, gameId, result]);
        }
        
    }
    
    return operation
}

export {
    deleteGuessRepository, 
    upsertGuessRepository
}