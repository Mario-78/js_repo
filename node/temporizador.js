const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 1', function() { //Schedule oferece flexibolidade
    console.log('Executando Tarefa 1!', new Date().getSeconds()); //para temporizadores
});

setTimeout(function() {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!');
}, 20000);

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]; //Faz um range de segunda a sexta feira
regra.hour = 11; //às 11 horas
regra.second = 30; //e 30 segundos de qualquer minuto

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
});