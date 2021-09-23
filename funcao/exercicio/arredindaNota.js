

function afericao(nota){
    let arred
    if((100 - nota) <= 62){
        let aux = parseInt(nota/5)
        arred = (aux + 1) * 5 
        console.log('Aprovado nota: ', arred)
    }else{
        console.log('Reprovado nota: ', nota)
    }
}

afericao(58)
afericao(35)
afericao(38)
