const produtos = [
    { name: 'Notebook', price: 2499, fragil: true },
    { name: 'Ipad Pro', price: 4199, fragil: true },
    { name: 'Copo de vidro', price: 12.49, fragil: true },
    { name: 'Copo de plastico', price: 18.99, fragil: false },

];

const reult = produtos.map(p => p.price).reduce(function(acumulador, atual) {
    return acumulador + atual;
});

console.log(reult);