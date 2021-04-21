import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Link,
  makeStyles,
  MenuItem,
  Menu,
  MenuList,
  Select,
  TextField,
  Toolbar,
  IconButton,
  Card,
  CardContent,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  InputLabel,
} from "@material-ui/core";
import {
  useParams
} from "react-router-dom";
import MUIDataTable from "mui-datatables";
import DataService from "../../../../../Service";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import HeaderMenu from "../../../../../Components/HeaderMenu";
import { useHistory } from "react-router";
import { AddCircleOutlined } from "@material-ui/icons";
import EditIcon from '@material-ui/icons/Edit';
import Typography from "@material-ui/core/Typography";
import Loader from "../../../../../Components/Loader";
import Divider from "@material-ui/core/Divider";
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function EmployeeList() {
  const history = useHistory();

  const createEmployeeListLayout = {
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
  const [imageUrl, setImageUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    DataService.getData({id}, "employee")
      .then((response) => {
        let listData = response.data;
        let imageUrl = listData.picture;
        setApiData(listData);
        setImageUrl(imageUrl);
        setLoading(false);
      })
      .catch((err) => {});
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
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
                history.push("/admin/organisation/create");
                console.log(tableMeta.rowData[1]);
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
  console.log(`imageUrl.url`, imageUrl.url)
  return (
    <React.Fragment>
      <Grid direction="row">
        <Grid xs={12} style={{ textAlign: "left" }}>
          <HeaderMenu />
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid
          item
          xs={3}
          style={{ backgroundColor: "#E8E8E8", height: "750px" }}
        >
          <div style={{padding:'30px'}}> 
           {/* <img alt={imageUrl.url} src={imageUrl.url} /> */}
          {/* <AccountCircleIcon /> */}
          <ListItemIcon style={{ minWidth: 0,color:'red' }}>
                  <AccountCircleIcon />
                </ListItemIcon>
          <span style={{ fontSize: "18px" }}>
            {apiData.organisation_name}</span> <span  style={{ fontSize: "12px" }}> ID: {apiData.org_id}
          </span></div>
        

          <Grid container direction="row">
            <Grid item xs={3}>
              <Typography style={{ paddingTop: "10px" }}>Admin</Typography>
              <Typography style={{ paddingTop: "10px" }}>Contact</Typography>
              <Typography style={{ paddingTop: "10px" }}>E-mail </Typography>
              <Typography style={{ paddingTop: "10px" }}>Address </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography style={{ paddingTop: "10px" }}>:</Typography>
              <Typography style={{ paddingTop: "10px" }}>:</Typography>
              <Typography style={{ paddingTop: "10px" }}>:</Typography>
              <Typography style={{ paddingTop: "10px" }}>:</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography style={{ paddingTop: "10px" }}>
                {apiData.admin || "null"}
              </Typography>
              <Typography style={{ paddingTop: "10px" }}>
                {" "}
                {apiData.contact || "null"}
              </Typography>
              <Typography style={{ paddingTop: "10px" }}>
                {apiData.email || "null"}
              </Typography>
              <Typography style={{ paddingTop: "10px",paddingBottom:'10px' }}>
                {apiData.address_line1}, {apiData.address_line2} {apiData.city},{" "}
                {apiData.country}
              </Typography>

            </Grid>
          </Grid>

          <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    history.push(`/admin/organisation/${id}/edit`);
                  }}
                  style={{ borderRadius: 50, textTransform: "none",marginLeft:'110px', marginBottom:'20px' }}
                >
                  <EditIcon
                    style={{ marginRight: 10, fontSize: 15 }}
                  />
                  Edit
                </Button>
            <Divider  />
          <List style={{backgroundColor:'#F8F8F8',paddingTop:'10px'}} component="nav" aria-label="main mailbox folders">
            {[
              {
                name: "Employee",
                // route: "/admin/organisation/employee/create",
                route:`/admin/organisation/${id}/employee/list`,
                listRoute: `/admin/organisation/${id}/employee/list`,
              },
            ].map((e) => (
              <ListItem style={{ paddingBottom: 0, paddingTop: 0 }}>
                <ListItemIcon style={{ minWidth: 0,color:'blue' }}>
                  <PersonIcon />
                </ListItemIcon>
                <Link
                  onClick={() => {
                    history.push(e.listRoute);
                  }}
                >
                  <InputLabel style={{ marginLeft: 20, minWidth: 100 }}>
                    <h4>{e.name}</h4>
                  </InputLabel>
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    history.push(`/admin/organisation/${id}/employee/create`);
                  }}
                  style={{ borderRadius: 50, textTransform: "none" }}
                >
                  <AddCircleOutlined
                    style={{ marginRight: 10, fontSize: 15 }}
                  />
                  Create
                </Button>
              </ListItem>
            ))}
          </List>
            <Divider />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </React.Fragment>
  );
}
