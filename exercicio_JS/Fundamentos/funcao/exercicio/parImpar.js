function select(vet){
    let impar = 0, par = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i]%2 === 0){
            par++
        }else{
            impar++
        }
    }
    console.log('Pares :', par)
    console.log('Impares :', impar)
}

select([3,8,4,6,13,1,24,29,67])