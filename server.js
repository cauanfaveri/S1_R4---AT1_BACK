const express = require('express');
const app = express();
const fs = require('fs/promises');
const port = 2600;

async function name(params) {
    
}
app.get('/soma/:numeroUm/:numeroDois', (req, res) => {
    const numUm = Number(req.params.numUm);
    const numDois = Number(req.params.numDois);
    const resultado = numUm + numDois;
    res.send(`Resultado da soma: ${resultado}`)
});
