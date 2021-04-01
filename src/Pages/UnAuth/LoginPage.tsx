import { makeStyles, Theme, createStyles, Grid, Paper, TextField, Checkbox, FormControlLabel, Button, Typography, Backdrop, Fade, Modal, FormControl, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
// import { Post_API } from "../../Service/service";
import { api_url } from "../../constants";
import CustomInput from "../../Components/CustomInput";
import { Link, useHistory } from "react-router-dom";
import { green } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { GLOBAL_DATA } from "../../Redux/actions";
import AuthClient from "../../Service/auth_services";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modalroot: {
            height: 300,
            flexGrow: 1,
            minWidth: 600,
            transform: 'translateZ(0)',
            // The position fixed scoping doesn't work in IE 11.
            // Disable this demo to preserve the others.
            '@media all and (-ms-high-contrast: none)': {
                display: 'none',
            },
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
        },
        paper: {
            backgroundColor: "#fff",
            boxShadow: theme.shadows[5],
            padding: 20,
            textAlign: "left"
        },
        modalInner: {
            width: 600,
            borderRadius: 10
        },
    }),
);
function LoginPage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [remember, setRemember] = useState(true);
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [open, setOpen] = React.useState(false);
    const [role, setRole] = React.useState("");
    const [roleArr, setRoleArr] = React.useState([]);

    const handleChange = (event: any) => {
        setRemember(event.target.checked);
    };
    const setInputState = (inputStateValue: any, inputId: any) => {
        inputId === 'Username' && setUserName(inputStateValue);
        inputId === 'Password' && setPassword(inputStateValue);
    }
    const login = () => {
        // Post_API({ email: username, password: password }, api_url.login, loginSuccess, true);
        AuthClient.login({ email: username, password: password }).then((response: any) => {
            loginSuccess(response)
        });
    }
    const loginSuccess = (response: any) => {
        console.log(response)
        if (!response.success) {
            alert("Something went wrong, please try again !!!")
        } else {
            setOpen(true);
            setRoleArr(roleArr.concat(response.data.role))
        }
    }

    const handleClose = () => {
        setOpen(false);
        dispatch({ type: GLOBAL_DATA, payload: { role: role } });
        history.push('/' + role)

    };
    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRole((event.target as HTMLInputElement).value);
    };

    return (
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <img src="../../../assets/images/logo.png" alt="dsd" />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <CustomInput id="Username" placeholder="Username" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12}>
                    <CustomInput id="Password" placeholder="Password" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} sm={8}  >
                    <FormControlLabel
                        classes={{
                            // root: "classes-root", // class name, e.g. `root-x`
                            // disabled: "classes-disabled", // class name, e.g. `disabled-x`
                            label: "h3"
                        }}
                        control={
                            <Checkbox
                                checked={remember}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Typography variant="h6" style={{ textAlign: "right" }}>
                        <Link
                            className="anchorLink"
                            to={{
                                pathname: "/auth/rgotPassword",
                                state: { subPage: "forgotPassword" }
                            }}> Forgot Password </Link>
                    </Typography>
                </Grid>
                <Grid item xs={3} justify="center" style={{ marginTop: 20, textAlign: "center" }}>
                    <Button variant="contained" color="primary" onClick={login}> Login</Button>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" style={{ textAlign: "center", marginTop: 20 }}>
                        <Link
                            className="anchorLink primary"

                            to={{
                                pathname: "/auth/gister",
                                state: { subPage: "register" }
                            }}> New User? Create new account</Link>
                    </Typography>
                </Grid>

            </Grid>
            {/* <div className={classes.modalroot} style={{display:open?"block":"none"}}> */}

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
                    <div className={`${classes.paper} ${classes.modalInner}`}>
                        <Typography variant="h3" style={{ color: "#4D4F5C", marginTop: 20, textAlign: "center" }}>Choose Role</Typography>
                        <FormControl component="fieldset" style={{ marginTop: 20, marginBottom: 20 }}>
                            <RadioGroup aria-label="gender" name="gender1" value={role} onChange={handleRoleChange}>
                                {
                                    roleArr.map((option) => {
                                        return <FormControlLabel style={{ textTransform: "capitalize" }} value={option} control={<Radio />} label={option} />
                                    })
                                }
                            </RadioGroup>
                        </FormControl>
                        <div style={{ textAlign: "center" }}><Button variant="outlined" onClick={handleClose}> Continue</Button></div>

                    </div>
                </Fade>
            </Modal>
            {/* </div> */}
        </form>
    )
}

export default LoginPage
