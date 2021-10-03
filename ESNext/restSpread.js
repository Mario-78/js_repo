//Operador ... Rest(Juntar)/Spread(Espalhar)
//Usar o Rest como perâmetro de função

//Usar spread com objeto
const funcionario = { name: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } //Espalhando todos os atributos de funcionario em clone
console.log(clone)

//Usar sprea com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria', ...grupoA, 'Rafaela'] //Espalhando os elementos de grupoA em grupoB
console.log(grupoB)