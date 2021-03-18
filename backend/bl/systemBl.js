const DAL = require('../dal/index');

class SystemBL {
    constructor() {
        this.dal = DAL;
    }

    async getAllSystemData() {
        return this.dal.getAllSystemData();
    }

    async createNewSystem(systemName) {
        return this.dal.createNewSystem(systemName);
    }

    async updateSystemData(systemId, newSystemName) {
        return this.dal.updateSystemData(systemId, newSystemName);
    }

    async deleteSystemData(systemId) {
        return this.dal.deleteSystemData(systemId);
    }
}

module.exports = new SystemBL();
