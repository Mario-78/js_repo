
function multArray(vet, n){
    for(let i = 0; i < vet.length; i++){
        vet[i] = vet[i]*n
    }
    return vet
}

function multArrayIfMaior5(vet, n){
    let aux = []
    for(let i = 0; i < vet.length; i++){
        if(vet[i] > 5){
            vet[i] = vet[i]*n
            aux.push(vet[i])
        }
    }
    console.log(aux)
}

let vet = [5, 8, 1, 2]
console.log(multArray(vet, 3))
let vet1 = [5, 8, 1, 2]
multArrayIfMaior5(vet1, 3)
