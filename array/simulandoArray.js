Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}


const aprovados = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

aprovados.forEach2(function(name, indice, Array) {
    // Para ter acesso ao indice no forEach obrigatóriamente ele será o 2º parametro
    console.log(`${indice + 1} ${name}`, Array);
});
console.log("\n");