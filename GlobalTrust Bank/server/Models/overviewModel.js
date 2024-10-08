const mongoose = require('mongoose');

const overviewSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  provider: { type: String, required: true },
  recipientAccountHolderName: { type: String, required: true },
  recipientBankName: { type: String, required: true },
  recipientAccountNumber: { type: String, required: true },
  swiftCode: { type: String, required: true },
});

const Overview = mongoose.model('Overview', overviewSchema);

module.exports = Overview;