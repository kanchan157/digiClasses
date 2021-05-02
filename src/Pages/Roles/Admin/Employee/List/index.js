import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import DataService from "../../../../../Service";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import HeaderMenu from "../../../../../Components/HeaderMenu";
import { useHistory } from "react-router";
import { AddCircleOutlined } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Loader from "../../../../../Components/Loader";
import { useParams } from "react-router-dom";

export default function EmployeeList() {
  const history = useHistory();

  const createOrganisationListLayout = {
    width: "90%",
    margin: "0 auto",
  };

  const theme = createMuiTheme({
    overrides: {
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
        },
      },
    },
  });

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    //dispatch action store into reducer
    DataService.getData({ organisation_id: id }, "employees")
      .then((response) => {
        let listData = response["employees"];
        setApiData(listData);
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
        display: false,
      },
    },
    {
      name: "Actions",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              variant="outlined"
              color="#F1ECED"
              size="small"
              style={{ textTransform: "none" }}
              onClick={() => {
                history.push(`/admin/organisation/${id}/employee/${tableMeta.rowData[1]}/edit`);
                console.log(tableMeta.rowData[1], 'rowww');
              }}
            >
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

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Typography
            style={{
              fontSize: 26,
              lineHeight: "30px",
              fontWeight: "bold",
              color: "#4D4F5C",
            }}
          >
            All Employees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push(`/admin/organisation/${id}/employee/create`);
            }}
            style={{ borderRadius: 50, textTransform: "none" }}
          >
            <AddCircleOutlined style={{ marginRight: 10, fontSize: 15 }} />
            Create Employee
          </Button>
        </Grid>
      </Grid>
      <div style={createOrganisationListLayout}>
        <ThemeProvider theme={theme}>
          <Grid xs={12} sm={8}>
            {loading && <Loader />}
            <MUIDataTable
              title={"Employee List"}
              data={apiData && apiData}
              columns={columns}
              options={options}
            />
          </Grid>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}
