import { Request, Response } from "express";
import connection from "../database/postgres.js";

async function listGuesses(req: Request, res: Response){

     if (req.query.userId){
          
          const userId = Number(req.query.userId);

          if (isNaN(userId)){
               return res.sendStatus(404)
          }
          const guesses = await connection.query(`SELECT * FROM palpite WHERE "userId"=$1`,[userId])
          
          if (guesses.rowCount===0){
               return res.sendStatus(404)
          }
          
          return res.send(guesses.rows)

     }   

     const guesses = await connection.query(`SELECT * FROM palpite`)
     return res.send(guesses.rows)
}

export {listGuesses}