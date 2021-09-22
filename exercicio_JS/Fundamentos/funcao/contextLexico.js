const valor = 'Global'

function mf(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    mf()
}

exec()