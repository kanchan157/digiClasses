import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import ContactAreaSection from "../Create/ContactArea";
// import Profile from "../Create/Profile";
// import Contact from "../Create/Contact";
// import PreContract from "../Create/PreContract";
// import Contract from "../Create/Contract";
// import Activity from "../Create/Activity";
// import General from "../Create/General";
import {
  UpdateContactArea,
  SetContactAreaError,
} from "../Create/ContactArea/ContactAreaActions";
// import {
//   UpdateOrganisationProfile,
//   UpdateOrganisationIdProfile,
//   SetOrganisationProfileError,
// } from "../Create/Profile/OrganisationProfileActions";
// import {
//   UpdateOrganisationContact,
//   UpdateOrganisationIdContact,
//   SetOrganisationContactError
// } from "../Create/Contact/OrganisationContactActions";
// import {
//   UpdateOrganisationPreContract,
//   UpdateOrganisationIdPreContract,
// } from "../Create/PreContract/OrganisationPreContractActions";
// import {
//   UpdateOrganisationContract,
//   UpdateOrganisationIdContract,
//   SetOrganisationContractError,
// } from "../Create/Contract/OrganisationContractActions";
// import {
//   UpdateOrganisationActivity,
//   UpdateOrganisationIdActivity,
//   SetOrganisationActivityError,
// } from "../Create/Activity/OrganisationActivityActions";
// import {
//   UpdateOrganisationGeneral,
//   UpdateOrganisationIdGeneral,
// } from "../Create/General/OrganisationGeneralActions";
import { useSelector, useDispatch } from "react-redux";
import DataService from "../../../../../Service";
import Loader from "../../../../../Components/Loader";
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

export default function EmployeeLinearStepper(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  function getSteps() {
    return [
"Contact Area",
"Employee Current Work Information And History",
"Training and Development",
"Coaching Capacity",
"Mentoring Capacity",
"Coaching Profile",
"Mentor Profile",
"Facilitation",
"Assessment",
"GDPR"
    ];
  }

  const ContactArea = useSelector(
    (state) => state.contactAreaReducer
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
        return <ContactAreaSection />;
      case 1:
        return <ContactAreaSection />;
      case 2:
        return <ContactAreaSection />;
      case 3:
        return <ContactAreaSection />;
      case 4:
        return <ContactAreaSection />;
      case 5:
        return <ContactAreaSection />;
      case 6:
        return <ContactAreaSection />;
        case 7:
          return <ContactAreaSection />;
          case 8:
        return <ContactAreaSection />;
        case 9:
        return <ContactAreaSection />;
        case 10:
        return <ContactAreaSection />;
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
          if (dispatchVariable === UpdateContactArea) {
            console.log("then block");
            // dispatch(UpdateOrganisationIdProfile(res.data));
            // dispatch(UpdateOrganisationIdContact(res.data));
            // dispatch(UpdateOrganisationIdPreContract(res.data));
            // dispatch(UpdateOrganisationIdContract(res.data));
            // dispatch(UpdateOrganisationIdGeneral(res.data));
            // dispatch(UpdateOrganisationIdActivity(res.data));
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
        title: false,
        first_name: false,
        middle_name: false,
        last_name: false,
        primary_email: false,
        authorisation_to_access_the_service: false,
        authorisation_provided_by: false,
        nationality_id: false,
        bame: false,
        diversity_and_inclusion: false,
        languages_list: false,
        mobile: false,
        phone: false
      };
      if (
        !ContactArea.data.title ||
        !ContactArea.data.title.length
      ) {
        errors.title = true;
        valid = false;
      }
      if (
        !ContactArea.data.first_name ||
        !ContactArea.data.first_name.length
      ) {
        errors.first_name = true;
        valid = false;
      }
      if (
        !ContactArea.data.middle_name ||
        !ContactArea.data.middle_name.length
      ) {
        errors.middle_name = true;
        valid = false;
      }
      if (
        !ContactArea.data.last_name ||
        !ContactArea.data.last_name.length
      ) {
        errors.last_name = true;
        valid = false;
      }
      if (
        !ContactArea.data.primary_email ||
        !ContactArea.data.primary_email.length
      ) {
        errors.primary_email = true;
        valid = false;
      }
      if (
        !ContactArea.data.authorisation_to_access_the_service ||
        !ContactArea.data.authorisation_to_access_the_service.length
      ) {
        errors.authorisation_to_access_the_service = true;
        valid = false;
      }
      if (
        !ContactArea.data.authorisation_provided_by ||
        !ContactArea.data.authorisation_provided_by.length
      ) {
        errors.authorisation_provided_by = true;
        valid = false;
      }
      if (
        !ContactArea.data.bame ||
        !ContactArea.data.bame.length
      ) {
        errors.bame = true;
        valid = false;
      }
      if (
        !ContactArea.data.diversity_and_inclusion ||
        !ContactArea.data.diversity_and_inclusion.length
      ) {
        errors.diversity_and_inclusion = true;
        valid = false;
      }
      if (
        !ContactArea.data.languages_list ||
        !ContactArea.data.languages_list.length
      ) {
        errors.languages_list = true;
        valid = false;
      }
      
      if (
        !ContactArea.data.phone ||
        !ContactArea.data.phone.length
      ) {
        errors.phone = true;
        valid = false;
      }
      if (
        !ContactArea.data.nationality_id ||
        typeof(ContactArea.data.nationality_id) !== "number"
        ) {
        errors.nationality_id = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetContactAreaError(errors));
        return;
      }
      handleSubmit(
        ContactArea.data,
        "employee_contact_area",
        UpdateContactArea,
        ContactArea.section_id
      );
    } 
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                Some message to be displayed here
              </Typography>
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
