const express = require('express');
const router = express.Router();
const { getStates, getDistricts } = require('../controllers/locationController');

router.get('/states', getStates);
router.get('/districts', getDistricts);

module.exports = router;
