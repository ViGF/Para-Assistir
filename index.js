const express = require('express');
const path = require('path');
const database = require('./db')
const Perfil = require('./models/perfil')
const Favoritos = require('./models/favoritos')

const server = express();

(async() => {

    const resultado = await database.sync();
    console.log(resultado);

    const resultadoCreatePerfil = await Perfil.create({
        nome: 'luciano 6',
        sobrenome: 'alexandre',
        telefone: '99999999',
        bairro: 'bairro teste',
        rua: 'rua teste',
        cep: '5900000',
        estado: 'PB',
        email: 'luciano.silva@ifpb.edu.br',
        pais: 'BRASIL',
        login: 'luciano',
        senha: 'senha123'
    })

    const resultadoCreate2Perfil = await Perfil.create({
        nome: 'luciano 5',
        sobrenome: 'alexandre',
        telefone: '99999999',
        bairro: 'bairro teste',
        rua: 'rua teste',
        cep: '5900000',
        estado: 'PB',
        email: 'luciano.silva@ifpb.edu.br',
        pais: 'BRASIL',
        login: 'luciano',
        senha: 'senha123'
    })

    const createFav = await Favoritos.create({
        urlObra: 'https://www.google.com.br',
        nome: 'Avatar 2'
    })

    console.log(resultadoCreatePerfil);
    console.log(resultadoCreate2Perfil);
    console.log(createFav);
    try {
    } catch (error) {
        console.log(error)
    }
})();

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