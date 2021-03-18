const router = require('express').Router();
const floorBl = require('../bl/floorBl');

class FloorController {
    constructor() {
        this.router = router;
        this.floorBl = floorBl;

        this.router.get('/FloorController/getAllSystemData', this.getAllFloorData.bind(this));
        this.router.post('/FloorController/CreateNewFloor', this.createNewFloor.bind(this));
        this.router.post('/FloorController/UpdateFloorData', this.updateFloorData.bind(this));
        this.router.post('/FloorController/DeleteFloorData', this.deleteFloorData.bind(this));
    }

    async getAllFloorData(req, res) {
        const response = {};
        response.data = await this.floorBl.getAllFloorData();
        console.log(response.data);
        res.send(response);
    }

    async createNewFloor(req, res) {
        const response = {};
        const { body } = req;
        const { floorName } = body || {};
        response.data = await this.floorBl.createNewFloor(floorName);
        console.log(response.data);
        res.send(response);
    }

    async updateFloorData(req, res) {
        const response = {};
        const { body } = req;
        const { floorId, newFloorName } = body || {};
        response.data = await this.floorBl.updateFloorData(floorId, newFloorName);
        console.log(response.data);
        res.send(response);
    }

    async deleteFloorData(req, res) {
        const response = {};
        const { body } = req;
        const { floorId } = body || {};
        response.data = await this.floorBl.deleteFloorData(floorId);
        console.log(response.data);
        res.send(response);
    }
}

module.exports = new FloorController();