let b = 0.1 + 0.2

let u = (arg) => arg.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'} )

console.log(u(b))