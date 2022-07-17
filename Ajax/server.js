const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req,res) => {
    // req.body
    // req.query
    // req.params meios de pegar os dados
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado : par ? 'par' : 'impar'
    })
})

// app.get('/teste', (req, res) => res.send('Ok'))

app.listen(8080, () => console.log('Executando...'))