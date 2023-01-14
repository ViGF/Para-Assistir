const Sequelize = require('sequelize')
const database = require("../db")

const Favoritos = database.define('favoritos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    urlObra: {
        type: Sequelize.TEXT,
        allowNull: false
    }, 
    nome: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})