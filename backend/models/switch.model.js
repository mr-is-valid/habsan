const Floors = require('./floor.model');
const Systems = require('./system.model');
const SwitchType = require('./switchType.model');
const Sequelize = require('sequelize');
// const repo = require('../repo/index');
const Model = Sequelize.Model;
// const { sqlConn } = repo;
const sequelize = new Sequelize('mysql://root:!Q2w3e4r@localhost:3306/habsan');

class Switchs extends Model { }
Switchs.init({
    // attributes
    switchId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    switchName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ipAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
        // allowNull defaults to true
    },
    ports: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    numOfSwitch:{
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1
    },
    floorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'floors', //  refers to table name
            key: 'floorId', //  refers to column name file in  table
        }
    },
    switchTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'switchType', //  refers to table name
            key: 'Id', //  refers to column name file in table
        }
    },
    systemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'systems', //  refers to table name
            key: 'systemId', //  refers to column name file in  table
        }
    },
},
    {
        timestamps: false,
        //sqlConn,
        sequelize,
        modelName: 'switchs'
    });

Switchs.hasOne(Floors,  { foreignKey: 'floorId' });
Switchs.hasOne(Systems, { foreignKey: 'systemId' });
Switchs.hasOne(SwitchType, { foreignKey: 'switchType' });

module.exports = Switchs;