const router = require('express').Router();
const switchBl = require('../bl/switchBl');

class SwitchController {
    constructor() {
        this.router = router;
        this.switchBl = switchBl;

        this.router.get('/SwitchController/getAllSwitchData', this.getAllSwitchData.bind(this));
        this.router.post('/SwitchController/CreateNewSwitch', this.createNewSwitch.bind(this));
        this.router.post('/SwitchController/UpdateSwitchData', this.updateSwitchData.bind(this));
        this.router.post('/SwitchController/DeleteSwitchData', this.deleteSwitchData.bind(this));
    }

    async getAllSwitchData(req, res) {
        const response = {};
        response.data = await this.switchBl.getAllSwitchData();
        console.log(response.data);
        res.send(response);
    }

    async createNewSwitch(req, res) {
        
        const response = {};
        const { body } = req;
        const { switchName, ipAddress, ports, interfaceType, floorId, systemId } = body || {};
        response.data = await this.switchBl.createNewSwitch(switchName, ipAddress, ports, interfaceType, floorId, systemId);
        console.log(response.data);
        res.send(response);
    }

    async updateSwitchData(req, res) {
        const response = {};
        const { body } = req;
        const { switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId } = body || {};
        response.data = await this.switchBl.updateSwitchData(switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId);
        console.log(response.data);
        res.send(response);
    }

    async deleteSwitchData(req, res) {
        const response = {};
        const { body } = req;
        const { switchId } = body || {};
        response.data = await this.switchBl.deleteSwitchData(switchId);
        console.log(response.data);
        res.send(response);
    }
}

module.exports = new SwitchController();