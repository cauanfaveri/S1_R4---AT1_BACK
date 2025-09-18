const express = require('express');
const app = express();
const port = 4000;
const fs = require('fs/promises');

app.get('/calculadora', (req, res) => {
    const {operacao, nUm, nDois} = req.query
    if (operacao === 'soma'){
        resultado = Number(nUm) + Number(nDois)
        return res.json({resultado});
    });