const express = require('express')
const app = express()
const bodyParser = require('body-Parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
        console.log(req.body)
        resp.send('<h1>Parabéns usuário cadastrado!</h1>')
    })
    /*app.get('/usuarios', (req, resp) => {
        console.log(req.query)
        resp.send('<h1>Parabéns usuário cadastrado!</h1>')
})*/

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns usuário alterado</h1>')
})
app.listen(3003)