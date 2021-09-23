const pai = { name: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.name = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    name: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2)
filha2.name = 'Carla'
console.log(`${filha2.name} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    console.log(key)
}

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança ${filha2.corCabelo}`)
}