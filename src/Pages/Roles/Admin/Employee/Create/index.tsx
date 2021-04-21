import React from 'react';
import { Grid } from '@material-ui/core';
import EmployeeLinearStepper from '../EmployeeLinearStepper';
import HeaderMenu from '../../../../../Components/HeaderMenu';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function EmployeeCreate() {
    const createEmployeeLayout = {
        width: '90%',
        margin: '0 auto',
        padding:'30px'
        // marginTop: '80px'
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
        <div style={createEmployeeLayout}>
        <IconButton onClick={movePreviousPage} edge="start"  >
             <ArrowBackIosIcon style={{ fontSize: 25, color:'black', marginTop:'-9px' }}  />
        </IconButton>
        <span style={{fontSize:26,lineHeight:"30px",fontWeight:'bold',marginLeft:'-11px', color:"#4D4F5C"}}>Create Employee Profile</span>
        {/* <span style={{fontSize:'2em', fontWeight:'bold'}}>Create Employee Profile</span> */}
        <EmployeeLinearStepper />
        </div>
        </React.Fragment>
    )
};