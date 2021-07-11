const Sequelize = require('sequelize')
const db = require('../utils/database')

// I created an object here so you can export it
const Customer = db.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Customer