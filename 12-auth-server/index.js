
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./db/config')
require('dotenv').config()

// console.log(process.env)

// Crear servidor/app express
const app = express()

// conexión a BBDD
dbConnection()


// Directorio público
app.use(express.static('public'))

// CORS
app.use(cors())

// Lectura y parsing de body

app.use(express.json())



// Rutas
app.use('/api/auth', require('./routes/auth'))




app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${4000}`)
})

