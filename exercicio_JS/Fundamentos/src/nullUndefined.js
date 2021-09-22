let valor // não inicializada
console.log(valor);

valor = null; //ausencia de valor
console.log(valor);

const produto = {}
console.log(produto.price);
console.log(produto);

produto.price = 3.5;
console.log(produto);

produto.price = undefined; // evite itribuir undefied
console.log(!!produto.price);
//delete produto.price
console.log(produto);

produto.price = null; // sem valor associado
console.log(!!produto.price);
console.log(produto);