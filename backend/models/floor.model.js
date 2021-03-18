const Sequelize = require('sequelize');
// const repo = require('../repo/index');
const Model = Sequelize.Model;
// const { sqlConn } = repo;
const sequelize = new Sequelize('mysql://root:!Q2w3e4r@localhost:3306/habsan');

class Floors extends Model { }
Floors.init({
    // attributes
    floorId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    floorName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
        //sqlConn,
        sequelize,
        modelName: 'floors'
    });

module.exports = Floors;

