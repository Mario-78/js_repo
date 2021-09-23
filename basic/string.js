const escola = 'Cod3r';

console.log(escola.charAt(4));//retorna a string na posição informada
console.log(escola.charAt(5));//não retorna nada pois a posição informada não existe, mas não dá erro!
console.log(escola.charCodeAt(3));//retorna o codigo ascii do caractere na posição informada
console.log(escola.indexOf('3'));//retorna a posição do caractere informado

console.log(escola.substring(1));//recorta a string apartir da posição informada
console.log(escola.substring(0, 3));//retorna a string da posição informada 0 até a posição 3-1, não inclui a posição 3!

console.log('escola '.concat(escola).concat('!'));//concatena strings literais com variáveis e variáveis com variáveis etc...
console.log(escola.replace(/\d/, 'e'));//regex substitua todos os díditos pelo string 'e'
console.log(escola.replace(/\w/g, 'e'));//regex substitua todas as letras e digitos por  'e', '/g' significa global
console.log(escola.replace(3, 'e'));//regex substitua o díditos pelo string 'e'

console.log('Ana, Maria, Pedor'.split(','));//cria um array apartir da função 'split' com caractere como parâmetro
console.log('Ana, Maria, Pedor'.split(/,/));//cria um array apartir da função 'split' com regex como parâmetro