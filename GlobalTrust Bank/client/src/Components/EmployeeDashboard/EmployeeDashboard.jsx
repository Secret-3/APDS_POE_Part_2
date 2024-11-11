import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Dialog,
  DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  // Sample data (you may replace this with API data)
  const transactions = [
    { id: 'T001', recipientAccountHolderName: 'John Doe', recipientAccountNumber: '123456789', swiftCode: 'ABC123XYZ' },
    { id: 'T002', recipientAccountHolderName: 'Jane Smith', recipientAccountNumber: '987654321', swiftCode: 'DEF456XYZ' },
    // Add more entries as needed
  ];

  // State for dialog control
  const [openDialog, setOpenDialog] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [dialogType, setDialogType] = useState(''); // 'verify' or 'decline'

  // Handle opening and closing dialogs
  const handleOpenDialog = (transaction, type) => {
    setCurrentTransaction(transaction);
    setDialogType(type);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentTransaction(null);
  };

  const handleConfirmAction = () => {
    // Perform the action for 'verify' or 'decline'
    if (dialogType === 'verify') {
      console.log(`Transaction ${currentTransaction.id} submitted to SWIFT`);
    } else if (dialogType === 'decline') {
      console.log(`Transaction ${currentTransaction.id} declined`);
    }
    handleCloseDialog();
  };

  return (
    <TableContainer component={Paper} className="employee-dashboard-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Recipient Name</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>SWIFT Code</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.recipientAccountHolderName}</TableCell>
              <TableCell>{transaction.recipientAccountNumber}</TableCell>
              <TableCell>{transaction.swiftCode}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpenDialog(transaction, 'verify')}
                  style={{ marginRight: '10px' }}
                >
                  Verify
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleOpenDialog(transaction, 'decline')}
                >
                  Decline
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>{dialogType === 'verify' ? 'Submit to SWIFT' : 'Decline Transaction'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogType === 'verify'
              ? `Are you sure you want to submit transaction ${currentTransaction?.id} to SWIFT?`
              : `Are you sure you want to decline transaction ${currentTransaction?.id}?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={handleConfirmAction} color="primary" variant="contained">
            {dialogType === 'verify' ? 'Submit' : 'Confirm'}
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default EmployeeDashboard;
