//Middleware pattern (chain of resposability)

const passo1 = (cxt, next) => {
    cxt.valor1 = 'mid1';
    next();
}

const passo2 = (cxt, next) => {
    cxt.valor2 = 'mid2';
    next();
}

const passo3 = cxt => cxt.valor3 = 'mid13';

const exec = (cxt, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](cxt, () => execPasso(indice + 1));
    }
    execPasso(0);
}

const cxt = {};
exec(cxt, passo2, passo1, passo3);
console.log(cxt);