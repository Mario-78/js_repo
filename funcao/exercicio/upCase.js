function comp(vet1, vet2){
    if(vet1.toUpperCase() == vet2.toUpperCase()){
        return true
    }else{
        return false
    }
}

console.log(comp('Ana', 'ana'))
console.log(comp('MarIa', 'Mana'))
console.log(comp('strp', 'STRP'))