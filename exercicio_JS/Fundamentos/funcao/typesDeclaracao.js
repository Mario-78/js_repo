//somente esse type de declaração permite que a mesma seja chamada antes de sua difinição
console.log(soma(4, 3))
//console.log(sub(4, 3))
//console.log(mult(4, 3))

//Function declaration
function soma(x, y){
    return x + y
}

//Function expression
const sub = function(x, y){
    return x -y
}
console.log(sub(4, 3))

//Named function exprssion
const mult = function mult(x, y){
    return x*y
}
console.log(mult(4, 3))