/*setTimeout(() => {
    console.log('Ex.: executando callback...')
    setTimeout(() => {
        console.log('Ex.: executando callback...')
        setTimeout(() => {
            console.log('Ex.: executando callback...')
        }, 2000);
    }, 2000);
}, 2000);*/

function esperar(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve('vishhhh...')
        }, tempo);
    })
}

let p = esperar(3000).then(txt => console.log(txt))

esperar()
    .then(esperar)
    .then(esperar)
    .then(esperar)