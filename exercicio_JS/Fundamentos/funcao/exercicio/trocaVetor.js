let vet0 = [5, 8, 1, -2]
let vet1 = [2, 7, 11, 212]

let troca = (vet0, vet1) => {
    for(let i = 0; i < vet0.length; i++){
        vet1.push(vet0[i])
        vet0[i] = vet1[i]
    }
    vet1.splice(0, vet0.length)
    console.log(vet0, vet1)
}

troca(vet0, vet1)