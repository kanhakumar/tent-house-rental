import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Title from "../Title";
import { Button } from "@material-ui/core";

import axios from "axios";

const Api = "http://localhost:3000/api/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const handleClick = async (product_title,quantity_total,price) => {
  try {
    const response = await axios.post(Api + "products/newProducts", {
      product_title,
      quantity_total,
      price
    });
    console.log(response.data);
    if (response.data.success) {
      window.location.reload();
    }
  } catch (error) {
    console.log("error", error);
  }
};

const ProductForm = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <>
      <Title>Add Product</Title>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={price}
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
            onClick={() => handleClick(name,quantity,price)}
        >
          Add
        </Button>
      </form>
    </>
  );
};
export default ProductForm;
