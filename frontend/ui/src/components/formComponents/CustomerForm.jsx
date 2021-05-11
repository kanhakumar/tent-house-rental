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

const handleClick = async (customer_name) => {
  try {
    const response = await axios.post(Api + "customers/newCustomers", { customer_name });
    console.log(response.data);
    if(response.data.success){
        window.location.reload();
    }
  } catch (error) {
    console.log("error", error);
  }
};

const CustomerForm = () => {
  const classes = useStyles();

  const [name, setName] = useState("");

  return (
    <>
      <Title>Add Customer</Title>
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          onClick={() => handleClick(name)}
        >
          Add
        </Button>
      </form>
    </>
  );
};
export default CustomerForm;
