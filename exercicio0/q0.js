const frase = (arg) => `Olá, ${arg}!`;
console.log(frase('Zé'));

const diasDeIdade = (arg) => { // calculo de idade em dias considerando anos bisextos
    let aux = parseInt(arg / 4);
    if (aux === 0) {
        return arg * 365;
    } else {
        return arg * 365 + aux;
    }
};

console.log(diasDeIdade(25));
console.log(diasDeIdade(70));

const salario = (ht, vh) => ht * vh;
console.log(salario(150, 40.5));

const maiorQ = (n1, n2) => {
    if (n1 > n2) {
        return n1;
    } else if (n2 > n1) {
        return n2;
    } else {
        return 'Iguais';
    }
};

console.log(maiorQ(8, 21));
console.log(maiorQ(32, -5));
console.log(maiorQ(5, 5));