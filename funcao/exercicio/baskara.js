function delta(a, b, c){
    return Math.sqrt(b*b - 4*a*c)
} 
equa = (a, b, c) => {
    r = delta(a, b, c)
    let vet = []
     if(r >= 0){
        n1 = 2*a
        n2 = -b + r
        n3 = n2/n1        
        vet.push(parseFloat(n3.toFixed(2)))
        n2 = -b - r
        n3 = n2/n1
        vet.push(parseFloat(n3.toFixed(2)))
        return vet 
    }else{        
        return 'Delta é negativo'
    }
}
console.log(equa(3, -2, -8))
console.log(equa(3, 1, 2))