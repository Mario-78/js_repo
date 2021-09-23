function isBsexto(n){
        if(n%400 === 0){
            return true
        }else if(n%100 === 0){
            return false
        }else if(n%4 === 0){
            return true
        }else{
            return false
        }
}

console.log(isBsexto(24))
console.log(isBsexto(200))
console.log(isBsexto(242))
console.log(isBsexto(80))
console.log(isBsexto(1200))