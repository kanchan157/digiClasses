import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, IconButton } from '@material-ui/core';

import { AddCircleOutlined } from '@material-ui/icons';
// import NDA from '../Partner/NDA';
// import OtherQuestions from '../Partner/OtherQuestions';
import MaterialTable from 'material-table';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { DELETE_STEPPER_DATA, GLOBAL_STEPPER_DATA } from '../../../Redux/actions';
import HeaderMenu from '../../../Components/HeaderMenu';
import OrganizationContent from '../Admin/Organisation/OrganizationContent';


function PartnerList() {
    const history = useHistory();
    const classes = useStyles();
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch();
    const type = 'Partner'
    const createTypeRoute = type == "Partner"
        ? '/admin/partner/onboarding' : type == "Organizaion"
            ? "/admin/organisation/create" : ""
    useEffect(() => {
        getBasicInfo();
    }, [])

    const getBasicInfo = () => {
        // if (global_data.partner_profile != "") {
        AdminPartnerClient.BasicInfo_get('', '').then((response) => {
            // props.parentSetProfileId(response.data.id, response.data.attributes.acuity_people_profile_id);
            setUserData(userData.concat(response.data))
        }).catch(error => alert(JSON.stringify(error.errors)));
        // }
    }
    return (
        <div className={classes.root}>
            <Grid direction="row" >
                <Grid xs={12}>
                    <HeaderMenu />
                </Grid>
            
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={6} style={{ textAlign: "left" }}>
                    <Typography variant="h2">All {type}</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }}>
                    <Button variant="contained" color="primary"
                        onClick={() => {
                            dispatch({ type: DELETE_STEPPER_DATA });
                            history.push(createTypeRoute)
                        }}
                        style={{ borderRadius: 50, textTransform: 'none', }}>
                        <AddCircleOutlined style={{ marginRight: 10, fontSize: 15 }} />Create {type}
                    </Button>
                </Grid>
            </Grid>
            <OrganizationContent />
            <Grid direction="row" style={{ padding: 30 }}>
                <Grid xs={12} >
                    <MaterialTable
                        title=""
                        columns={[
                            { title: 'Name', field: 'attributes.first_name' },
                            {
                                title: 'Status',
                                field: 'status',
                                headerStyle: {
                                    textAlign: 'center'
                                },
                                cellStyle: {
                                    textAlign: 'center',
                                    padding: '15px 0'
                                },
                                render: rowData => <Button size="small" onClick={() => {
                                    dispatch({ type: GLOBAL_STEPPER_DATA, payload: { partner_profile: rowData.id } });
                                    history.push(createTypeRoute)
                                }}
                                    variant="outlined"><b>View</b></Button>
                            },
                        ]}
                        data={userData}
                        options={{
                            search: false
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default PartnerList
