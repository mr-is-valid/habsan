const DAL = require('../dal/index');

class SwitchTypeBL {
    constructor() {
        this.dal = DAL;
    }

    async getAllSwitchTypeData() {
        return this.dal.getAllSwitchTypeData();
    }

    async createSwitchType(type, portType) {
        return this.dal.createSwitchType(type, portType);
    }

    // async updateSwitchType(dotId, newDotWallName, newRomm, newConnectedToPort, newIsConnected, newSwitchId, newFloorId, newSystemId,newVlan) {
    //     return this.dal.updateDotData(dotId, newDotWallName, newRomm, newConnectedToPort, newIsConnected,newSwitchId, newFloorId,newSystemId,newVlan);
    // }

    // async deleteSwitchType(dotId) {
    //     return this.dal.deleteSwitchType(dotId);
    // }
}

module.exports = new SwitchTypeBL();
