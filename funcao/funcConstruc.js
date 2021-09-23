function Carro(velocMax = 200, delta = 5){
    //Atributo privado
    let velocAtual = 0

    //Method public
    this.acelerar = function(){
        if(velocAtual + delta <= velocMax){
            velocAtual += delta
        }else{
            velocAtual = velocMax
        }
    }
    //Method public
    this.getVelocAtual = function(){
        return velocAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocAtual())

console.log(typeof ferrari)
console.log(typeof Carro)