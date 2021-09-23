let valor = (n) => {
    const pln = 100.00
    if(n < 10){
        console.log(pln + 80.00)
    }else if(n>=10 && n<30){
        console.log(pln + 50.00)
    }else if(n>=30 && n<60){
        console.log(pln + 95.00)
    }else{
        console.log(pln + 130.00)
    }
}

valor(8)
valor(80)
valor(18)
valor(38)
valor(10)