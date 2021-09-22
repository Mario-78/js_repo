function getPrice(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.price * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    name: 'notebook',
    price: 4589,
    desc: 0.15,
}
console.log(getPrice.call(produto))
console.log(getPrice.apply(produto,[.25, 'R$']))//na função apply os parâmetros precisan de [S]
console.log(getPrice.call(produto, .1, '$'))
console.log(getPrice.apply(produto,[ .1, '$']))
