import React from 'react';
import { Grid } from '@material-ui/core';
import OrganisationLinearStepper from '../OrganisationLinearStepper';
import HeaderMenu from '../../../../../Components/HeaderMenu';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function OrganisationCreate() {
    const createOrganisationLayout = {
        width: '90%',
        margin: '0 auto',
        marginTop: '80px'
      };
      let history = useHistory();
      const movePreviousPage = () => {
        history.goBack()
      };
    return (
        <React.Fragment>
        <Grid direction="row" >
            <Grid xs={12} style={{ textAlign: "left" }}>
                <HeaderMenu />
            </Grid>
        </Grid>
        <div style={createOrganisationLayout}>
        <IconButton onClick={movePreviousPage} edge="start"  >
             <ArrowBackIosIcon style={{ fontSize: 30, color:'black', marginTop:'-9px' }}  />
        </IconButton>
        <span style={{fontSize:'2em', fontWeight:'bold'}}>Create Organisation Profile</span>
        <OrganisationLinearStepper />
        </div>
        </React.Fragment>
    )
};