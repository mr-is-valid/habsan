const router = require('express').Router();
const switchTypeBl = require('../bl/switchTypeBl');

class SwitchTypeController {
    constructor() {
        this.router = router;
        this.switchTypeBl = switchTypeBl;

        this.router.get('/SwitchTypeController/getAllSwitchTypeData', this.getAllSwitchTypeData.bind(this));
        this.router.post('/SwitchTypeController/createSwitchType', this.createSwitchType.bind(this));
        // this.router.post('/SwitchTypeController/UpdateSwitchData', this.updateSwitchData.bind(this));
        // this.router.post('/SwitchTypeController/DeleteSwitchData', this.deleteSwitchData.bind(this));
    }

    async getAllSwitchTypeData(req, res) {
        const response = {};
        response.data = await this.switchTypeBl.getAllSwitchTypeData();
        console.log(response.data);
        res.send(response);
    }

    async createSwitchType(req, res) {
        
        const response = {};
        const { body } = req;
        const { type, portType } = body || {};
        response.data = await this.switchTypeBl.createSwitchType(type, portType);
        console.log(response.data);
        res.send(response);
    }

    // async updateSwitchData(req, res) {
    //     const response = {};
    //     const { body } = req;
    //     const { switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId } = body || {};
    //     response.data = await this.switchTypeBl.updateSwitchData(switchId, newSwitchName, newIpAddres, newPorts, newInterfaceType, newFloorId, newSystemId);
    //     console.log(response.data);
    //     res.send(response);
    // }

    // async deleteSwitchData(req, res) {
    //     const response = {};
    //     const { body } = req;
    //     const { switchId } = body || {};
    //     response.data = await this.switchTypeBl.deleteSwitchData(switchId);
    //     console.log(response.data);
    //     res.send(response);
    // }
}

module.exports = new SwitchTypeController();