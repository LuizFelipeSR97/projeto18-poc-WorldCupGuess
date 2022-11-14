import { GuessType } from "../protocols/Types.js";

const guessesArray : GuessType[] = [
    {
        id : 1,
        userId: 1,
        gameId : 1,
        result: "1",
        isOpen: true
    },
    {
        id : 2,
        userId: 1,
        gameId : 2,
        result: "X",
        isOpen: true
    },
    {
        id : 3,
        userId: 1,
        gameId : 4,
        result: "1",
        isOpen: true
    },
    {
        id : 4,
        userId: 1,
        gameId : 3,
        result: "2",
        isOpen: true
    },
    {
        id : 5,
        userId: 2,
        gameId : 1,
        result: "2",
        isOpen: true
    },
    {
        id : 6,
        userId: 3,
        gameId : 2,
        result: "2",
        isOpen: true
    },
    {
        id : 7,
        userId: 2,
        gameId : 4,
        result: "2",
        isOpen: true
    }
]

export {guessesArray}