//Função construtora
function Pessoa(name){
    this.name = name
        
    this.falar = function(){
        console.log(`meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa('Mário')
p1.falar()

//Classe
class Pessoa1{
    constructor(name){
        this.name = name
    }
    falar1(){
        console.log(`meu nome é ${this.name}`)
    }
}

const p2 = new Pessoa1('Mário')
p2.falar1()