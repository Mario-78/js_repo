let print = (vet1, vet2) =>{
    for(let i = 0; i < vet2.length; i++){
        vet1.push(vet2[i])
    }
    console.log(vet1)
}
let vet1 = [1,2,3,4,5]
let vet2 = [6,7,8,9,10]
console.log(vet1.concat(vet2))
print(vet1, vet2)