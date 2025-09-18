const express = require('express');
const app = express();
const fs = require('fs/promises');
const porta = 2600;

app.get('/soma/:nUm/:nDois', (req, res) => {
    const {nUm, nDois} = req.params;
    const resultado = Number(nUm) + Number (nDois);
    res.json({ resultado })
})
app.listen(porta, () => {
    console.log(`Exercício de soma na porta ${porta}`);
});

