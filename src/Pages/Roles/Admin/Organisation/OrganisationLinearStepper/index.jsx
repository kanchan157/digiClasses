import React, { useState } from "react";
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
import {
  UpdateOrganisationDetails,
  SetOrganisationDetailsError,
} from "../Create/OrganisationDetails/OrganisationDetailsActions";
import {
  UpdateOrganisationProfile,
  UpdateOrganisationIdProfile,
  SetOrganisationProfileError,
} from "../Create/Profile/OrganisationProfileActions";
import {
  UpdateOrganisationContact,
  UpdateOrganisationIdContact,
  SetOrganisationContactError
} from "../Create/Contact/OrganisationContactActions";
import {
  UpdateOrganisationPreContract,
  UpdateOrganisationIdPreContract,
} from "../Create/PreContract/OrganisationPreContractActions";
import {
  UpdateOrganisationContract,
  UpdateOrganisationIdContract,
  SetOrganisationContractError,
} from "../Create/Contract/OrganisationContractActions";
import {
  UpdateOrganisationActivity,
  UpdateOrganisationIdActivity,
  SetOrganisationActivityError,
} from "../Create/Activity/OrganisationActivityActions";
import {
  UpdateOrganisationGeneral,
  UpdateOrganisationIdGeneral,
} from "../Create/General/OrganisationGeneralActions";
import { useSelector, useDispatch } from "react-redux";
import DataService from "../../../../../Service";
import { ObjectToFormdata } from "../../../../../Common/Utils/common_utils";
import Loader from "../../../../../Components/Loader";
import Snackbar from "../../../../../Components/Snackbar";
import { showSnackbar } from "../../../../../Components/Snackbar/SnackbarActions";

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

  function getSteps() {
    return [
      "Organisation Details",
      "Profile",
      "Contact",
      "Pre-Contact",
      "Contract",
      "Activity",
      "General",
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

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <OrganisationDetails />;
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
      }).catch((err) => {
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
        individual_type: false,
        internal_status: false,
        territory: false,
        industry_sector_list_id: false,
        type_of_organisation: false,
        type_of_service: false
      };
      if (
        !OrganisationDetail.data.organisation_name ||
        !OrganisationDetail.data.organisation_name.length
      ) {
        errors.organisation_name = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.individual_type ||
        !OrganisationDetail.data.individual_type.length
      ) {
        errors.individual_type = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.internal_status ||
        !OrganisationDetail.data.internal_status.length
      ) {
        errors.internal_status = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.territory ||
        !OrganisationDetail.data.territory.length
      ) {
        errors.territory = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.type_of_organisation ||
        !OrganisationDetail.data.type_of_organisation.length
      ) {
        errors.type_of_organisation = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.type_of_service ||
        !OrganisationDetail.data.type_of_service.length
      ) {
        errors.type_of_service = true;
        valid = false;
      }
      if (
        !OrganisationDetail.data.industry_sector_list_id ||
        typeof(OrganisationDetail.data.industry_sector_list_id) !== "number"
        ) {
        errors.industry_sector_list_id = true;
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
      };
      if (
        !OrganisationContact.data.primary_email ||
        !OrganisationContact.data.primary_email.length
      ) {
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
        priority: false,
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
        !OrganisationActivity.data.priority ||
        !OrganisationActivity.data.priority.length
      ) {
        errors.priority = true;
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
