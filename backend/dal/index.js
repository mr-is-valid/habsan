const switchModel = require('../models/switch.model');
const systemModel = require('../models/system.model');
const floorModel = require('../models/floor.model');
const dotModel = require('../models/dot.model');
const switchTypesModel = require('../models/switchTypes.model');

class DAL {
    /*
    *get all data from diffrend controller
    */

    static async getAllSwitchData() {
        return switchModel.findAll({
            attributes: ['switchId', 'switchName', 'ipAddress', 'ports', 'switchTypeId'],
            include: [
                { model: floorModel },
                { model: systemModel },
                { model: switchTypesModel }
            ]
        });
    }


    static async getAllDotData() {
        return dotModel.findAll({
            attributes: ['dotId', 'dotWallName', 'room', 'connectedToPort', 'vlan'],
            include: [
                //{ model: switchModel, attributes: ['switchId', 'switchName', 'ipAddress', 'ports', 'switchTypeId'] },
                { model: switchModel , include: [{ model: switchTypesModel }] },
                { model: floorModel },
                { model: systemModel }
            ]
        });
    }

    static async getAllSystemData() {
        return systemModel.findAll({});
    }

    static async getAllFloorData() {
        return floorModel.findAll({});
    }

    static async getAllSwitchTypeData() {
        return switchTypesModel.findAll({});
    }


    /*
    *create new row at the table in diffrendt models
    */
    static async createNewSwitch(switchName, ipAddress, ports, floorId, systemId, switchTypeId) {
        return switchModel.create({ switchName, ipAddress, ports, floorId, systemId , switchTypeId});
    }

    static async createNewDot(dotWallName, room, connectedToPort, isConnected,switchId, floorId, systemId, vlan) {
        return dotModel.create({ dotWallName, room, connectedToPort,isConnected, switchId, floorId, systemId, vlan });
    }

    static async createNewSystem(systemName) {
        return systemModel.create({ systemName });
    }

    static async createNewFloor(floorName) {
        return floorModel.create({ floorName });
    }

    static async createSwitchType(type, portType) {
        return switchTypesModel.create({ type, portType });
    }

    /*
    *update row at the table in diffrendt models
    */
    static async updateSwitchData(switchId, newSwitchName, newIpAddres, newPorts, newFloorId, newSystemId , newSwitchTypeId) {
        try {
            const result = await switchModel.update(
                {
                    switchName: newSwitchName, ipAddress: newIpAddres, ports: newPorts,
                    floorId: newFloorId, systemId: newSystemId,
                    switchTypeId: newSwitchTypeId
                },
                { where: { switchId: switchId } }
            )
            return result; // return 1 if suuccess
        } catch (err) {
            console.log(err);
        }
    }

    static async updateDotData(dotId, newDotWallName, newRomm, newConnectedToPort, newIsConnected ,newSwitchId, newFloorId, newSystemId, newVlan) {
        try {
            const result = await dotModel.update(
                {
                    dotWallName: newDotWallName, room: newRomm, connectedToPort: newConnectedToPort,
                    switchId: newSwitchId, floorId: newFloorId, systemId: newSystemId, newVlan: newVlan,
                    isConnected: newIsConnected
                },
                { where: { dotId: dotId } }
            )
            return result; // return 1 if suuccess
        } catch (err) {
            console.log(err);
        }
    }

    static async updateSystemData(systemId, newSystemName) {
        try {
            const result = await systemModel.update(
                { systemName: newSystemName },
                { where: { systemId: systemId } }
            )
            return result; // return 1 if suuccess
        } catch (err) {
            console.log(err);
        }
    }

    /*
    *delete row at the table in diffrendt models
    */
    static async deleteSwitchData(switchId) {
        try {
            const result = await switchModel.destroy(
                { where: { switchId: switchId } }
            )
            return result; // return 1 if suuccess
        } catch (err) {
            console.log(err);
        }
    }

    static async deleteDotData(dotId) {
        try {
            const result = await dotModel.destroy(
                { where: { dotId: dotId } }
            )
            return result; // return 1 if suuccess
        } catch (err) {
            console.log(err);
        }
    }

    static async deleteSystemData(systemId) {
        try {
            const result = await systemModel.destroy(
                { where: { systemId: systemId } }
            )
            return result; // return 1 if suuccess
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = DAL;