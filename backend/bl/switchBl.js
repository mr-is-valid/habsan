const DAL = require('../dal/index');

class SwitchBL {
    constructor() {
        this.dal = DAL;
    }

    async getAllSwitchData() {
        return this.dal.getAllSwitchData();
    }

    async createNewSwitch(switchName, ipAddress, ports, interfaceType, floorId, systemId ,switchTypeId) {
        return this.dal.createNewSwitch(switchName, ipAddress, ports, interfaceType, floorId, systemId , switchTypeId);
    }

    async updateSwitchData(switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId ,newSwitchTypeId) {
        return this.dal.updateSwitchData(switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId, newSwitchTypeId);
    }

    async deleteSwitchData(switchId) {
        return this.dal.deleteSwitchData(switchId);
    }
}

module.exports = new SwitchBL();
