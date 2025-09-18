const express = require('express');
const app = express();
const porta = 5200;

app.get('/Imc', (req, res) => {
    const {peso, altura} = req.query
    const imc = peso / (altura * altura);
    return imc;
});

if (imc< 18.5) {
    console.log("Classificação: Abaixo do peso");
  } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
    console.log("Classificação: Peso normal");
  } else {
    console.log("Classificação: Acima do peso");
  }
  app.listen(porta, () => {
    console.log(`Exercício de soma na porta ${porta}`)
  });