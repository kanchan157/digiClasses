import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, IconButton } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@material-ui/styles";

import { AddCircleOutlined } from '@material-ui/icons';
// import NDA from '../Partner/NDA';
// import OtherQuestions from '../Partner/OtherQuestions';
import MaterialTable from 'material-table';
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { DELETE_STEPPER_DATA, GLOBAL_STEPPER_DATA } from '../../../Redux/actions';
import HeaderMenu from '../../../Components/HeaderMenu';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CustomInput from '../../../Components/CustomInput';
import CustomSelect from '../../../Components/CustomSelect';


const useStyles = makeStyles((theme) => ({
    bgGray: {
        backgroundColor: '#F5F6FA',
        padding: 10,

    },

}))

function PartnerList() {
    const history = useHistory();
    const classes = useStyles();
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch();
    const type = 'Partner'
    const createTypeRoute = type == "Partner"
        ? '/admin/partner/onboarding' : type == "Organizaion"
            ? "/admin/organisation/create" : ""

    const columns = [

        {
            name: "attributes",
            label: "Name",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (rowData, tableMeta, updateValue) => {
                    return (
                        <span>{rowData.first_name + ' ' + rowData.last_name}</span>
                    );
                },
            },
        },

        {
            label: "Status",
            name: "attributes",
            options: {
                filter: true,
                customBodyRender: (rowData, tableMeta, updateValue) => {
                    return (
                        <Button variant="outlined" color="#F1ECED" size="small" style={{ textTransform: 'none' }} onClick={() => {
                            dispatch({ type: GLOBAL_STEPPER_DATA, payload: { partner_profile: rowData.id } });
                            history.push(createTypeRoute)
                        }} >
                            View
                        </Button>
                    );
                },
            },
        },
    ];

    const options = {
        filter: false,
        viewColumns: false,
        selectableRows: false,
        downloadOptions: {
            useDisplayedColumnsOnly: true,
            useDisplayedRowsOnly: true,
            filename: "partner_list.csv",
        },
        rowsPerPage: 10,
        rowsPerPageOptions: [10, 20, 30, 40, 50],
        responsive: "scroll",
    };
    const theme = createMuiTheme({
        overrides: {
            // MuiToolbar: {
            //   root: {
            //     backgroundColor: "#f1eded",
            //   },
            // },
            MUIDataTablePagination: {
                tableCellContainer: {
                    padding: "0px",
                },
                navContainer: {
                    backgroundColor: "#f1eded",
                },
            },
            MUIDataTableHeadCell: {
                fixedHeader: {
                    backgroundColor: "#f1eded",
                }
            }
        },
    });

    useEffect(() => {
        getBasicInfo();
    }, [])

    const getBasicInfo = () => {
        // if (global_data.partner_profile != "") {
        userData.length = 0

        AdminPartnerClient.BasicInfo_get('', '').then((response) => {
            // props.parentSetProfileId(response.data.id, response.data.attributes.acuity_people_profile_id);
            setUserData(userData.concat(response.data))
        }).catch(error => alert(JSON.stringify(error.errors)));
        // }
    }
    const setInputState = (inputStateValue, inputId) => {
        AdminPartnerClient.list_search(inputStateValue).then((response) => {
            userData.length = 0
            setUserData(userData.concat(response.data))
        }).catch(error => alert(JSON.stringify(error.error)));
    }
    const onChangeItem = (selectedItemValue, inputId) => {
        console.log(selectedItemValue, inputId)

        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    };
    return (
        <div className={classes.root}>
            <Grid direction="row" >
                <Grid xs={12}>
                    <HeaderMenu />
                </Grid>

            </Grid>


            <Grid container direction="row" justify="center" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={6} style={{ textAlign: "left" }}>
                    <Typography style={{ fontSize: 26, lineHeight: "30px", fontWeight: 'bold', color: "#4D4F5C" }}>All {type}</Typography>
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

            <Grid container direction="row" alignItems="center" style={{ padding: 20, paddingBottom: 0 }}>
                <Grid item xs={12} className={classes.bgGray}>
                    <Grid container direction="row" alignItems="center" style={{}}>
                        <Grid item xs={3} >
                            <CustomInput id="first_name" variant="outlined" style={{ backgroundColor: "#fff" }} placeholder="Org Name" parentcall={setInputState} value={userData.first_name} />
                        </Grid>
                        <Grid item xs={1} ></Grid>
                        <Grid item xs={2} >
                            <CustomSelect id="title" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} />
                        </Grid>
                        <Grid item xs={1} ></Grid>
                        <Grid item xs={2} >
                            <CustomSelect id="title" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} />
                        </Grid>
                        <Grid item xs={1} ></Grid>
                        <Grid item xs={2} >
                            <CustomSelect id="title" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <Grid direction="row" style={{ padding: 20 }}>
                <ThemeProvider theme={theme}>

                    <Grid xs={12} >
                        {/* {loading && <Loader />} */}
                        <MUIDataTable
                            title={"Partner List"}
                            data={userData && userData}
                            columns={columns}
                            options={options}
                        />
                        {/* <MaterialTable
                        title=""
                        columns={[
                            { title: 'Name', field: 'attributes.first_name' },
                            {
                                title: 'Status',
                                field: 'status',
                                render: rowData => <Button size="small" onClick={() => {
                                    dispatch({ type: GLOBAL_STEPPER_DATA, payload: { partner_profile: rowData.id } });
                                    history.push(createTypeRoute)
                                }}
                                    variant="outlined"><b>View</b></Button>
                            },
                        ]}
                        data={userData}
                        options={{
                            toolbar: false,
                            search: false
                        }}
                    /> */}
                    </Grid>
                </ThemeProvider>
            </Grid>
        </div>
    )
}

export default PartnerList
