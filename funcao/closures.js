//Closures é o escopo criado quando uma função é declarada
//Esse escopo permite à função acessar e manipular variáveis externas à função
//Contexto lexico em ação
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const mf = fora()
console.log(mf())