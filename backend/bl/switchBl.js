const DAL = require('../dal/index');

class SwitchBL {
    constructor() {
        this.dal = DAL;
    }

    async getAllSwitchData() {
        return this.dal.getAllSwitchData();
    }

    async createNewSwitch(switchName, ipAddress, ports, interfaceType, floorId, systemId) {
        return this.dal.createNewSwitch(switchName, ipAddress, ports, interfaceType, floorId, systemId);
    }

    async updateSwitchData(switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId) {
        return this.dal.updateSwitchData(switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId);
    }

    async deleteSwitchData(switchId) {
        return this.dal.deleteSwitchData(switchId);
    }
}

module.exports = new SwitchBL();
