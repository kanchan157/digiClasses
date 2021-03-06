import { Button, createMuiTheme, Grid, makeStyles, TextField } from '@material-ui/core'
import { AccountCircle, ArrowBackIos, ArrowForward, FilterList, Search, Settings } from '@material-ui/icons';
import React, { useState } from 'react'
import CustomInput from '../../Components/CustomInput';
import CustomSelect from '../../Components/CustomSelect';
import AdminPartnerClient from '../../Service/Admin/partner_services';
import { ThemeProvider } from "@material-ui/styles";
import HomeHeaderMenu from './HomeHeaderMenu';
import { useHistory } from 'react-router';
import MaterialTable from 'material-table';


const CoachList = () => {
    const classes = useStyles();
    const [userData, setUserData] = useState([]);
    const history = useHistory();


    const columns = [

        {
            name: "attributes",
            label: "Name",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (rowData: any, tableMeta: any, updateValue: any) => {
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
                customBodyRender: (rowData: any, tableMeta: any, updateValue: any) => {
                    return (
                        <p>Text</p>
                    );
                },
            },
        },
    ];

    const options: any = {
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
            // MUIDataTablePagination: {
            //     tableCellContainer: {
            //         padding: "0px",
            //     },
            //     navContainer: {
            //         backgroundColor: "#f1eded",
            //     },
            // },
            // MUIDataTableHeadCell: {
            //     fixedHeader: {
            //         backgroundColor: "#f1eded",
            //     }
            // }
        },
    });

    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={12} >
                    <HomeHeaderMenu />
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" justify="center" style={{backgroundColor:"#B4B4B440"}} >
                <Grid item xs={11} style={{margin: "25px 0",backgroundColor: "#fff"}}>



                    <Grid container direction="row" alignItems="center" justify="center" className={classes.bgGray}>
                        <Grid item xs={5} >
                            {/* <ArrowBackIos style={{border:'1px solid red',}}/> */}
                            <ArrowBackIos /><span className={classes.titleInternalCoach} >Coach List (External)</span>
                            {/* <h3 style={{ margin: 0 }}>Coach List (External)</h3> */}
                        </Grid>
                        <Grid item xs={7} >
                            <div style={{ float: 'right' }}>
                                <Button
                                    variant="contained"
                                    color="primary"

                                    className={classes.btnComplete}
                                >
                                    Onboard Coach
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"

                                    className={classes.btnComplete}
                                >
                                    Request for assistance/alternative coaches
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Search />}
                                    className={classes.btnSearch}
                                    onClick={() => { history.push('/CoachSearch') }}
                                >
                                    Search Coach
                            </Button>

                            </div>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" justify="center" style={{ padding: 20 }}>
                        <Grid item xs={6} >
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <Search />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Search coach name" />
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={6} >
                            <div style={{ float: 'right' }}>
                                <Button
                                    style={{ marginRight: 20 }}
                                    variant="contained"
                                    color="primary"
                                    startIcon={<FilterList />}
                                    className={classes.btnSearch}
                                >
                                    Filter
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Settings />}
                                    className={classes.btnSearch}
                                >
                                    Customized
                            </Button>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid direction="row" style={{ padding: 20 }}>
                        <ThemeProvider theme={theme}>

                            <Grid xs={12} >
                                {/* {loading && <Loader />} */}
                                {/* <MUIDataTable
                                    title={"Partner List"}
                                    data={userData && userData}
                                    columns={columns}
                                    options={options}
                                /> */}
                                <MaterialTable
                                    title=""
                                    columns={[
                                        { title: 'Name', field: 'attributes.first_name' },
                                        { title: 'Names', field: 'attributes.first_name',hidden:true },

                                    ]}
                                    data={userData}
                                    options={{
                                        toolbar: false,
                                        search: false
                                    }}
                                />
                            </Grid>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default CoachList

const useStyles = makeStyles({
    bgGray: {
        backgroundColor: '#F7F7F7',
        padding: 20
    },
    btnComplete: {
        backgroundColor: '#981B1E',
        textTransform: 'capitalize',
        fontSize: 12,
        marginRight: 20
    },
    btnSearch: {
        backgroundColor: '#077F82',
        textTransform: 'capitalize',
        fontSize: 12,
    },
    titleInternalCoach: {
        verticalAlign: 'super',
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 20
    }

});


