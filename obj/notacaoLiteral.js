const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nameAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nameAttr] = valorAttr
console.log(obj3)

const obj4 = {}
obj4[nameAttr] = valorAttr
console.log(obj4)

const obj5 = {
    funcao1: function(){ //forma antiga de declarar função dentro de obj
        //...
    },
    funcao2(){ //forma atualizada de declarar função dentro de obj

    }
}

console.log(obj5)