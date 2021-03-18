const switchModel = require('../models/switch.model');
const systemModel = require('../models/system.model');
const floorModel = require('../models/floor.model');
const dotModel = require('../models/dot.model');

class DAL {
    /*
    *get all data from diffrend controller
    */
    static async getAllSwitchData() {
        return switchModel.findAll({
            attributes: ['switchId', 'switchName', 'ipAddress', 'ports', 'interfaceType'],
            include: [
                { model: floorModel },
                { model: systemModel }
            ]
        });
    }


    static async getAllDotData() {
        return dotModel.findAll({
            attributes: ['dotId', 'dotWallName', 'room', 'connectedToPort', 'vlan'],
            include: [
                { model: switchModel, attributes: ['switchId', 'switchName', 'ipAddress', 'ports', 'interfaceType'] },
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


    /*
    *create new row at the table in diffrendt models
    */
    static async createNewSwitch(switchName, ipAddress, ports, interfaceType, floorId, systemId) {
        return switchModel.create({ switchName, ipAddress, ports, interfaceType, floorId, systemId });
    }

    static async createNewDot(dotWallName, room, connectedToPort, switchId, floorId, systemId, vlan) {
        return dotModel.create({ dotWallName, room, connectedToPort, switchId, floorId, systemId, vlan });
    }

    static async createNewSystem(systemName) {
        return systemModel.create({ systemName });
    }

    static async createNewFloor(floorName) {
        return floorModel.create({ floorName });
    }

    /*
    *update row at the table in diffrendt models
    */
    static async updateSwitchData(switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId) {
        try {
            const result = await switchModel.update(
                {
                    switchName: newSwitchName, ipAddress: newIpAddres, ports: newPorts,
                    interfaceType: newInterfaceType, floorId: newFloorId, systemId: newSystemId
                },
                { where: { switchId: switchId } }
            )
            return result; // return 1 if suuccess
        } catch (err) {
            console.log(err);
        }
    }

    static async updateDotData(dotId, newDotWallName, newRomm, newConnectedToPort, newSwitchId, newFloorId, newSystemId, newVlan) {
        try {
            const result = await dotModel.update(
                {
                    dotWallName: newDotWallName, room: newRomm, connectedToPort: newConnectedToPort,
                    switchId: newSwitchId, floorId: newFloorId, systemId: newSystemId, newVlan: newVlan,
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