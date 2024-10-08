const express = require('express');
const overviewController = require('../controllers/overviewController');

const router = express.Router();


router.post('/submit', overviewController.validateOverviewInput, overviewController.submitOverview);

module.exports = router;