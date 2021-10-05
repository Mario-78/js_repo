function getRandom(maxNum, qtdMax) {
    let n = 1;
    const jogo = [];
    let s = ''

    const val = () => Math.floor(Math.random() * maxNum + 1);

    do {
        while (n <= qtdMax) {
            let numero = val();

            if (jogo.indexOf(numero) === -1) {
                jogo.push(numero)
            } else { n -= 1 };
            n += 1
        };
    } while (jogo.length < qtdMax);

    jogo.sort((a, b) => a - b);
    //console.log(jogo)
    s = jogo.toString();
    //console.log(s)

    return s
}
getRandom(25, 15)

function gerarLista() {

    return new Promise(resolve => {
        const lista = new Set()
        let s = ''
        while (lista.size < 326876) {
            s = getRandom(25, 15)
            lista.add(s)
        }
        resolve(lista)
    })
}


gerarLista().then(console.log)