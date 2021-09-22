let negat = (vet) =>{
    let cont = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i] < 0){
            cont++
        }
    }
    return cont
} 

console.log(negat([1,-5,23,87,-9,23,-76,-3]))