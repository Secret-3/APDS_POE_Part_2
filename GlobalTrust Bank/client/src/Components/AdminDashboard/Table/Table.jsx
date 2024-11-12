import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchTransactions, updateTransactionStatus } from "../../../services/api";
import "./Table.css";

export default function BasicTable() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      const data = await fetchTransactions();
      setTransactions(data);
      setError(null);
    } catch (err) {
      setError('Failed to load transactions');
      console.error('Error loading transactions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyClick = (transaction) => {
    setSelectedTransaction(transaction);
    setOpenDialog(true);
  };

  const handleDeclineClick = async (transactionId) => {
    try {
      await updateTransactionStatus(transactionId, 'Declined');
      await loadTransactions();
      alert('Transaction has been declined.');
    } catch (error) {
      alert('Failed to decline transaction.');
      console.error('Error declining transaction:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTransaction(null);
  };

  const handleSubmitToSwift = async () => {
    try {
      await updateTransactionStatus(selectedTransaction._id, 'Approved');
      await loadTransactions();
      alert('Transaction has been submitted to SWIFT.');
      setOpenDialog(false);
      setSelectedTransaction(null);
    } catch (error) {
      alert('Failed to submit transaction to SWIFT.');
      console.error('Error submitting to SWIFT:', error);
    }
  };

  if (loading) {
    return (
      <div className="Table" style={{ textAlign: 'center', padding: '20px' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="Table" style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        {error}
      </div>
    );
  }

  return (
    <div className="Table">
      <h3>Recent Transactions</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Currency</TableCell>
              <TableCell align="left">Recipient Name</TableCell>
              <TableCell align="left">Account Number</TableCell>
              <TableCell align="left">Swift Code</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow
                key={transaction._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transaction._id}
                </TableCell>
                <TableCell align="left">{transaction.amount}</TableCell>
                <TableCell align="left">{transaction.currency}</TableCell>
                <TableCell align="left">{transaction.recipientAccountHolderName}</TableCell>
                <TableCell align="left">{transaction.recipientAccountNumber}</TableCell>
                <TableCell align="left">{transaction.swiftCode}</TableCell>
                <TableCell align="left">{transaction.status}</TableCell>
                <TableCell align="left">
                  {transaction.status === 'Pending' && (
                    <>
                      <Button
                        variant="contained"
                        onClick={() => handleVerifyClick(transaction)}
                        style={{ backgroundColor: 'green', color: 'white', marginRight: 8 }}
                      >
                        Verify
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handleDeclineClick(transaction._id)}
                        style={{ backgroundColor: 'red', color: 'white' }}
                      >
                        Decline
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Submit Payment to SWIFT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to submit the payment for transaction {selectedTransaction?._id} to SWIFT?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitToSwift} color="primary" variant="contained">
            Submit to SWIFT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}