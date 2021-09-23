function Pessoa(){
    this.idade = 0
    console.log(this.idade)
    const self = this//fixando o 'this' em uma constante para não ter comportamento inesperado
    setInterval(function(){//quando a função/obj for called or instanciada 
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)//outra opção é fazer o bind do 'this' dentro da função
}
new Pessoa
