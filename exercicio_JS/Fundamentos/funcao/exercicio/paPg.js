let pa = (n, a, r) => {
    let aux = [], i = 0
    while(i < n){
        aux[i] = a
        a += r
        i++
    }
    console.log(aux) 
}

pa(4, 5, 3)

let pg = (n, a, r) => {
    let aux = [], i = 0
    while(i < n){
        aux[i] = a
        a *= r
        i++
    }
    console.log(aux) 
}

pg(4, 5, 3)