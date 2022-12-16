const express = require('express')
const server = express()

server.get('/home', (req, res) => {
    res.send('Tentando acessar a tela home')
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})