import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

// Function to create each row of transaction data
function createData(transactionId, purpose, amount, date, status) {
  return { transactionId, purpose, amount, date, status };
}

// Sample rows with transaction data in ZAR, representing different payment purposes
const rows = [
  createData(12345678, "Book Purchase", "R 250.00", "12 September 2024", "Pending"),
  createData(12345679, "Transfer to John Doe", "R 500.00", "20 October 2024", "Pending"),
  createData(12345680, "Grocery Payment", "R 150.00", "4 November 2024", "Approved"),
  createData(12345681, "Electricity Bill", "R 200.00", "22 October 2024", "Pending"),
  createData(12345682, "Online Course", "R 300.00", "2 November 2024", "Approved"),
  createData(12345683, "Transfer to Jane Smith", "R 400.00", "5 November 2024", "Pending"),
  createData(12345684, "Car Insurance Payment", "R 600.00", "10 September 2024", "Pending"),
  createData(12345685, "Salary Payment", "R 5000.00", "15 October 2024", "Pending"),
];

// Function to set styles based on transaction status
const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function TransactionTable() {
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
              <TableCell align="left">Purpose</TableCell>
              <TableCell align="left">Amount (ZAR)</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.transactionId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.transactionId}
                </TableCell>
                <TableCell align="left">{row.purpose}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left">SWIFT</TableCell> {/* All transactions use SWIFT */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
