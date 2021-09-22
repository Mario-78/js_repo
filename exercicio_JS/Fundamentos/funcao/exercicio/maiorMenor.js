let maiorMenor = (vet) =>{
    let maior = vet[0], menor = vet[0]
    for(let i = 1; i < vet.length; i++){
        if(maior < vet[i]){
            maior = vet[i]
        }
        if(menor > vet[i]){
            menor = vet[i]
        }
    }
    console.log('Maior: ', maior)
    console.log('Menor: ', menor)
}
h = 'a,C,t,p,Q,A,z,w'
maiorMenor([5,56,23,0,52,4,78,10,3,96])
maiorMenor(list = h.split(','))