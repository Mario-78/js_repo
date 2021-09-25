Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const produtos = [
    { name: 'Notebook', price: 2499, fragil: true },
    { name: 'Ipad Pro', price: 4199, fragil: true },
    { name: 'Copo de vidro', price: 12.49, fragil: true },
    { name: 'Copo de plastico', price: 18.99, fragil: false },

];

const caro = produto => produto.price >= 500;
const fragil = produto => produto.fragil;

const result0 = produtos.filter(caro).filter(fragil);
console.log(result0);
const result1 = produtos.filter2(caro).filter2(fragil);
console.log(result1);
console.log(produtos.filter(caro).filter(fragil));
console.log(produtos.filter2(caro).filter2(fragil));