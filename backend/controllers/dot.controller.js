const router = require('express').Router();
const dotBl = require('../bl/dotBl');

class DotController {
    constructor() {
        this.router = router;
        this.dotBl = dotBl;

        this.router.get('/DotController/getAllDotData', this.getAllDotData.bind(this));
        this.router.post('/DotController/CreateNewDot', this.createNewDot.bind(this));
        this.router.post('/DotController/UpdateDothData', this.updateDothData.bind(this));
        this.router.post('/DotController/DeleteDotData', this.deleteDotData.bind(this));
    }

    async getAllDotData(req, res) {
        const response = {};
        response.data = await this.dotBl.getAllDotData();
        console.log(response.data);
        res.send(response);
    }

    async createNewDot(req, res) {
        const response = {};
        const { body } = req;
        const { dotWallName, room, connectedToPort, switchId, floorId, systemId, vlan } = body || {};
        response.data = await this.dotBl.createNewDot(dotWallName, room, connectedToPort, switchId, floorId, systemId, vlan);
        console.log(response.data);
        res.send(response);
    }

    async updateDothData(req, res) {
        const response = {};
        const { body } = req;
        const { dotId, newDotWallName, newRomm, newConnectedToPort, newSwitchId, newFloorId, newSystemId, newVlan } = body || {};
        response.data = await this.dotBl.updateDothData(dotId, newDotWallName, newRomm, newConnectedToPort, newSwitchId, newFloorId, newSystemId, newVlan);
        console.log(response.data);
        res.send(response);
    }

    async deleteDotData(req, res) {
        const response = {};
        const { body } = req;
        const { dotId } = body || {};
        response.data = await this.dotBl.deleteDotData(dotId);
        console.log(response.data);
        res.send(response);
    }
}

module.exports = new DotController();