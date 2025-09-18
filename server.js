const express = require('express');
const app = express();
const porta = 5000;

app.get('/ano/:ano', async (req, res) => {
        const {ano} = Number(req.params.ano)
        const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    if (anoBissexto){
    res.send("O ano ${ano} é bissexto")
    }else{
    res.send("O ano não é bissexto")
    }
});
app.listen(porta, () => {
    console.log(`Exercício 3 na porta ${porta}`)
});