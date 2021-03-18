const Switches = require('./switch.model');
const Floors = require('./floor.model');
const Systems = require('./system.model');
const Sequelize = require('sequelize');
// const repo = require('../repo/index');
const Model = Sequelize.Model;
// const { sqlConn } = repo;
const sequelize = new Sequelize('mysql://root:!Q2w3e4r@localhost:3306/habsan');

class Dots extends Model { }
Dots.init({
    // attributes
    dotId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    dotWallName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    room: {
        type: Sequelize.STRING,
        allowNull: false
    },
    connectedToPort: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isConnected: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    vlan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    switchId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'switchs', // 'switchs' refers to table name
            key: 'switchId', // 'switchId' refers to column name in persons table
        }
    },
    floorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'floors', // 'floors' refers to table name
            key: 'floorId', // 'floorId' refers to column name in persons table
        }
    },
    systemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'systems', // 'systems' refers to table name
            key: 'systemId', // 'systemId' refers to column name in persons table
        }
    },
},
    {
        timestamps: false,
        //sqlConn,
        sequelize,
        modelName: 'dots'
    });

Dots.hasOne(Switches, { foreignKey: 'switchId' });
Dots.hasOne(Floors, { foreignKey: 'floorId' });
Dots.hasOne(Systems, { foreignKey: 'systemId' });

module.exports = Dots;

