const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Exclui a última posição da lista
console.log(pilotos);

pilotos.shift(); // Exclui a primeira posição da lista
console.log(pilotos);

pilotos.push('Verstappen', 'Massa'); // Inclui um ou mais elemento no final do array
console.log(pilotos);

pilotos.unshift('Hamilton', 'Bottas'); // Inclui um ou mais elementos no inicio do array
console.log(pilotos);

// splice pode adicionar e remover elementos em qualquer posição do array
pilotos.splice(2, 0, 'Toin', 'Zé');
// 2 é o indice onde a alteração será iniciada, 0 nenhum elemento será excluido 
// e após o 2º parametro os elementos que serão incluidos
console.log(pilotos);

pilotos.splice(2, 2);
// 2 é o indice onde a alteração será iniciada, 2 elementos serão excluidos 
console.log(pilotos);

// slice retorna um novo array apartir do indice informado
const algunsPilotos = pilotos.slice(3);
console.log(algunsPilotos);


const algunsPilotos1 = pilotos.slice(1, 4); // Retorna um novo array iniciando no indice 1 até a posição 4 - 1 do array
console.log(algunsPilotos1);