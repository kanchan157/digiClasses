import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { Warning } from "@material-ui/icons";
import { clearSnackbar } from "../Snackbar/SnackbarActions";

// SNACKBAR TYPES ALLOWED
// success
// error
// warning
// info

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    width: "400px"
  }
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { snackbarType, snackbarMessage, snackbarOpen } = useSelector(
    state => state.snackbarReducer
  );

  const handleClose = (event, reason) => {
    dispatch(clearSnackbar());
  };

  return (
    <div className={classes.root}>
      <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={snackbarOpen} 
      autoHideDuration={3000} 
      onClose={handleClose}
      >
        <Alert className={classes.alert} severity={snackbarType}>
          {snackbarMessage && snackbarMessage.map((item, index) => {
            return <div><span key={index}>{item}</span><br/></div>
          })}
        </Alert>
      </Snackbar>
    </div>
  );
}
