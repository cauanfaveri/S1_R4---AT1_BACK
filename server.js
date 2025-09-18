const express = require('express');
const app = express();
const porta = 5100;

app.get('/saudacao/:nome', (req, res) => {
    try {
        const nome = req.params.nome;
        const hora = parseInt(req.query.hora);
        let saudacao = '';

        if (hora >= 4 && hora < 13) {
            saudacao = 'Bom dia';
        } 
        if (hora >= 13 && hora < 18) {
            saudacao = 'Boa tarde';
        } 
        if (hora >= 18 || hora < 3) {
            saudacao = 'Boa noite';
        }

        res.status(200).send(`${saudacao}, ${nome}!`);
    } catch (error) {
        res.status(500).send('Erro: Falha no servidor.');
    }
});