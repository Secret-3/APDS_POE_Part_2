// C:\Users\Sauraav\Desktop\new_poe\GlobalTrust Bank\server\routes\overviewRoutes.js

const express = require('express');
const overviewController = require('../controllers/overviewController');
const router = express.Router();

// Submit new transaction
router.post('/submit', 
    overviewController.validateOverviewInput, 
    overviewController.submitOverview
);

// Get all transactions
router.get('/transactions', overviewController.getAllTransactions);

// Get single transaction
router.get('/transactions/:id', overviewController.getTransaction);

// Update transaction status
router.patch('/transactions/:id', overviewController.updateTransactionStatus);

// Delete transaction (optional, for admin use)
router.delete('/transactions/:id', overviewController.deleteTransaction);

module.exports = router;