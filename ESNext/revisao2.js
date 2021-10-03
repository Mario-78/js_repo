//Arrow function
const soma = (a, b) => a + b;
console.log(soma(3, 2));

//Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

//Parametro default
function log(texto = 'Node') {
    console.log(texto);
};
log();
log('Sou mais forte');
log(null);

//operador rest
function total(...n) { //agrupa todos os params em um array
    let total = 0;
    n.forEach(n => total += n);
    return total;
}

console.log(total(1, 2, 3, 4, 5));