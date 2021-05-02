import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderMenu from '../../Components/HeaderMenu';
import PartnerList from '../Roles/Partner/PartnerList';
import Home from '../../Pages/AcuityOrganizationHome/Home';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
        },

    }),
);
function ManageInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid direction="row" >
                {/* <Grid xs={12}>
                    <HeaderMenu />
                </Grid> */}
                <Grid xs={12}>
                    <Home />
                </Grid>
            </Grid>

        </div>
    )
}

export default ManageInfo
