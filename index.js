// config inicial

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()



//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


//rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar requisição
    res.json({
        message: 'Oi Express!'
    })
})

//mongodb+srv://ederjunior:YxKj4Ra9pvDQ7YS0@apicluster.681srif.mongodb.net/bancodaapi?retryWrites=true&w=majority

//entregar um porta

const { PORT, DB_USER, DB_PASSWORD } = process.env

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.681srif.mongodb.net/?retryWrites=true&w=majority`
)

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
})
