const pessoa = {
    saudacao: 'Bomdia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar//não excuta a função interna do obj
falar()

const falarPessoa = pessoa.falar.bind(pessoa)//bind aponta para o obj oa qual pertence a função
falarPessoa()