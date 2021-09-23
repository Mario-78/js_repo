function criarProd(name, price, desc = 0){
    return {
        name,
        price,
        desc
    }
}

console.log(criarProd('Noteboock', 2000.00, 15))

console.log(criarProd('Mouse', 200.00, 10))