let printImpar = (ini = 0, fim = 100) => {
    let impar = []
    for(let i = 0; i < fim; i++){
        if(ini%2 != 0){
            impar.push(ini)
        }
        ini++
    }
    console.log(impar)
}

printImpar(5,25)
printImpar()