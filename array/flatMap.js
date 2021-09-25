const escola = [{
    name: 'Turma M1',
    Alunos: [{
        name: 'Gustavo',
        nota: 8.1
    }, {
        name: 'Ana',
        nota: 9.3
    }]

}, {
    name: 'Turma M2',
    Alunos: [{
        name: 'Rebeca',
        nota: 8.9
    }, {
        name: 'Roberto',
        nota: 7.3
    }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.Alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);

console.log(notas1);

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
};

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);