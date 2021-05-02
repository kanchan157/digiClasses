import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import OrganisationDetails from "../Create/OrganisationDetails";
import Profile from "../Create/Profile";
import Contact from "../Create/Contact";
import PreContract from "../Create/PreContract";
import Contract from "../Create/Contract";
import Activity from "../Create/Activity";
import General from "../Create/General";
import OrganisationBusinessDevelopment from "../Create/OrganisationBusinessDevelopment";
import { ValidateEmail } from "../../../../../Common/Utils/common_utils";
import {
  useParams
} from "react-router-dom";

// import { UpdateOrganisationDetailsSectionId } from "../Create/OrganisationDetails/OrganisationDetailsActions"
// import { SetOrganisationActivitySectionAndOrgIds } from "../Create/Activity/OrganisationActivityActions";
// import { SetContactSectionAndOrgIds } from "../Create/Contact/OrganisationContactActions";
// import { SetOrganisationContractSectionAndOrgIds } from "../Create/Contract/OrganisationContractActions";
// import { SetGeneralSectionAndOrgIds } from "../Create/General/OrganisationGeneralActions";
// import { SetPreContractSectionAndOrgIds } from "../Create/PreContract/OrganisationPreContractActions";
// import { SetProfileSectionAndOrgIds } from "../Create/Profile/OrganisationProfileActions";

import {
  UpdateOrganisationDetails,
  SetOrganisationDetailsError,
  ResetOrganisationDetails,
  UpdateOrganisationDetailsSectionId,
  SetOrganisationDetails
} from "../Create/OrganisationDetails/OrganisationDetailsActions";
import {
  UpdateOrganisationProfile,
  UpdateOrganisationIdProfile,
  SetOrganisationProfileError,
  SetProfileSectionAndOrgIds,
  SetOrganisationProfile
} from "../Create/Profile/OrganisationProfileActions";
import {
  UpdateOrganisationContact,
  UpdateOrganisationIdContact,
  SetOrganisationContactError,
  SetContactSectionAndOrgIds,
  SetOrganisationContact
} from "../Create/Contact/OrganisationContactActions";
import {
  UpdateOrganisationPreContract,
  UpdateOrganisationIdPreContract,
  SetPreContractSectionAndOrgIds,
  SetOrganisationPreContract
} from "../Create/PreContract/OrganisationPreContractActions";
import {
  UpdateOrganisationContract,
  UpdateOrganisationIdContract,
  SetOrganisationContractError,
  SetOrganisationContractSectionAndOrgIds,
  SetOrganisationContract
} from "../Create/Contract/OrganisationContractActions";
import {
  UpdateOrganisationActivity,
  UpdateOrganisationIdActivity,
  SetOrganisationActivityError,
  SetOrganisationActivitySectionAndOrgIds,
  SetOrganisationActivity
} from "../Create/Activity/OrganisationActivityActions";
import {
  UpdateOrganisationGeneral,
  UpdateOrganisationIdGeneral,
  SetGeneralSectionAndOrgIds,
  SetOrganisationGeneral
} from "../Create/General/OrganisationGeneralActions";
import {
  UpdateOrganisationBusinessDev,
  UpdateOrganisationIdBusinessDev,
  SetOrganisationBusinessDevSectionAndOrgIds,
  SetOrganisationBusinessDev
} from "../Create/OrganisationBusinessDevelopment/OrganisationBusinessDevelopmentActions";

import { useSelector, useDispatch } from "react-redux";
import DataService from "../../../../../Service";
import { ObjectToFormdata } from "../../../../../Common/Utils/common_utils";
import Loader from "../../../../../Components/Loader";
import Snackbar from "../../../../../Components/Snackbar";
import { showSnackbar } from "../../../../../Components/Snackbar/SnackbarActions";
import{ SET_ORGANISATION_DROPDOWN_VALUES } from "../../../../../Redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepperButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "50px",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiStepper: {
      root: {
        padding: "0px",
      },
    },
    MuiStep: {
      root: {
        width: "200px",
        border: "1px solid #3b86ff",
        padding: "10px",
        margin: "2px",
      },
      completed: {
        backgroundColor: "#3b86ff",
      },
      active: {
        backgroundColor: "#3b86ff",
      },
    },
    MuiStepLabel: {
      label: {
        color: "#3b86ff",
        fontWeight: "normal",
        fontSize: "10px",
      },
      active: {
        color: "white !important",
      },
      completed: {
        color: "white !important",
      },
    },
    MuiStepIcon: {
      root: {
        color: "#3b86ff",
      },
      completed: {
        color: "white !important",
      },
      active: {
        color: "white !important",
      },
      text: {
        fill: "white",
      },
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: "#3b86ff",
      },
    },
  },
});

export default function OrganisationLinearStepper(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    DataService.getData({}, "all_organisation_dropdowns")
    .then((response) => {
      dispatch({ type: SET_ORGANISATION_DROPDOWN_VALUES, payload: response})
      !id && setLoading(false);
    })
    .catch((err) => {});

    if(id){
    setLoading(true);
    DataService.getDirectData(`/organisations/${id}`)
    .then((response) => {
      dispatch(UpdateOrganisationDetailsSectionId(id));
      dispatch(SetOrganisationDetails(response.data));
      dispatch(SetContactSectionAndOrgIds({sectionId: response.organisation_contact_info_id, organisationId: id}));
      dispatch(SetProfileSectionAndOrgIds({sectionId: response.organisation_profile_id, organisationId: id}));
      dispatch(SetGeneralSectionAndOrgIds({sectionId: response.organisation_general_detail_id, organisationId: id}));
      dispatch(SetPreContractSectionAndOrgIds({sectionId: response.organisation_pre_contract_id, organisationId: id}));
      dispatch(SetOrganisationContractSectionAndOrgIds({sectionId: response.organisation_contract_phase_id, organisationId: id}));
      dispatch(SetOrganisationActivitySectionAndOrgIds({sectionId: response.organisation_activity_field_id, organisationId: id}));
      dispatch(SetOrganisationBusinessDevSectionAndOrgIds({sectionId: response.organisation_business_development_id}));

      DataService.getDirectData(`/organisation_profiles/${response.organisation_profile_id}`).then((res) => {
        dispatch(SetOrganisationProfile(res.data));
      }).catch(() => {});

      DataService.getDirectData(`/organisation_contact_infos/${response.organisation_contact_info_id}`).then((res) => {
        dispatch(SetOrganisationContact(res.data));
      }).catch(() => {});

      DataService.getDirectData(`/organisation_pre_contracts/${response.organisation_pre_contract_id}`).then((res) => {
        dispatch(SetOrganisationPreContract(res.data));
      }).catch(() => {});

      DataService.getDirectData(`/organisation_contract_phases/${response.organisation_contract_phase_id}`).then((res) => {
        dispatch(SetOrganisationContract(res.data));
      }).catch(() => {});

      DataService.getDirectData(`/organisation_activity_fields/${response.organisation_activity_field_id}`).then((res) => {
        dispatch(SetOrganisationActivity(res.data));
      }).catch(() => {});

      DataService.getDirectData(`/organisation_general_details/${response.organisation_general_detail_id}`).then((res) => {
        dispatch(SetOrganisationGeneral(res.data));
      }).catch(() => {});

      DataService.getDirectData(`/organisation_business_developments/${response.organisation_business_development_id}`).then((res) => {
        dispatch(SetOrganisationBusinessDev(res.data));
      }).catch(() => {});

      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
  }}, []);

  function getSteps() {
    return [
      "Organisation Details",
      "Profile",
      "Contact",
      "Pre-Contact",
      "Contract",
      "Activity",
      "General",
      "Organisation Business Development"
      // "General",
//       "Contact Area",
// "Employee CUrrent Work Information And History",
// "Training and Development",
// "Coaching Capacity",
// "Mentoring Capacity",
// "Coaching Profile",
// "Mentor Profile",
// "Facilitation",
// "Assessment",
// "GDPR"
    ];
  }

  const OrganisationDetail = useSelector(
    (state) => state.organisationDetailsReducer
  );

  const OrganisationProfile = useSelector(
    (state) => state.organisationProfileReducer
  );

  const OrganisationContact = useSelector(
    (state) => state.organisationContactReducer
  );

  const OrganisationPreContract = useSelector(
    (state) => state.organisationPreContractReducer
  );

  const OrganisationContract = useSelector(
    (state) => state.organisationContractReducer
  );

  const OrganisationActivity = useSelector(
    (state) => state.organisationActivityReducer
  );

  const OrganisationGeneral = useSelector(
    (state) => state.organisationGeneralReducer
  );
  const organisationBusinessDevelopment = useSelector(
    (state) => state.organisationBusinessDevelopmentReducer
  );

  const [orgUpload, setOrgUpload] = React.useState([]);
  function getStepContent(step) {
    switch (step) {
      case 0:
        return id ? OrganisationDetail.data.organisation_name?.length && <OrganisationDetails orgUpload={orgUpload} setOrgUpload={setOrgUpload} /> : <OrganisationDetails orgUpload={orgUpload} setOrgUpload={setOrgUpload} />;
      case 1:
        return <Profile />;
      case 2:
        return <Contact />;
      case 3:
        return <PreContract />;
      case 4:
        return <Contract />;
      case 5:
        return <Activity />;
      case 6:
        return <General />;
      case 7:
        return <OrganisationBusinessDevelopment />;
      default:
        return "Not available";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleSubmit = (data, apiVariable, dispatchVariable, sectionId) => {
    if (sectionId !== null) {
      setLoading(true);
      DataService.updateData(data, sectionId, apiVariable).then((res) => {
        dispatch(dispatchVariable(res.data));
        setLoading(false);
        dispatch(showSnackbar("success",["Success!"]));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        if(activeStep === steps.length - 1){
          dispatch(ResetOrganisationDetails())
        }
      }).catch((err) => {
        dispatch(ResetOrganisationDetails());
        dispatch(showSnackbar("error",err.errors));
      });
    } else {
      // DataService.createData(ObjectToFormdata(data), apiVariable)
      setLoading(true);
      DataService.createData(data, apiVariable)
        .then((res) => {
          setLoading(false);
          dispatch(showSnackbar("success",["Success!"]));
          if (dispatchVariable === UpdateOrganisationDetails) {
            console.log("then block");
            dispatch(UpdateOrganisationIdProfile(res.data));
            dispatch(UpdateOrganisationIdContact(res.data));
            dispatch(UpdateOrganisationIdPreContract(res.data));
            dispatch(UpdateOrganisationIdContract(res.data));
            dispatch(UpdateOrganisationIdGeneral(res.data));
            dispatch(UpdateOrganisationIdActivity(res.data));
            dispatch(dispatchVariable(res.data));
          } else {
            dispatch(dispatchVariable(res.data));
          }
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch((err) => {
          dispatch(ResetOrganisationDetails());
          setLoading(false);
          dispatch(showSnackbar("error",err.errors));
        });
    }
  };

  const handleNext = (submitData, submitUrl) => {
    if (activeStep === 0) {
      let valid = true;
      let errors = {
        organisation_name: false,
        individual_type_id: false,
        internal_status_id: false,
        territory_id: false,
        industry_sector_list_id: false,
        type_of_organisation_id: false,
        type_of_service_id: false,
        level_structure: false
      };
      if (
        !OrganisationDetail.data.organisation_name ||
        !OrganisationDetail.data.organisation_name.length
      ) {
        errors.organisation_name = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.individual_type_id ||
        !OrganisationDetail.data.individual_type_id.length
      ) {
        errors.individual_type_id = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.internal_status_id ||
        typeof(OrganisationDetail.data.internal_status_id) !== "number"
      ) {
        errors.internal_status_id = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.territory_id ||
        typeof(OrganisationDetail.data.territory_id) !== "number"
      ) {
        errors.territory_id = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.type_of_organisation_id ||
        typeof(OrganisationDetail.data.type_of_organisation_id) !== "number"
      ) {
        errors.type_of_organisation_id = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.type_of_service_id ||
        typeof(OrganisationDetail.data.type_of_service_id) !== "number"
      ) {
        errors.type_of_service_id = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.industry_sector_list_id ||
        typeof(OrganisationDetail.data.industry_sector_list_id) !== "number"
        ) {
        errors.industry_sector_list_id = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.level_structure ||
        !OrganisationDetail.data.level_structure.length
      ) {
        errors.level_structure = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetOrganisationDetailsError(errors));
        return;
      }
      handleSubmit(
        OrganisationDetail.data,
        "organisation_details",
        UpdateOrganisationDetails,
        OrganisationDetail.section_id
      );
    } else if (activeStep === 1) {
      let valid = true;
      let errors = {
        account_director: false,
        account_contact: false,
      };
      if (
        !OrganisationProfile.data.account_director ||
        !OrganisationProfile.data.account_director.length
      ) {
        errors.account_director = true;
        valid = false;
      }
      if (
        !OrganisationProfile.data.account_contact ||
        !OrganisationProfile.data.account_contact
      ) {
        errors.account_contact = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetOrganisationProfileError(errors));
        return;
      }
      handleSubmit(
        OrganisationProfile.data,
        "organisation_profile",
        UpdateOrganisationProfile,
        OrganisationProfile.section_id
      );
    } else if (activeStep === 2) {
      let valid = true;
      let errors = {
        primary_email: false,
        address_line1: false,
        city: false,
        country_list_id: false,
        county: false,
        zipcode: false,
        business_telephone: false
      };
      if(ValidateEmail(OrganisationContact.data.primary_email)){
        errors.primary_email = true;
        valid = false;
      }
      if (
        !OrganisationContact.data.branches[0].address_line1 ||
        !OrganisationContact.data.branches[0].address_line1.length
      ) {
        errors.address_line1 = true;
        valid = false;
      }
      if (
        !OrganisationContact.data.branches[0].city ||
        !OrganisationContact.data.branches[0].city.length
      ) {
        errors.city = true;
        valid = false;
      }
      if (
        !OrganisationContact.data.branches[0].country_list_id ||
        typeof(OrganisationContact.data.branches[0].country_list_id) !== "number"
      ) {
        errors.country_list_id = true;
        valid = false;
      }
      if (
        !OrganisationContact.data.branches[0].county ||
        !OrganisationContact.data.branches[0].county.length
      ) {
        errors.county = true;
        valid = false;
      }
      if (
        !OrganisationContact.data.branches[0].zipcode ||
        !OrganisationContact.data.branches[0].zipcode.length
      ) {
        errors.zipcode = true;
        valid = false;
      }
      if (!OrganisationContact.data.branches[0].business_telephone || !OrganisationContact.data.branches[0].business_telephone.length) {
        errors.business_telephone = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetOrganisationContactError(errors));
        return;
      }
      handleSubmit(
        OrganisationContact.data,
        "organisation_contact",
        UpdateOrganisationContact,
        OrganisationContact.section_id
      );
    } else if (activeStep === 3) {
      handleSubmit(
        OrganisationPreContract.data,
        "organisation_pre_contract",
        UpdateOrganisationPreContract,
        OrganisationPreContract.section_id
      );
    } else if (activeStep === 4) {
      let valid = true;
      let errors = {
        start_date_with_client: false,
        date_account_closed: false,
      };
      if (
        !OrganisationContract.data.start_date_with_client
      ) {
        errors.start_date_with_client = true;
        valid = false;
      }
      if (
        !OrganisationContract.data.date_account_closed
      ) {
        errors.date_account_closed = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetOrganisationContractError(errors));
        return;
      }
      handleSubmit(
        OrganisationContract.data,
        "organisation_contract",
        UpdateOrganisationContract,
        OrganisationContract.section_id
      );
    } else if (activeStep === 5) {
      let valid = true;
      let errors = {
        review_date: false,
        meeting_date: false,
        who: false,
        priority_id: false,
      };
      if (
        !OrganisationActivity.data.review_date
      ) {
        errors.review_date = true;
        valid = false;
      }
      if (
        !OrganisationActivity.data.meeting_date
      ) {
        errors.meeting_date = true;
        valid = false;
      }
      if (
        !OrganisationActivity.data.who ||
        !OrganisationActivity.data.who.length
      ) {
        errors.who = true;
        valid = false;
      }
      if (
        !OrganisationActivity.data.priority_id ||
        !OrganisationActivity.data.priority_id.length
      ) {
        errors.priority_id = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetOrganisationActivityError(errors));
        return;
      }
      handleSubmit(
        OrganisationActivity.data,
        "organisation_activity",
        UpdateOrganisationActivity,
        OrganisationActivity.section_id
      );
    } else if (activeStep === 6) {
      handleSubmit(
        OrganisationGeneral.data,
        "organisation_general",
        UpdateOrganisationGeneral,
        OrganisationGeneral.section_id
      );
    }
    else if (activeStep === 7) {
      handleSubmit(
        organisationBusinessDevelopment.data,
        "organisation_business_developments",
        UpdateOrganisationBusinessDev,
        organisationBusinessDevelopment.section_id
      );
    } 

    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleTabChange = (index) => {
    setActiveStep(index);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {loading && <Loader/>}
        {/* <Snackbar/> */}
        <Stepper activeStep={activeStep} connector={false}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step
                onClick={() => handleTabChange(index)}
                key={label}
                {...stepProps}
                style={{
                  backgroundColor: activeStep === index ? "#3b86ff" : "",
                  cursor: "pointer",
                }}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                {/* All steps completed - you&apos;re finished */}
                Some message to be displayed here
              </Typography>
              {/* <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button> */}
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div className={classes.stepperButtons}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1
                    ? "Finish"
                    : "Save & Proceed"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
