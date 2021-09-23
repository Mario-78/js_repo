function calc(n1, n2, op){
    switch(op){
        case '+':
            console.log(n1+n2)
            break
        case '-':
            console.log(n1-n2)
            break
        case '*':
            console.log(n1*n2)
            break
        case '/':
            console.log(n1/n2)
            break
        default:
            console.log('Opção inválida!!')

    }
}

calc(5, 3, '+')
calc(5, 3, '-')
calc(5, 3, '*')
calc(5, 3, '/')