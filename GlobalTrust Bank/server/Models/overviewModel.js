// C:\Users\Sauraav\Desktop\new_poe\GlobalTrust Bank\server\Models\overviewModel.js

const mongoose = require('mongoose');

const overviewSchema = new mongoose.Schema({
    amount: { 
        type: Number, 
        required: [true, 'Amount is required'],
        min: [0, 'Amount must be positive']
    },
    currency: { 
        type: String, 
        required: [true, 'Currency is required'],
        match: [/^[A-Z]{3}$/, 'Please enter a valid currency code']
    },
    provider: { 
        type: String, 
        required: [true, 'Provider is required'],
        enum: {
            values: ['SWIFT'],
            message: 'Provider must be SWIFT'
        }
    },
    recipientAccountHolderName: { 
        type: String, 
        required: [true, 'Recipient name is required'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    recipientBankName: { 
        type: String, 
        required: [true, 'Bank name is required'],
        minlength: [3, 'Bank name must be at least 3 characters long']
    },
    recipientAccountNumber: { 
        type: String, 
        required: [true, 'Account number is required'],
        match: [/^\d{11}$/, 'Account number must be exactly 11 digits']
    },
    swiftCode: { 
        type: String, 
        required: [true, 'SWIFT code is required'],
        match: [/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/, 'Invalid SWIFT code format']
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Declined'],
        default: 'Pending'
    }
}, {
    timestamps: true
});

const Overview = mongoose.model('Overview', overviewSchema);

module.exports = Overview;