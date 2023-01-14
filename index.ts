import express from 'express';
import path from 'path'
const server = express()

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

server.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/register.html'))
})

server.get('/pages/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/initial.html'))
})

server.get('/pages/user', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/perfil.html'))
})

server.get('/pages/toWatch', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/lista.html'))
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})