const Overview = require('../Models/overviewModel');
const createError = require('../utils/appError');

// Updated regex patterns
const currencyRegex = /^[A-Z]{3}$/;
const swiftCodeRegex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

const sanitizeInput = (obj) => {
    const sanitized = {};
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value === 'string') {
            // Convert to uppercase for SWIFT code and currency
            if (key === 'swiftCode' || key === 'currency') {
                value = value.toUpperCase().trim();
            } else {
                value = value.trim();
            }
            
            // Sanitize special characters
            value = value.replace(/[\${}]/g, '');
        }
        sanitized[key] = value;
    }
    return sanitized;
};

exports.validateOverviewInput = async (req, res, next) => {
    try {
        console.log('Received input:', req.body);
        
        const sanitizedInput = sanitizeInput(req.body);
        console.log('Sanitized input:', sanitizedInput);
        
        const amount = parseFloat(sanitizedInput.amount);
        const { 
            currency, 
            provider, 
            recipientAccountHolderName, 
            recipientBankName, 
            recipientAccountNumber, 
            swiftCode 
        } = sanitizedInput;

        // Detailed validation with specific error messages
        const validationErrors = [];

        if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
            validationErrors.push('Amount must be a positive number');
        }

        if (!currencyRegex.test(currency)) {
            validationErrors.push('Currency must be a valid 3-letter code');
        }

        if (provider !== 'SWIFT') {
            validationErrors.push('Provider must be SWIFT');
        }

        if (!recipientAccountHolderName || recipientAccountHolderName.length < 3) {
            validationErrors.push('Recipient account holder name must be at least 3 characters long');
        }

        if (!recipientBankName || recipientBankName.length < 3) {
            validationErrors.push('Recipient bank name must be at least 3 characters long');
        }

        if (!/^\d{11}$/.test(recipientAccountNumber)) {
            validationErrors.push('Recipient account number must be exactly 11 digits');
        }

        console.log('Testing SWIFT code:', swiftCode);
        console.log('SWIFT code regex test result:', swiftCodeRegex.test(swiftCode));

        if (!swiftCodeRegex.test(swiftCode)) {
            validationErrors.push('Invalid SWIFT code format. Must be 8 or 11 characters: 6 letters followed by 2-5 alphanumeric characters');
        }

        if (validationErrors.length > 0) {
            console.log('Validation errors:', validationErrors);
            return next(new createError(validationErrors.join('; '), 400));
        }

        // If validation passes, update req.body with sanitized input
        req.body = sanitizedInput;
        next();

    } catch (error) {
        console.error('Validation error:', error);
        next(new createError('Error validating input', 500));
    }
};

exports.submitOverview = async (req, res, next) => {
    try {
        console.log('Submitting overview with data:', req.body);

        // Add status field with default 'Pending'
        const overviewData = {
            ...req.body,
            status: 'Pending'
        };

        const newOverview = await Overview.create(overviewData);

        console.log('Overview created successfully:', newOverview);

        res.status(201).json({
            status: 'success',
            message: 'Overview data submitted successfully!',
            data: newOverview,
        });
    } catch (error) {
        console.error('Error in submitOverview:', error);
        next(new createError(error.message || 'Internal Server Error', 500));
    }
};

// Get all transactions
exports.getAllTransactions = async (req, res, next) => {
    try {
        console.log('Fetching all transactions');
        
        const transactions = await Overview.find()
            .sort({ createdAt: -1 }) // Sort by newest first
            .select('_id amount currency recipientAccountHolderName recipientBankName recipientAccountNumber swiftCode status createdAt');

        console.log(`Found ${transactions.length} transactions`);

        res.status(200).json({
            status: 'success',
            results: transactions.length,
            data: transactions
        });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        next(new createError('Error fetching transactions', 500));
    }
};

// Update transaction status
exports.updateTransactionStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        console.log(`Updating transaction ${id} status to ${status}`);

        if (!['Pending', 'Approved', 'Declined'].includes(status)) {
            return next(new createError('Invalid status value', 400));
        }

        const transaction = await Overview.findByIdAndUpdate(
            id,
            { status },
            { 
                new: true, 
                runValidators: true,
                select: '_id amount currency recipientAccountHolderName recipientBankName recipientAccountNumber swiftCode status createdAt'
            }
        );

        if (!transaction) {
            return next(new createError('Transaction not found', 404));
        }

        console.log('Transaction updated successfully:', transaction);

        res.status(200).json({
            status: 'success',
            data: transaction
        });
    } catch (error) {
        console.error('Error updating transaction:', error);
        next(new createError('Error updating transaction', 500));
    }
};

// Get a single transaction
exports.getTransaction = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(`Fetching transaction ${id}`);

        const transaction = await Overview.findById(id)
            .select('_id amount currency recipientAccountHolderName recipientBankName recipientAccountNumber swiftCode status createdAt');

        if (!transaction) {
            return next(new createError('Transaction not found', 404));
        }

        console.log('Transaction found:', transaction);

        res.status(200).json({
            status: 'success',
            data: transaction
        });
    } catch (error) {
        console.error('Error fetching transaction:', error);
        next(new createError('Error fetching transaction', 500));
    }
};

// Delete a transaction (optional, for admin use)
exports.deleteTransaction = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(`Deleting transaction ${id}`);

        const transaction = await Overview.findByIdAndDelete(id);

        if (!transaction) {
            return next(new createError('Transaction not found', 404));
        }

        console.log('Transaction deleted successfully');

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        console.error('Error deleting transaction:', error);
        next(new createError('Error deleting transaction', 500));
    }
};