function Aula(name, videoID) {
    this.name = name;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Até breve', 456);

console.log(aula1, aula2);

// Simulando a função New

function novo(f, ...params) { // Recebe uma função e quantos parametros essa função necessite
    const obj = {} // Cria um objeto vazio
    obj.__proto__ = f.prototype; // Dieciona o ponteiro do obj __proto__ para o __proto__ da função
    f.apply(obj, params); // Recebe um objeto vazio e um array de parametos que são atribuidos aos atributos do obj
    return obj; // Por fim retorna o obj criado
}

const aula3 = novo(Aula, 'Bem vindo', 123);
const aula4 = novo(Aula, 'Até breve', 456);

console.log(aula3, aula4);