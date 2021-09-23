class Lancamento {
    constructor(name = 'Genérico', valor = 0) {
        this.name = name;
        this.valor = valor;

    }
}

class CiloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 4500.00);
const contaDeLuz = new Lancamento('Luz', 220.00);

const contas = new CiloFinanceiro(6, 2021);
contas.addLancamentos(salario, contaDeLuz);

console.log(contas.sumario());