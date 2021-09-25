const produtos = [
    { name: 'Notebook', price: 2499, fragil: false },
    { name: 'Ipad Pro', price: 4199, fragil: false },
    { name: 'Copo de vidro', price: 12.49, fragil: true },
    { name: 'Copo de plastico', price: 18.99, fragil: false },

];

const tudoFragil = (acumulador, iten) => acumulador && iten;
const reult = produtos.map(p => p.fragil).reduce(tudoFragil);

console.log(reult);

const peloMenosUmFragil = (acumulador, iten) => acumulador || iten;
const result1 = produtos.map(p => p.fragil).reduce(peloMenosUmFragil);

console.log(result1);