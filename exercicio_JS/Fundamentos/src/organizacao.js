//Comentário de uma linha

/*Comentário de 
multiplas linhas*/

console.log("Olá mundo")
var a=30 
let b=40
console.log(a,b)
a=300
b=500
console.log(a,b)
b='legal'
console.log(b)

const peso = 1.0
const peso1 = Number('2.0')

console.log(peso, peso1)
console.log(Number.isInteger(peso))
console.log(Number.isInteger(peso1))

const av1 = 9.871
const av2 = 6.871

const vt = av1 * peso + av2 * peso1
const media = vt/(peso + peso1)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)