import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles, Grid, Paper } from "@material-ui/core";
import LoginPage from "./Login";

import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import Register from "./Register";
import { useHistory, useLocation } from "react-router";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
    }),
);
function CommonUnAuth(props: any) {
    let location: any = useLocation();
    const classes = useStyles();
    console.log(location)

    return (
        <div className={classes.root}>

            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                <Grid item xs={12} sm={6}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{ height: "100vh", background: "transparent linear-gradient(218deg, #981B1E 0%, #360940 100%) 0% 0% no-repeat padding-box" }} >
                        <img src="../../../assets/images/brain.png" alt="dsd" />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{ height: "100vh" }} >
                        <Grid item xs={12} sm={8}>

                            {

                                location.pathname == "/auth/forgotPassword" ? <ForgotPassword />
                                    : location.pathname === "/auth/login" ? <LoginPage />
                                        : location.pathname === "/auth/register" ? <Register />
                                            : location.pathname === "/auth/ChangePassword" ? <ChangePassword />
                                                : null
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CommonUnAuth
