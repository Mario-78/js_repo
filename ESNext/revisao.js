//let e const

{
    var a = 2;
    let b = 3;
    console.log(b); //let tem scopo de bolco
}
console.log(a); //var tem scopo global

//templete string

const produto = 'Ipad';
console.log(`${produto} é caro!`);

//Destructuring
const [l, e, ...tras] = 'Cod3r';
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i /*alias*/, nome} = {nome: 'Ana', idade: 9};
console.log(i, nome);