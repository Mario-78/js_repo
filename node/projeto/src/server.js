const porta = 3003;

const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    //res.send({ name: 'Notebook', preco: 123.34 }); //Dados mocados para teste
    res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvaProduto({
        name: req.body.name,
        price: req.body.price
    });
    res.send(produto); //Retorna um JSON
    //console.log(produto);
});

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvaProduto({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    });
    res.send(produto); //Retorna um JSON
    //console.log(produto);
});

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto); //Retorna um JSON
    //console.log(produto);
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
});