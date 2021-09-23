function intervalo(vet){
    let dentro = 0, fora = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i] >= 10 && vet[i] <= 20){
            dentro++
        }else{
            fora++
        }
    }
    console.log('Dentro do intervalo: ', dentro)
    console.log('Fora do intervalo: ', fora)
}

intervalo([19,9,63,24,11,84,23,10,15,75,20])