const DAL = require('../dal/index');

class FloorBL {
    constructor() {
        this.dal = DAL;
    }

    async getAllFloorData() {
        return this.dal.getAllFloorData();
    }

    async createNewFloor(floorName) {
        return this.dal.createNewFloor(floorName);
    }

    async updateFloorData(floorId, newFloorName) {
        return this.dal.updateFloorData(floorId, newFloorName);
    }

    async deleteFloorData(floorId) {
        return this.dal.deleteFloorData(floorId);
    }
}

module.exports = new FloorBL();
