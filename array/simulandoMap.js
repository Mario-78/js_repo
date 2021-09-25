Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const cart = [
    '{"name": "Borracha", "price": 3.45}',
    '{"name": "Caderno", "price": 13.90}',
    '{"name": "kit de Lapis", "price": 41.22}',
    '{"name": "Caneta", "price": 7.50}'
];

// Retornar um array apenas com os preços

const toObj = json => JSON.parse(json);
const price = produto => produto.price;

const result0 = cart.map(toObj).map(price);
console.log(result0);

const result1 = cart.map2(toObj).map2(price);
console.log(result1);