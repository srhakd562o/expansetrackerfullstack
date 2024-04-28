const { DataTypes } = require('sequelize');
const sequelize = require('../util/expansedatabase');

const Expanse = sequelize.define('Expanse', {
    expanseAmount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expanseDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expanseCategory: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Expanse;
