const express = require('express');
const app = express();
const fs = require('fs/promises');
const porta = 3000;

app.get('/calculadora', (req, res) => {
    const {operacao, nUm, nDois} = req.query
    if (operacao === 'soma'){
        resultado = Number(nUm) + Number(nDois)
        return res.json({resultado});
    }
    if (operacao === 'subtracao'){
        resultado = Number(nUm) - Number(nDois)
        return res.json({resultado});
    }
    if (operacao === 'multiplicacao'){
        resultado = Number(nUm) * Number(nDois)
        return res.json({resultado});
    }
    if (operacao === 'divisao'){
        resultado = Number(nUm) / Number(nDois)
        return res.json({resultado});
    }

});
app.listen(porta, () => {
    console.log(`Exercício de soma na porta ${porta}`);
}); 