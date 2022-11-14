import joi from "joi";

const guesserSchema = joi.object({
    userId: joi.number().required(),
    gameId: joi.number().required(),
    result: joi.string().valid('1','X','2').required(),
    status: joi.string()
});

const deleteGuessSchema = joi.object({
    id: joi.number().required()
})

export {deleteGuessSchema, guesserSchema}