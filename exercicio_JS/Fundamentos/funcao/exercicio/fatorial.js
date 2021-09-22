function fat(n){
    let f = 0, aux = n
    if(n === 0 || n === 1){
        return n = 1
    }else if(n === 2){
        return n
    }else{
        while(n > 1){
            f = aux * (n-1)
            n--
            aux = f
            //console.log(f)
        }
        
    }
    return f
}

console.log(fat(5))
console.log(fat(1))
console.log(fat(0))
console.log(fat(2))