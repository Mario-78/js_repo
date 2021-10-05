const tecnologias = new Map() //instancia um obj com insersões chave/valor
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) //não funciona tem que ser acessado com get
console.log(tecnologias.get('react').framework)
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([ //outra forma de inserir chaves valores em um obj com array de arrays
    [function() {}, 'função'],
    [{}, 'Objeto'],
    [123, 'número']
])

chavesVariadas.forEach((vl, ch) => { //acesso ao obj com forEach 1º acessa o valor depois a chave
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //acessando se essa chave existe
console.log(chavesVariadas.get(123)) //aceesando o valor da chave
chavesVariadas.delete(123) //deletando a chave e consequentemente o seu(s) valor(es)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //o valor 'b' vai sobre escrever o valor 'a', pois a chave não aceita repetição 
console.log(chavesVariadas)