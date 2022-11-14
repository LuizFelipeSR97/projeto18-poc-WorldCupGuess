function createGuess(req, res) {
    var body = req.body;
    res.send("O id do seu palpite \u00E9 ".concat(body.id, " e voc\u00EA palpitou ").concat(body.result));
}
export { createGuess };
