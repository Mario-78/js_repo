function calc(n){
    let anu = 100

    for(let i = 0; i < n - 1; i++){
        anu *= 1.05
    }
    return anu }

console.log(calc(1))
console.log(calc(2))
console.log(calc(3))
console.log(calc(4))
console.log(calc(5))
console.log(calc(6))
console.log(calc(12))