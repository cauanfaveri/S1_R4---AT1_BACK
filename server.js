const express = require('express');
const app = express();
const porta = 4000;

app.get('/operacao/:tipo', (req, res) => {
    const { tipo } = req.params;
    const { numUm, numDois } = req.query;

    const n1 = parseFloat(numUm);
    const n2 = parseFloat(numDois);
    let resultado;

    switch (tipo) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
            resultado = n1 / n2;
            break;
    }

    res.send(`O resultado da ${tipo} é: ${resultado}`);
});
app.listen(porta, () => {
    console.log(`Exercício 3 na porta ${porta}`);
    });