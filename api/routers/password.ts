import express from "express";
const passwordRouter = express.Router();
const Vigenere = require('caesar-salad').Vigenere;

passwordRouter.post("/encode", async (req, res) => {
    const {encodedMsg, password} = req.body;
    const encoded = Vigenere.Cipher(password).crypt(encodedMsg);
    res.send(encoded);
});

passwordRouter.post("/encode", async (req, res) => {
    const {decodedMsg, password} = req.body;
    const decoded = Vigenere.Cipher(password).crypt(decodedMsg);
    res.send(decoded);
})

export default passwordRouter;