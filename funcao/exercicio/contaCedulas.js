let cont = (n) => {
    let cem, cinquenta, dez, cinco, um
    cem = parseInt(n/100)
    cinquenta = parseInt(n/50)
    dez = parseInt(n/10)
    cinco = parseInt(n/5)
    um = parseInt(n/1)
    
    if(cem !==0){
        console.log(cem, 'notas(s) de R$ 100,00')
    }
    if(cinquenta !==0){
        console.log(cinquenta, 'notas(s) de R$ 50,00')
    }
    if(dez !==0){
        console.log(dez, 'notas(s) de R$ 10,00')
    }
    if(cinco !==0){
        console.log(cinco, 'notas(s) de R$ 5,00')
    }
    if(um !==0){
        console.log(um, 'notas(s) de R$ 1,00')
    }
}

cont(18)