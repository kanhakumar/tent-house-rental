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

const CustomerList = () => {
  const classes = useStyles();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    console.log("component mounted");
    const getCustomerList = async () => {
      try {
        const response = await axios.get(Api + "customers/");
        setCustomers(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getCustomerList();
  }, []);

  return (
    <>
      <Title>Customer details</Title>
      {customers.success === true && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Customer ID</TableCell>
                <TableCell className={classes.header}>Customer Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.customers.map((customer) => (
                <TableRow key={customer._id}>
                  <TableCell component="th" scope="row">
                    {customer._id}
                  </TableCell>
                  <TableCell>{customer.customer_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CustomerList;
