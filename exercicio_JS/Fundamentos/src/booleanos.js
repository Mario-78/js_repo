let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
console.log(!isAtivo);

console.log('Os trues');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');//espaço em branco
console.log(!!'text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log('Os falses');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
isAtivo = false;
console.log(!!isAtivo);

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' '));