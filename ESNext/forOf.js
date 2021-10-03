for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { //FOR IN percorre os indices do array
    console.log(i)
}

for (let assunto of assuntosEcma) { //FOR OF percorre os valores do array
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) { //percorrendo um array de arrays/Map
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { //acessando as chaves internas dos arrays do array principal
    console.log(chave)
}

for (let valor of assuntosMap.values()) { //acessando os valores das chaves internas dos arrays do array principal
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { //desestruturando as entradas de um array interno e acessando o valor 
    console.log(ch, vl) //dos arrays internos do array principal
}

const s = new Set(['a', 'b', 'c']) //percorrendo um Set
for (let letra of s) {
    console.log(letra)
}