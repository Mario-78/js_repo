fabricantes = ['Mercedes', 'Audi' , 'BMW']


function imprimir(nome, indice){
    console.log(`${indice++}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})
fabricantes.forEach((a) => console.log(a))
let n = parseInt('2', 10)
    console.log(n)