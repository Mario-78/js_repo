// Usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras

function Produto(name, price, desc){
    this.name = name
    this.getPriceComDesconto = () =>{
        return price * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notbook', 2998.99, 0.25)

console.log(p1.getPriceComDesconto(), p2.getPriceComDesconto())

// Função factory

function criarFuncionario(name, salarioBase, faltas){
    return {
        name,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980.00, 4)
const f2 = criarFuncionario('Maria', 11400.00, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.name = 'Ana'
console.log(filha)

// Uma função famosa que retorna um objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)