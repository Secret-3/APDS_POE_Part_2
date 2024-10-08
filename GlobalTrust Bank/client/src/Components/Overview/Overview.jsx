import React, { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi'; // Using Feather icons from react-icons
import './Overview.css'; // Import the new CSS file

const Overview = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [provider, setProvider] = useState('SWIFT');
  const [accountInfo, setAccountInfo] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  
  // Add new state variables for recipient details
  const [recipientAccountHolderName, setRecipientAccountHolderName] = useState('');
  const [recipientBankName, setRecipientBankName] = useState('');
  const [recipientAccountNumber, setRecipientAccountNumber] = useState('');

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  return (
    <div className="overview-container">
      <div className="overview-card">
        <h1 className="overview-title">GlobalTrust Bank Portal</h1>

        {showConfirmation ? (
          <div className="confirmation-message" role="alert">
            <div className="flex">
              <div className="icon-container">
                <FiAlertCircle className="confirmation-icon" />
              </div>
              <div>
                <p className="confirmation-title">Payment Submitted</p>
                <p className="confirmation-text">
                  Your payment has been submitted successfully. Please check your email for confirmation.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="amount" className="label">Amount</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="currency" className="label">Currency</label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="input-field"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="ZAR">ZAR</option>
              </select>
            </div>

            <div>
              <label htmlFor="provider" className="label">Provider</label>
              <select
                id="provider"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="input-field"
              >
                <option value="SWIFT">SWIFT</option>
              </select>
            </div>

            <div>
              <label htmlFor="accountInfo" className="label">Enter the recipient's account information below:</label>
            
            </div>

           

            {/* Recipient Account Information Fields */}
            <div>
              <label htmlFor="recipientAccountHolderName" className="label">Recipient Account Holder Name</label>
              <input
                type="text"
                id="recipientAccountHolderName"
                value={recipientAccountHolderName}
                onChange={(e) => setRecipientAccountHolderName(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="recipientBankName" className="label">Recipient Bank Name</label>
              <input
                type="text"
                id="recipientBankName"
                value={recipientBankName}
                onChange={(e) => setRecipientBankName(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="recipientAccountNumber" className="label">Recipient Bank Account Number</label>
              <input
                type="text"
                id="recipientAccountNumber"
                value={recipientAccountNumber}
                onChange={(e) => setRecipientAccountNumber(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="swiftCode" className="label">SWIFT Code</label>
              <input
                type="text"
                id="swiftCode"
                value={swiftCode}
                onChange={(e) => setSwiftCode(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-button"
            >
              Pay Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};



export default Overview;
