const Overview = require('../Models/overviewModel');
const createError = require('../utils/appError');

// Define regex patterns for validation
const currencyRegex = /^[A-Z]{3}$/; // Assuming a 3-letter currency code
const swiftCodeRegex = /^[A-Z0-9]{8,11}$/; // SWIFT code validation

// Function to sanitize input
const sanitizeInput = (obj) => {
    const sanitized = {};
    for (let [key, value] of Object.entries(obj)) {
        // Convert the value to string and trim it
        if (typeof value === 'string') {
            value = value.trim();
        }

        // Escape special characters and prevent MongoDB operator injection
        if (typeof value === 'string') {
            value = value.replace(/\$/g, '')
                         .replace(/{/g, '')
                         .replace(/}/g, '');
        }

        sanitized[key] = value;
    }
    return sanitized;
};

// Middleware for input sanitization and validation
exports.validateOverviewInput = async (req, res, next) => {
  const sanitizedInput = sanitizeInput(req.body);
  const amount = parseFloat(sanitizedInput.amount); // Convert to number
  const { currency, provider, recipientAccountHolderName, recipientBankName, recipientAccountNumber, swiftCode } = sanitizedInput;

  // Validate inputs
  if (typeof amount !== 'number' || amount <= 0) {
      return next(new createError('Amount must be a positive number!', 400));
  }
  if (!currencyRegex.test(currency)) {
      return next(new createError('Currency must be a valid 3-letter code!', 400));
  }
  if (provider !== 'SWIFT') {
      return next(new createError('Provider must be SWIFT!', 400));
  }
  if (recipientAccountHolderName.length < 3) {
      return next(new createError('Recipient account holder name must be at least 3 characters long!', 400));
  }
  if (recipientBankName.length < 3) {
      return next(new createError('Recipient bank name must be at least 3 characters long!', 400));
  }
  if (!/^\d+$/.test(recipientAccountNumber) || recipientAccountNumber.length !== 11) {
      return next(new createError('Recipient account number must be exactly 11 digits!', 400));
  }
  if (!swiftCodeRegex.test(swiftCode)) {
      return next(new createError('SWIFT code must be between 8-11 alphanumeric characters!', 400));
  }

  // If all validations pass, proceed to the next middleware
  req.body = sanitizedInput; // Update req.body with sanitized input
  next();
};

// Submit Overview function
exports.submitOverview = async (req, res, next) => {
    try {
        const newOverview = await Overview.create(req.body);

        res.status(201).json({
            status: 'success',
            message: 'Overview data submitted successfully!',
            data: newOverview,
        });
    } catch (error) {
        console.error('Error in submitOverview:', error);
        next(new createError('Internal Server Error', 500));
    }
};