class Pessoa{
    constructor(name){
        this.name = name
    }
    falar(){
        console.log(`meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa('Mário')
p1.falar()

const criarPessoa = (name) => {
    return {
        falar: () => console.log(`Meu nome é ${name}`)
    }
}

const p2 = criarPessoa('Mário')
p2.falar()