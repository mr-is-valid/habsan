const Sequelize = require('sequelize');
// const repo = require('../repo/index');
const Model = Sequelize.Model;
// const { sqlConn } = repo;
const sequelize = new Sequelize('mysql://root:!Q2w3e4r@localhost:3306/habsan');

class SwitchType extends Model { }
SwitchType.init({
    // attributes
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    portType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
        //sqlConn,
        sequelize,
        modelName: 'switchType'
    });

module.exports = SwitchType;

