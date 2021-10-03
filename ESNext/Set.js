const { set } = require("lodash")

//É um conjunto que não aceita repetição e nãoé indexado
const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('Palmeiras')
times.add('Santos').add('Gremio')

console.log(times)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Vasco')
console.log(times)
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSte = new Set(nomes)
console.log(nomesSte) //remove os elementos repetidos