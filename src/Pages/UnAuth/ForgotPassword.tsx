import React, { useState } from "react";
import { Grid, Paper, Container, TextField, Checkbox, FormControlLabel, Button, Typography, Modal, Fade } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import { Post_API } from "../../Service/service";
import { api_url } from "../../constants";
import { Link } from "react-router-dom";
import CustomInput from "../../Components/CustomInput";
import Backdrop from '@material-ui/core/Backdrop';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import { useHistory } from 'react-router'
import AuthClient from  "../../Service/auth_services";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
        },
        paper: {
            backgroundColor: "#fff",
            boxShadow: theme.shadows[5],
            padding: 20,
            textAlign: "center"
        },
    }),
);
export default function ForgotPassword() {
    const classes = useStyles();
    const history = useHistory();

    const [username, setUserName] = useState("")
    const [open, setOpen] = React.useState(false);

    const setInputState = (inputStateValue: any, inputId: any) => {
        inputId === 'Username' && setUserName(inputStateValue);
    }
    const forgotPasswordLogic = () => {
        setOpen(true);
        // Post_API({ email: username,redirect_url:"http://localhost:3000/auth/ChangePassword" }, api_url.password, forgotPasswordLogicSuccess,true)
        AuthClient.requestReset({ email: username,redirect_url:"http://localhost:3000/auth/ChangePassword" })
    }
    const forgotPasswordLogicSuccess = (response: any) => {
        console.log(response)
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        history.push('/auth/ChangePassword', { subPage: "resetPassword" })
    };

    return (
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <img src="../../../assets/images/logo.png" alt="dsd" />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}  >
                    <Typography variant="h3" style={{ marginTop: 20 }}>Enter your email to receive the password reset link.</Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <CustomInput id="Username" placeholder="Username" parentcall={setInputState} />
                </Grid>


                <Grid item xs={6} justify="center" alignContent="center" style={{ marginTop: 20, textAlign: "center" }}>
                    <Button variant="contained" color="primary" onClick={forgotPasswordLogic}> Send Request</Button>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" style={{ textAlign: "center", marginTop: 20 }}>
                        <Link
                            className="anchorLink primary"
                            to={{
                                pathname: "/auth/login",
                                state: { subPage: "login" }
                            }}> Cancel</Link>
                    </Typography>
                </Grid>

            </Grid>

            <Modal
                disableBackdropClick
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div><CheckCircleIcon style={{ color: green[500], fontSize: 40 }} /></div>
                        <Typography variant="h3" style={{ color: "#4D4F5C", marginTop: 20, marginBottom: 30 }}>Password reset link has been sent to your email.</Typography>
                        <Button variant="outlined" onClick={handleClose}> Close</Button>

                    </div>
                </Fade>
            </Modal>
        </form >

    )
}
