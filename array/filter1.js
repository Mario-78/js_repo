const cart = [
    { name: "Borracha", price: 3.45 },
    { name: "Caderno", price: 13.90 },
    { name: "kit de Lapis", price: 41.22 },
    { name: "Caneta", price: 7.50 }
];

console.log(cart.filter(function(p) {
    return p.price > 10.00;
}));

const produtos = [
    { name: 'Notebook', price: 2499, fragil: true },
    { name: 'Ipad Pro', price: 4199, fragil: true },
    { name: 'Copo de vidro', price: 12.49, fragil: true },
    { name: 'Copo de plastico', price: 18.99, fragil: false },

];

const caro = produto => produto.price >= 500;
const fragil = produto => produto.fragil;

const result = produtos.filter(caro).filter(fragil);
console.log(result);
console.log(produtos.filter(caro).filter(fragil));