const express = require('express');
const path = require('path');
const database = require('./db')
const Perfil = require('./models/perfil')
const Favoritos = require('./models/favoritos')
const bodyParser = require('body-parser')
const alert = require('alert')

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ 
    extended: true
}));

(async() => {
    try {
        const resultado = await database.sync();
        console.log(resultado);
        
    } catch (error) {
        console.log(error)
    }
})();

server.post('/logar', async (req, res) => {
    const email = req.body.email;

    const user = await Perfil.findOne({
        where: {
            email: email
        }
    })

    if (user) {
        res.sendFile(path.join(__dirname + '/public/pages/initial.html'))
    } else {
        alert('Usuário ou senha incorretos')
        res.sendFile(path.join(__dirname + '/index.html'))
    }
})

server.post('/criar', async (req, res) => {
    const login = req.body.login;

    const user = await Perfil.create({
        where: {
            login: login,
            senha: senha
        }
    })

    if (user) {
        res.sendFile(path.join(__dirname + '/public/pages/initial.html'))
    } else {
        alert('Usuário ou senha incorretos')
        res.sendFile(path.join(__dirname + '/index.html'))
    }
})

server.post('/salvarPerfil', async(req, res) => {
    const createPerfil = await Perfil.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        telefone: req.body.telefone,
        bairro: req.body.bairro,
        pais: req.body.pais,
        rua: req.body.rua,
        cep: req.body.cep,
        estado: req.body.estado,
        email: req.body.email,
        login: req.body.login,
        senha: req.body.senha,
    })

    console.log(createPerfil)
    res.sendFile(path.join(__dirname + '/public/pages/initial.html'))
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

server.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/register.html'))
})

server.get('/pages/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/initial.html'))
})

server.get('/pages/user', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/perfil.html'))
})

server.get('/pages/toWatch', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/lista.html'))
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})