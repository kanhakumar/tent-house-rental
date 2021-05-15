import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alerts(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity="info"
          onClose={() => {
            setOpen(false);
          }}
        >
          <AlertTitle>Success</AlertTitle>
          {props.message}
        </Alert>
      </Collapse>
    </div>
  );
}
