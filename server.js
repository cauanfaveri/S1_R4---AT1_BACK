const express = require('express');
const app = express();
const fs = require('fs/promises');
const porta = 2600;

app.get('/soma/:nUm/:nDois', (req, res) => {
    const {nUm, nDois} = req.params;
    const resultado = Number(nUm) + Number (nDois);
    res.json({ resultado })
})
//Subtração
app.get('/menos/:nUm/:nDois', (req, res) => {
    const {nUm, nDois} = req.params;
    const resultado = Number(nUm) - Number (nDois);
    res.json({ resultado })
})

//Multiplicação
app.get('/multiplicacao/:nUm/:nDois', (req, res) => {
    const {nUm, nDois} = req.params;
    const resultado = Number(nUm) * Number (nDois);
    res.json({ resultado })
})

//Divisão
app.get('/divisao/:nUm/:nDois', (req, res) => {
    const {nUm, nDois} = req.params;
    const resultado = Number(nUm) / Number (nDois);
    res.json({ resultado })
})

app.listen(porta, () => {
    console.log(`Exercício de soma na porta ${porta}`);
});