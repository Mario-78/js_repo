console.log(7/0);//retorna o type Infinity
console.log('10'/2);//retorna o resultado correto
console.log('10.2'/2);//retorna o resultado correto pois '.' é o separador de decimais padrão
console.log('10,2'/2);//não retorna o resultado correto pois ',' não é o separador de decimais padrão
console.log('show'*2);//não reconhece
console.log('show'+2);//concatena
console.log('3'+2);//concatena pois o operador de concatenação tem prioridade sobre a adição
console.log('3'-2);//subtrai e retorna o resultado correto
console.log((10.34589).toFixed(2));//retorna o resultado correto
console.log(10.34589.toFixed(2));//não retorna o resultado correto
