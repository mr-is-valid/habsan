const DAL = require('../dal/index');

class DotBL {
    constructor() {
        this.dal = DAL;
    }

    async getAllDotData() {
        return this.dal.getAllDotData();
    }

    async createNewDot(dotWallName, room, connectedToPort, switchId, floorId, systemId,vlan) {
        return this.dal.createNewDot(dotWallName, room, connectedToPort, switchId, floorId, systemId,vlan);
    }

    async updateDothData(dotId, newDotWallName, newRomm, newConnectedToPort, newSwitchId, newFloorId, newSystemId,newVlan) {
        return this.dal.updateDotData(dotId, newDotWallName, newRomm, newConnectedToPort, newSwitchId, newFloorId,newSystemId,newVlan);
    }

    async deleteDotData(dotId) {
        return this.dal.deleteDotData(dotId);
    }
}

module.exports = new DotBL();
