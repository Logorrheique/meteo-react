const { Router } = require('express');
const getWheather = require('../controllers/getData');
const router = Router();
router.get('/:city', getWheather);
module.exports = {
    getgetWheather: router
};
