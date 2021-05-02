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
import { useDispatch } from "react-redux";

// Reset organisation stepper data
import { ResetOrganisationDetails } from "../../Organisation/Create/OrganisationDetails/OrganisationDetailsActions";
import { ResetActivity } from "../../Organisation/Create/Activity/OrganisationActivityActions";
import { ResetContact } from "../../Organisation/Create/Contact/OrganisationContactActions";
import { ResetContract } from "../../Organisation/Create/Contract/OrganisationContractActions";
import { ResetGeneral } from "../../Organisation/Create/General/OrganisationGeneralActions";
import { ResetBusinessDevelopment } from "../../Organisation/Create/OrganisationBusinessDevelopment/OrganisationBusinessDevelopmentActions";
import { ResetPreContract } from "../../Organisation/Create/PreContract/OrganisationPreContractActions";
import { ResetProfile } from "../../Organisation/Create/Profile/OrganisationProfileActions";

// Reset employee stepper data
import { ResetContactArea } from "../Create/ContactArea/ContactAreaActions";
import { ResetWorkInformation } from "../Create/WorkInformation/WorkInformationActions";
import { ResetTrainingAndDevelopment } from "../Create/TrainingAndDevelopment/TrainingAndDevelopmentActions";
import { ResetCoachingCapacity } from "../Create/CoachingCapacity/CoachingCapatityActions";
import { ResetMentoringCapacity } from "../Create/MentoringCapacity/MentoringCapatityActions";
import { ResetCoachingProfile } from "../Create/CoachingProfile/CoachingProfileActions";
import { ResetMentorProfile } from "../Create/MentorProfile/MentorProfileActions";
import { ResetFacilitation } from "../Create/Facilitation/FacilitationActions";
import { ResetAccessment } from "../Create/Accessment/AccessmentActions";
import { ResetGdpr } from "../Create/Gdpr/GdprActions";

import {
  UpdateOrganisationDetails,
  SetOrganisationDetailsError,
  UpdateOrganisationDetailsSectionId,
  SetOrganisationDetails
} from "../../Organisation/Create/OrganisationDetails/OrganisationDetailsActions";
import {
  UpdateOrganisationProfile,
  UpdateOrganisationIdProfile,
  SetOrganisationProfileError,
  SetProfileSectionAndOrgIds,
  SetOrganisationProfile
} from "../../Organisation/Create/Profile/OrganisationProfileActions";
import {
  UpdateOrganisationContact,
  UpdateOrganisationIdContact,
  SetOrganisationContactError,
  SetContactSectionAndOrgIds
} from "../../Organisation/Create/Contact/OrganisationContactActions";
import {
  UpdateOrganisationPreContract,
  UpdateOrganisationIdPreContract,
  SetPreContractSectionAndOrgIds
} from "../../Organisation/Create/PreContract/OrganisationPreContractActions";
import {
  UpdateOrganisationContract,
  UpdateOrganisationIdContract,
  SetOrganisationContractError,
  SetOrganisationContractSectionAndOrgIds
} from "../../Organisation/Create/Contract/OrganisationContractActions";
import {
  UpdateOrganisationActivity,
  UpdateOrganisationIdActivity,
  SetOrganisationActivityError,
  SetOrganisationActivitySectionAndOrgIds
} from "../../Organisation/Create/Activity/OrganisationActivityActions";
import {
  UpdateOrganisationGeneral,
  UpdateOrganisationIdGeneral,
  SetGeneralSectionAndOrgIds
} from "../../Organisation/Create/General/OrganisationGeneralActions";
import {
  UpdateOrganisationBusinessDev,
  UpdateOrganisationIdBusinessDev,
  SetOrganisationBusinessDevSectionAndOrgIds
} from "../../Organisation/Create/OrganisationBusinessDevelopment/OrganisationBusinessDevelopmentActions";


export default function EmployeeList() {
  const history = useHistory();
  const dispatch = useDispatch();

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
    dispatch(ResetContactArea());
    dispatch(ResetWorkInformation());
    dispatch(ResetTrainingAndDevelopment());
    dispatch(ResetCoachingCapacity());
    dispatch(ResetMentoringCapacity());
    dispatch(ResetCoachingProfile());
    dispatch(ResetMentorProfile());
    dispatch(ResetFacilitation());
    dispatch(ResetAccessment());
    dispatch(ResetGdpr());
    getData();
    setLoading(true);
    // DataService.getDirectData(`/organisations/${id}`)
    // .then((response) => {
    //   dispatch(UpdateOrganisationDetailsSectionId(id));
    //   dispatch(SetOrganisationDetails(response.data));
    //   dispatch(SetContactSectionAndOrgIds({sectionId: response.organisation_contact_info_id, organisationId: id}));
    //   dispatch(SetProfileSectionAndOrgIds({sectionId: response.organisation_profile_id, organisationId: id}));
    //   dispatch(SetGeneralSectionAndOrgIds({sectionId: response.organisation_general_detail_id, organisationId: id}));
    //   dispatch(SetPreContractSectionAndOrgIds({sectionId: response.organisation_pre_contract_id, organisationId: id}));
    //   dispatch(SetOrganisationContractSectionAndOrgIds({sectionId: response.organisation_contract_phase_id, organisationId: id}));
    //   dispatch(SetOrganisationActivitySectionAndOrgIds({sectionId: response.organisation_activity_field_id, organisationId: id}));
    //   dispatch(SetOrganisationBusinessDevSectionAndOrgIds({sectionId: response.organisation_business_development_id}));

    //   DataService.getDirectData(`/organisation_profiles/${response.organisation_profile_id}`).then((res) => {
    //     dispatch(SetOrganisationProfile(res.data));
    //   }).catch(() => {});

    //   DataService.getDirectData(`/organisation_contact_infos/${response.organisation_contact_info_id}`).then((res) => {
    //     dispatch(SetOrganisationProfile(res.data));
    //   }).catch(() => {});

    //   DataService.getDirectData(`/organisation_pre_contracts/${response.organisation_pre_contract_id}`).then((res) => {
    //     dispatch(SetOrganisationProfile(res.data));
    //   }).catch(() => {});

    //   DataService.getDirectData(`/organisation_contract_phases/${response.organisation_contract_phase_id}`).then((res) => {
    //     dispatch(SetOrganisationProfile(res.data));
    //   }).catch(() => {});

    //   DataService.getDirectData(`/organisation_activity_fields/${response.organisation_activity_field_id}`).then((res) => {
    //     dispatch(SetOrganisationProfile(res.data));
    //   }).catch(() => {});

    //   DataService.getDirectData(`/organisation_general_details/${response.organisation_general_detail_id}`).then((res) => {
    //     dispatch(SetOrganisationProfile(res.data));
    //   }).catch(() => {});

    //   DataService.getDirectData(`/organisation_business_developments/${response.organisation_business_development_id}`).then((res) => {
    //     dispatch(SetOrganisationProfile(res.data));
    //   }).catch(() => {});

    //   setLoading(false);
    // })
    // .catch((err) => {});
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
          <div style={ {
  maxWidth: '76%',
  margin: '0 auto',
  height:'40px',
  position:'relative'
}}> 
           {/* <img alt={imageUrl.url} src={imageUrl.url} /> */}
          {/* <AccountCircleIcon /> */}
          <ListItemIcon style={{position:'absolute',left:'-28px' }}>
                  <AccountCircleIcon style={{fontSize:'30px'}} />
                </ListItemIcon>
          <span style={{ fontSize: "18px",position:'absolute',left:'11px', top:'4px' }}>
            {apiData.organisation_name}</span> <span  style={{ fontSize: "12px",position:'absolute',left:'98px',top:'9px' }}> ID: {apiData.org_id}
          </span></div>
        

          <Grid container style={ {
  maxWidth: '90%',
  margin: '0 auto'
}} direction="row">
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
              <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(ResetOrganisationDetails());
                    dispatch(ResetActivity());
                    dispatch(ResetBusinessDevelopment());
                    dispatch(ResetContact());
                    dispatch(ResetContract());
                    dispatch(ResetGeneral());
                    dispatch(ResetPreContract());
                    dispatch(ResetProfile());
                    history.push(`/admin/organisation/${id}/edit`);
                  }}
                  style={{ borderRadius: 50, textTransform: "none", marginBottom:'20px',width: '70px',
                  height: '24px' }}
                >
                  <EditIcon
                    style={{ marginRight: 10, fontSize: 15 }}
                  />
                  Edit
                </Button>
            </Grid>
          </Grid>

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
                  style={{ borderRadius: 50, textTransform: "none",width: '87px',
                  height: '25px', marginLeft:'75px'  }}
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
