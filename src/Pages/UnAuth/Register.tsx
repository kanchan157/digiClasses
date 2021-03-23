import { makeStyles, Theme, createStyles, Grid, Paper, TextField, Checkbox, FormControlLabel, Button, Typography, FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@material-ui/core";
import React, { useState } from "react";
// import { Post_API } from "../../Service/service";
import { api_url } from "../../constants";
import { Link } from "react-router-dom";
import CustomInput from "../../Components/CustomInput";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AuthClient from  "../../Service/auth_services";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            width: "100%",
        },
    }),
);
const Register = () => {
    const classes = useStyles();
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [orgName, setOrgName] = useState("")

    const roleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRole(event.target.value as string);
    };
    const register = () => {
        // Post_API({ name: username, email: email, role_id: role, organisation_name: orgName }, api_url.submit_registration_request, registerSuccess, true)
        AuthClient.signUp({ name: username, email: email, role_id: role, organisation_name: orgName });
    }
    const registerSuccess = (response: any) => {
        console.log(response)
    }
    const setInputState = (inputStateValue: any, inputId: any) => {
        inputId === 'username' && setUserName(inputStateValue);
        inputId === 'email' && setEmail(inputStateValue);
        inputId === 'orgName' && setOrgName(inputStateValue);
    }

    return (
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <img src="../../../assets/images/logo.png" alt="dsd" />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <CustomInput id="username" placeholder="Username" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <CustomInput id="email" placeholder="Email" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>

                    <FormControl className={classes.formControl}>
                        <Select
                            id="role"
                            value={role}
                            onChange={roleChange}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>Select Role</MenuItem>
                            <MenuItem value="1">Organization</MenuItem>
                            <MenuItem value="2">Partner</MenuItem>
                        </Select>

                    </FormControl>
                </Grid>

                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <CustomInput id="orgName" placeholder="Organization Name" parentcall={setInputState} />
                </Grid>


                <Grid item xs={12} >
                    <Typography variant="h6" style={{ textAlign: "left" }}>
                        <Link
                            className="anchorLink primary"
                            to={{
                                pathname: "/auth/login",
                                state: { subPage: "login" }
                            }}>Login to existing account </Link>
                        <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: "middle", color: "#3B86FF" }} />
                    </Typography>


                </Grid>
                <Grid item xs={3} justify="center" alignContent="center" style={{ marginTop: 20, textAlign: "center" }}>
                    <Button variant="contained" color="primary" onClick={register}> Register</Button>
                </Grid>

            </Grid>
        </form>
    )
}

export default Register
