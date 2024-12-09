const express = require('express')
require('dotenv').config('./.env')
const app = express()
const port = 3000

const SECRET_KEY = process.env.HIDDEN_KEY

app.get('/', (req, res) => {
    if(!SECRET_KEY){
        return res.status(500).send('Secret key not found. Please configure your env file')
    }
    res.send(`The secret key is ${SECRET_KEY}`)
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})