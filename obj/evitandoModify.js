// Object.preventExtensions
const produto = Object.preventExtensions({ // Permite alterar o valor e excluir atributos/chaves, mas não permite incluir novos atributos
    name: 'qualquer',
    price: 1.99,
    tag: 'promoção'
});

console.log('Extensível', Object.isExtensible(produto));

produto.name = 'Borracha';
produto.desc = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal

const pessoa = { name: 'Juliana', idade: 35 };
Object.seal(pessoa); // Permite apenas alteração dos valores dos atributos
console.log(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.name;
pessoa.idade = 96;
console.log(pessoa);

// Object.freeze não permite nenhuma alterção de valor ou atributo