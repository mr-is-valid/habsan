const systemController = require('./system.controller');
const switchController  = require('./switch.controller');
const floorController   = require('./floor.controller');
const dotController     = require('./dot.controller');

module.exports = [
    switchController,
    systemController,
    floorController,
    dotController,
];
