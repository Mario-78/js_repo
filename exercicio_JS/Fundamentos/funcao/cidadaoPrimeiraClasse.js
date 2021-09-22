//criar função de forma literal
function fun1(){}

//armazenar uma função em uma variável
const fun2 = function(){}

//armazenar em um array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo do objeto

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//passar uma função como parametro de outra função

function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//uma função pode retornar/conter outra função

function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2, 3)(4)//passando todos os parâmetros de uma vez
const res1 = soma(2, 3)//armazenando o primeiro resultado 
res1(4)//em uma constante e aplicando a segunda função depois