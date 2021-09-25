const aprovados = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

aprovados.forEach(function(name, indice) {
    // Para ter acesso ao indice no forEach obrigatóriamente ele será o 2º parametro
    console.log(`${indice + 1} ${name}`);
});
console.log("\n");

aprovados.forEach(function(name, indice, Array) {
    // ) 3º parametro retorna o próprio array
    console.log(`${indice + 1} ${name}`, Array);
});


console.log("\n");
aprovados.forEach(name => console.log(name));
console.log("\n");

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);