const nums = [1, 2, 3, 4, 5];

// Map é um for com propósito que gera um novo array transformado
let resultado = nums.map(function(e) {
    return e * 2 + 'a';
});

console.log(resultado, nums);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const toMoeda = e => `${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(toMoeda);
console.log(resultado, nums);