triangulo = (a,b,c) =>{
    if(a == 0 || b == 0 || c == 0){
        return 'Valores inválidos!!'
    }else if(a == b && a == c){
        return 'Equilátero'
    }else if(a !== b && a !== c && b !== c){
        return 'Escaleno'
    }else{
        return 'Isósceles'
    }
}

console.log(triangulo(9,9,9))
console.log(triangulo(9,5,9))
console.log(triangulo(9,5,2))
console.log(triangulo(3,0,8))


