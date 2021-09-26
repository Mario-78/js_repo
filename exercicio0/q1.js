const { isString, isBoolean, isNumber } = require("lodash");

const maiorOuIgualQ = (n1, n2) => {
    if (isString(n1) || isString(n2)) {
        return false;
    } else if (n1 >= n2) {
        return true;
    } else {
        return false;
    }
};

console.log(maiorOuIgualQ(0, 0));
console.log(maiorOuIgualQ(0, "0"));
console.log(maiorOuIgualQ(5, 1));

const valid = (arg) => {
    let msn = 'booleano ou número esperados, mas o parâmetro é do tipo string';
    if (isString(arg)) {
        return msn;
    } else if (isBoolean(arg)) {
        if (arg === true) {
            return false;
        }
        if (arg === false) {
            return true;
        }
    } else if (isNumber(arg)) {
        return arg * -1;
    }
};

console.log('\n');
console.log(valid(false));
console.log(valid('6'));
console.log(valid(-2000));
console.log(valid('programação'));

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo;
}

console.log('\n');
console.log(estaEntre(10, 100, 50)); // retornará true
console.log(estaEntre(16, 100, 160)); // retornará false
console.log(estaEntre(3, 150, 3)); // retornará false
console.log(estaEntre(3, 150, 3, true)); // retornará true

setInterval(() => console.log(random(1, 1000)), 2000);