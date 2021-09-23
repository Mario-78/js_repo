sal = 1100.00

aumento = (p) =>{
    switch(p){
        case 'A':
            console.log(sal*1.1)
            break
        case 'B':
            console.log(sal*1.15)
            break
        case 'C':
            console.log(sal*1.2)
            break
        default:
            console.log('Plano inválido!!')

    }
}

aumento('A')
aumento('B')
aumento('C')
aumento('D')