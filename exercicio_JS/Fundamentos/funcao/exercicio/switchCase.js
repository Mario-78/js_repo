contrlEstq = (msn) => {
    switch(msn){
        case 'maçã':
            console.log('Não vendemos esta fruta aqui!')
            break;
        case 'kiwis':
            console.log('Estamos com escacez de kiwis!')
            break;
        case 'melancia':
            console.log('Está aqui, são 3 reais o kilo')
            break;
        default:
            console.log('Error!!')
    }
}

contrlEstq('maçã')
contrlEstq('kiwis')
contrlEstq('melancia')
contrlEstq('mamão')