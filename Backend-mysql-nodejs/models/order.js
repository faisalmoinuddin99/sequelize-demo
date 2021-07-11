const Sequelize = require('sequelize')
const db = require('../utils/database')

const Order = db.define("order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports = Order