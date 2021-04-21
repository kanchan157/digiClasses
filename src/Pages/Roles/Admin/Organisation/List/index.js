import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import DataService from "../../../../../Service";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import HeaderMenu from "../../../../../Components/HeaderMenu";
import { useHistory, use } from 'react-router';
import { AddCircleOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Loader from "../../../../../Components/Loader";
import { useDispatch } from "react-redux";
import { ResetOrganisationDetails } from "../Create/OrganisationDetails/OrganisationDetailsActions";
import { ResetActivity } from "../Create/Activity/OrganisationActivityActions";
import { ResetContact } from "../Create/Contact/OrganisationContactActions";
import { ResetContract } from "../Create/Contract/OrganisationContractActions";
import { ResetGeneral } from "../Create/General/OrganisationGeneralActions";
import { ResetBusinessDevelopment } from "../Create/OrganisationBusinessDevelopment/OrganisationBusinessDevelopmentActions";
import { ResetPreContract } from "../Create/PreContract/OrganisationPreContractActions";
import { ResetProfile } from "../Create/Profile/OrganisationProfileActions";

export default function OrganisationList() {

  const history = useHistory();
  const dispatch = useDispatch();

  const createOrganisationListLayout = {
    width: "90%",
    margin: "0 auto",
    // marginTop: "80px",
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

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    DataService.getData({}, "organisations")
      .then((response) => {
        let listData = response["organisations"];
        setApiData(listData);
        console.log(listData, "ddddd");
        setLoading(false);
      })
      .catch((err) => {});
  };

  const columns = [
    {
      name: "organisation_name",
      label: "Name",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: false,
        display: false
      },
    },
    {
      name: "Actions",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          let id = tableMeta.rowData[1];
          return (
            <Button variant="outlined" color="#F1ECED" size="small" style={{textTransform: 'none'}} onClick={() => {history.push(`/admin/organisation/${id}`);}} >
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
      filename: "organisation_list.csv",
    },
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 30, 40, 50],
    responsive: "scroll",
  };

  return (
    <React.Fragment>
      <Grid direction="row">
        <Grid xs={12} style={{ textAlign: "left" }}>
          <HeaderMenu />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center" style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 80 ,paddingRight: 80 }}>
                <Grid item xs={6} style={{ textAlign: "left" }}>
                    <Typography style={{fontSize:26,lineHeight:"30px",fontWeight:'bold',color:"#4D4F5C"}}>All Organisations</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }}>
                    <Button variant="contained" color="primary"
                        onClick={() => {
                            // dispatch({ type: DELETE_STEPPER_DATA });
                            dispatch(ResetOrganisationDetails());
                            dispatch(ResetActivity());
                            dispatch(ResetBusinessDevelopment());
                            dispatch(ResetContact());
                            dispatch(ResetContract());
                            dispatch(ResetGeneral());
                            dispatch(ResetPreContract());
                            dispatch(ResetProfile());
                            history.push('/admin/organisation/create')
                        }}
                        style={{ borderRadius: 50, textTransform: 'none', }}>
                        <AddCircleOutlined style={{ marginRight: 10, fontSize: 15 }} />Create Organisation
                    </Button>
                </Grid>
            </Grid>
      <div style={createOrganisationListLayout}>
        <ThemeProvider theme={theme}>
          <Grid xs={12} sm={8}>
            {loading && <Loader />}
            <MUIDataTable
              title={"Organisation List"}
              data={apiData && apiData}
              columns={columns}
              options={options}
            />
          </Grid>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
};
