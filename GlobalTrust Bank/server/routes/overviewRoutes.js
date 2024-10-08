const express = require('express');
const overviewController = require('../controllers/overviewController');

const router = express.Router();

router.post('/submit', overviewController.submitOverview);

module.exports = router;