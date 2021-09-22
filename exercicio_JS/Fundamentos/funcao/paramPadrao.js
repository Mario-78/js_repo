//estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
     
    return a+b+c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))//na 3ª chamada da função da erro, pois js não reconhece 0 como true

//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1//aceita o 0, só não aceita undefined 
    b = 1 in arguments ? b : 1//arguments é um vetor da liguagem ele testa a posição do argumento se tiver qualquer atribuição ele aceita
    c = isNaN(c) ? 1 : c//testa se é um número

    return a+b+c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão atual

function soma3(a = 1, b = 1, c = 1){
    return a+b+c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))