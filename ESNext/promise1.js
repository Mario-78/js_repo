let p = new Promise(function(resolve) { //os resultados do 'THEN' são encadeados p/ o proximo 'THEN'
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p.then(valor => valor) //Retorna o array completo
    .then(resultadoValor => resultadoValor[0]) //Retorna o primeiro elemento do array 
    .then(resultadoValorPosition0 =>
        console.log(resultadoValorPosition0[0].toLowerCase())) //Transforma a 1º letra do 1º elemento minuscula

//Outra possibilidade é passando funções como parametro p/ o 'THEN'

const primeiroElemento = arrayOrString => arrayOrString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) { //os resultados do 'THEN' são encadeados p/ o proximo 'THEN'
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})


.then(primeiroElemento) //Retorna o 1º elemento do array ou string
    .then(primeiroElemento) //Retorna o 1º elemento do array ou string
    .then(letraMinuscula) //Retorna lowerCase da 1º letra do array ou arrayOrString
    .then(console.log)