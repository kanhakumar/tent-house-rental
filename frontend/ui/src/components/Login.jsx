import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import { Link as L } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Title from "./Title";
import Copyright from "./Copyright";
// import { ToastContainer, toast } from "material-react-toastify";
// import "material-react-toastify/dist/ReactToastify.css";

import axios from "axios";

const Api = "http://localhost:3000/api/";

const verification = async (e, email, password) => {
  e.preventDefault();
  try {
    const response = await axios.post(Api + "users/signIn", {
      email,
      password,
    });
    console.log(response.data);
    if (response.data.success) {
      window.location = "http://localhost:3006/dashboard";
    } else {
      alert(response.data.e);
    }
  } catch (error) {
    console.log("error", error);
  }
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Title component="h1" variant="h5">
          Tent House Rental
        </Title>
        <Avatar className={classes.avatar}>THR</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
              verification(e, email, password);
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
