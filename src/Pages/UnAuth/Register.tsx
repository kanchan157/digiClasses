import { makeStyles, Theme, createStyles, Grid, Paper, TextField, Checkbox, FormControlLabel, Button, Typography, FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@material-ui/core";
import React, { useState } from "react";
// import { Post_API } from "../../Service/service";
import { api_url } from "../../constants";
import { Link, useHistory } from "react-router-dom";
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
    const [submitClickFlag, setSubmitClickFlag] = React.useState(false);
    const history = useHistory();

    const roleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRole(event.target.value as string);
    };
    const register = () => {
        if (username != "" && email != "" && orgName != "")  {
            setSubmitClickFlag(false)
            AuthClient.signUp({ name: username, email: email, role_id: role, organisation_name: orgName }).then((response: any) => {
                registerSuccess(response)
            }).catch(error => error && alert(error.errors[0]));
        } else {
            setSubmitClickFlag(true)
        }
      
    }
    const registerSuccess = (response: any) => {
        history.push('/auth/login')
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
                    <CustomInput id="username" placeholder="Username" parentcall={setInputState} helperText={(submitClickFlag && username == "") ? "Please enter username." : ""} error={(submitClickFlag && username == "")?true:false}/>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <CustomInput id="email" placeholder="Email" parentcall={setInputState} helperText={(submitClickFlag && email == "") ? "Please enter email." : ""} error={(submitClickFlag && email == "")?true:false}/>
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
                    <CustomInput id="orgName" placeholder="Organization Name" parentcall={setInputState} helperText={(submitClickFlag && orgName == "") ? "Please enter organization name." : ""} error={(submitClickFlag && orgName == "")?true:false}/>
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
