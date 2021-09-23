let dobro = function (a){
    return 2*a
}

console.log(dobro(Math.PI))

dobro = (a) => {//com os {} o return é obrigatório
    return 2*a
}

console.log(dobro(Math.PI))

dobro = a => 2*a//sem os {} return está implicito

console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

console.log(ola)//retorna o typeof do obj pois esqueci os()
console.log(ola())

ola = () => 'Olá '+ (5 + 9)

console.log(ola())

ola =  _ => 'Olá'

console.log(ola())