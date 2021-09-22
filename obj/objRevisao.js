const produto = new Object
produto.name = 'cadeira'
produto['marca do produto'] = 'generica'//possibilita criar atributos com espaços
produto.price = 220

console.log(produto)

delete produto.price
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 19,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Antonio',
        idade: 20
    },{
        nome: 'Ana',
        idade: 25
    }]
}
console.log(carro)

carro.proprietario.endereço.numero = 1000
//carro['proprietario']['endereço']['logradouro'] = 'Av Gigante'
carro.proprietario.endereço.logradouro = 'Av Gigante'

console.log(carro)
console.log(carro.condutores.length)