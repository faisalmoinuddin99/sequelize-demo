const { Sequelize } = require('sequelize');

const db = new Sequelize("resturant", "root", "8692927930", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

// I deleted what was causing the problem

module.exports = db;