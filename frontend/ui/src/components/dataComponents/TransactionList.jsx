import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import axios from "axios";
import Title from "../Title";

const Api = "http://localhost:3000/api/";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    position: "sticky",
    top: 0,
    background: "#3f51b5",
    color: "white",
  },
});

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log("component mounted");
    const getTransactionList = async () => {
      try {
        const response = await axios.get(Api + "transactions/");
        setTransactions(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getTransactionList();
  }, []);

  const classes = useStyles();

  return (
    <>
      <Title>Transaction Details</Title>
      {transactions.success === true &&
      transactions.transactions.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Transaction ID</TableCell>
                <TableCell className={classes.header}>Product ID</TableCell>
                <TableCell className={classes.header}>Customer ID</TableCell>
                <TableCell className={classes.header}>Transaction Type</TableCell>
                <TableCell className={classes.header}>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.transactions.map((transaction) => (
                <TableRow key={transaction._id}>
                  <TableCell component="th" scope="row">
                    {transaction._id}
                  </TableCell>
                  <TableCell>{transaction.product_id}</TableCell>
                  <TableCell>{transaction.customer_id}</TableCell>
                  <TableCell>{transaction.transaction_type}</TableCell>
                  <TableCell>{transaction.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>No Transactions made!</div>
      )}
    </>
  );
};

export default TransactionList;
