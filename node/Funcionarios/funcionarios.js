const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const result0 = funcionario => funcionario.pais === 'China';
const result1 = funcionario => funcionario.genero === 'F';
const result2 = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then(Response => {
    const funcionarios = Response.data;
    //console.log(funcionarios);



    const result = funcionarios.filter(result0).filter(result1).reduce(result2);

    console.log(result);
});