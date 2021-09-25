//console.log(typeof Array, typeof new Array(), typeof []);

//let aprovados = new Array('Bia', 'Carlos', 'Ana'); // Deprecated forma de instaciação
//console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados);
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // Ordena o array
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1); // O 1º parameto referecia o indice e o 2º a qtdd de elementos a serem excluidos
console.log(aprovados);


aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 2, 'elem1', 'elem2'); // Exclui 2 elementos iniciando pelo de indice 1 e acrescenta dois elementos apartir do indice 1 no array
console.log(aprovados);


aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'elem1', 'elem2'); // Exclui 1 elementos iniciando pelo de indice 1 e acrescenta dois elementos apartir do indice 1 no array