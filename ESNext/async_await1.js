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

//let p = esperar(1000).then(txt => console.log(txt))

/*esperar()
    .then(esperar)
    .then(esperar)
    .then(esperar)*/

async function executar() {
    await esperar(2000)
    console.log('Async/await 1...')
    await esperar(2000)
    console.log('Async/await 2...')
    await esperar(2000)
    console.log('Async/await 3...')
}

//executar()

async function executar2() { //função assincrona chamando outra função assincrona 
    const valor = await executar()
}

executar2()