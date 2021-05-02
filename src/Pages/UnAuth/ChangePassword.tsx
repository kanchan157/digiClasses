import React, { useState } from "react";
import { Grid, Button, Typography, Modal, Fade } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CustomInput from "../../Components/CustomInput";
import Backdrop from '@material-ui/core/Backdrop';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import { useHistory } from 'react-router'
import AuthClient from "../../Service/auth_services";
import { useDispatch } from "react-redux";

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
const ChangePassword = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [password, setPassword] = useState("")
    const [nPassword, setNPassword] = useState("")
    const [open, setOpen] = React.useState(false);

    const setInputState = (inputStateValue: any, inputId: any) => {
        inputId == 'password' && setPassword(inputStateValue);
        inputId == 'nPassword' && setNPassword(inputStateValue);
    }
    const forgotPasswordLogic = () => {
        AuthClient.updatePassword({ password: password, password_confirmation: nPassword }).then((response: any) => {
            forgotPasswordLogicSuccess(response)
        }).catch(error => {
            alert("Something went wrong, please try again !!!")
        });
        // Post_API({ email: username }, api_url.login, forgotPasswordLogicSuccess)
    }

    const forgotPasswordLogicSuccess = (response:any)=>{
        setOpen(true);
        console.log(response)
    }
    const handleClose = () => {
        setOpen(false);
        history.push('/auth/login', { subPage: "login" })
    };


    return (
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <img src="../../../assets/images/logo.png" alt="dsd" />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}  >
                    <Typography variant="h3" style={{ marginTop: 20, color: "#4D4F5C" }}>Set Password</Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <CustomInput id="password" placeholder="Password" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <CustomInput id="nPassword" placeholder="Confirm Password" parentcall={setInputState} />
                </Grid>


                <Grid item xs={6} justify="center" alignContent="center" style={{ marginTop: 20, textAlign: "center" }}>
                    <Button variant="contained" color="primary" onClick={forgotPasswordLogic}>Submit</Button>
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
                        <Typography variant="h3" style={{ color: "#4D4F5C", marginTop: 20, marginBottom: 30 }}>Password changed successfully!</Typography>
                        <Button variant="outlined" onClick={handleClose}> Login</Button>

                    </div>
                </Fade>
            </Modal>
        </form >

    )
}

export default ChangePassword
