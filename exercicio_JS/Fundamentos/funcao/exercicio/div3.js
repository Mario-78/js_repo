

function isDiv3(n) {
    resto = n%3
   
    if(resto === 0){
        return true
    }else{
        return false
    }
}

console.log(isDiv3(27))
console.log(isDiv3(8))
console.log(isDiv3(36))