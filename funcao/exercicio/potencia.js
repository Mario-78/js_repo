let p = (a, b) => Math.pow(a, b)

console.log(p(2,2))
console.log(p(9,2))

function pot(a, b){
    let tot = a
    for(let i = 0; i < b-1; i++){
        tot = tot*a
    }
    return tot
} 

let a = pot(5,3)

console.log(pot(2,2))
console.log(pot(a))