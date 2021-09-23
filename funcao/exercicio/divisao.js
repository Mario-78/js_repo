let div = (a, b) => {
    let resto
    let res
    if(b == 0){
        return 'Valor do divisor não pode ser igual a 0'
    }else{
        res = parseInt(a/b)
        resto = (a/b)-res
    }
    return resto
}

console.log(div(5, 2))
console.log(div(25, 5))
console.log(div(5, 0))