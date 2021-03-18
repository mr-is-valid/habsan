const router = require('express').Router();
const systemBl = require('../bl/systemBl');

class SystemController {
    constructor() {
        this.router = router;
        this.systemBl = systemBl;

        this.router.get('/SystemController/getAllSystemData' , this.getAllSystemData.bind(this));
        this.router.post('/SystemController/CreateNewSystem' , this.createNewSystem.bind(this));
        this.router.post('/SystemController/UpdateSystemData', this.updateSystemData.bind(this));
        this.router.post('/SystemController/DeleteSystemData', this.deleteSystemData.bind(this));
    }

    async getAllSystemData(req, res) {
        const response = {};
        response.data = await this.systemBl.getAllSystemData();
        console.log(response.data);
        res.send(response);
    }

    async createNewSystem(req, res) {
        const response = {};
        const { body } = req;
        const { systemName } = body || {};
        response.data = await this.systemBl.createNewSystem(systemName);
        console.log(response.data);
        res.send(response);
    }

    async updateSystemData(req, res) {
        const response = {};
        const { body } = req;
        const { systemId, newSystemName } = body || {};
        response.data = await this.systemBl.updateSystemData(systemId, newSystemName);
        console.log(response.data);
        res.send(response);
    }

    async deleteSystemData(req, res) {
        const response = {};
        const { body } = req;
        const { systemId } = body || {};
        response.data = await this.systemBl.deleteSystemData(systemId);
        console.log(response.data);
        res.send(response);
    }
}

module.exports = new SystemController();