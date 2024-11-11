import * as React from "react";
import { useState } from "react";
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
import "./Table.css";

function createData(transactionId, recipientAccountHolderName, recipientAccountNumber, swiftCode, status) {
  return { transactionId, recipientAccountHolderName, recipientAccountNumber, swiftCode, status };
}

const rows = [
  createData(123445566, "Mr Mkhize", 123456788, 1234, "Approved"),
  createData(123445577, "Ms Washington", 123456799, 5678, "Approved"),
  createData(123445588, "Mrs Surname", 123456700, 9101, "Decline"),
];

export default function BasicTable() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  //verify button
  const handleVerifyClick = (transactionId) => {
    setSelectedTransaction(transactionId);
    setOpenDialog(true);
  };

  //decline button
  const handleDeclineClick = (transactionId) => {
    alert(`Transaction ${transactionId} has been declined.`);
    
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTransaction(null);
  };

  //Submit to SWIFT
  const handleSubmitToSwift = () => {
    alert(`Transaction ${selectedTransaction} has been submitted to SWIFT.`);
    setOpenDialog(false);
    setSelectedTransaction(null);
    
  };

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
              <TableCell align="left">Recipient Account Holder Name</TableCell>
              <TableCell align="left">Recipient Account Number</TableCell>
              <TableCell align="left">Swift Code</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.transactionId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.transactionId}
                </TableCell>
                <TableCell align="left">{row.recipientAccountHolderName}</TableCell>
                <TableCell align="left">{row.recipientAccountNumber}</TableCell>
                <TableCell align="left">{row.swiftCode}</TableCell>
                <TableCell align="left">
                <Button
    variant="contained"
    onClick={() => handleVerifyClick(row.transactionId)}
    style={{ backgroundColor: 'green', color: 'white', marginRight: 8 }}
  >
    Verify
  </Button>
  <Button
    variant="contained"
    onClick={() => handleDeclineClick(row.transactionId)}
    style={{ backgroundColor: 'red', color: 'white' }}
  >
    Decline
  </Button>
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
            Do you want to submit the payment for transaction {selectedTransaction} to SWIFT?
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
