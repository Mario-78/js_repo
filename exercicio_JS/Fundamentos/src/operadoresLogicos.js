function decisao(trabalho1, trabalho2){
    const tomarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = !!(trabalho1 ^ trabalho2);
    //const comprarTv32 = trabalho1 != trabalho2;
    const manterSaldavel = !tomarSorvete;

    return {tomarSorvete, comprarTv50, comprarTv32, manterSaldavel}
}

console.log(decisao(true, true));
console.log(decisao(true, false));
console.log(decisao(false, true));
console.log(decisao(false, false));