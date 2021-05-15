import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

import axios from "axios";

const Api = "http://localhost:3000/api/";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const handleClick = async (customer_id, product_id, quantity) => {
  try {
    const response = await axios.post(Api + "transactions/newTransactions", {
      customer_id,
      product_id,
      transaction_type: "OUT",
      quantity,
    });
    console.log(response.data);
    if (response.data.success) {
      window.location.reload();
    }
  } catch (error) {
    console.log("error", error);
  }
};

const TransactionForm = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log("component mounted");
    const getProductList = async () => {
      try {
        const response = await axios.get(Api + "products/");
        setProducts(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    const getCustomerList = async () => {
      try {
        const response = await axios.get(Api + "customers/");
        setCustomers(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getCustomerList();
    getProductList();
  }, [selectedCustomer, selectedProduct]);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedProduct}
          onChange={(e) => {
            setSelectedProduct(e.target.value);
          }}
          label="Product"
          autoWidth
        >
          {products.success === true &&
            products.products.map((product) => (
              <MenuItem key={product._id} value={product._id}>
                {product.product_title}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Customer</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedCustomer}
          onChange={(e) => {
            setSelectedCustomer(e.target.value);
          }}
          label="Customer"
        >
          {customers.success === true &&
            customers.customers.map((customer) => (
              <MenuItem key={customer._id} value={customer._id}>
                {customer.customer_name}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="outlined-basic"
          label="Total Quantity"
          variant="outlined"
          value={quantity}
          type="number"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          onClick={() =>
            handleClick(selectedCustomer, selectedProduct, quantity)
          }
        >
          Add
        </Button>
      </FormControl>
    </div>
  );
};
export default TransactionForm;
