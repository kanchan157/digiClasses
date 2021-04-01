import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import OrganisationDetails from "../../Pages/Roles/Admin/Organisation/Create/OrganisationDetails";
import PreContract from "../../Pages/Roles/Admin/Organisation/Create/PreContract";
// import Profile from "../../Pages/Roles/Admin/Organisation/Create/Profile";
// import Contact from "../../Pages/Roles/Admin/Organisation/Create/Contact";
// import General from "../../Pages/Roles/Admin/Organisation/Create/General";
import { CreateOrganisationDetails } from "../../Pages/Roles/Admin/Organisation/Create/OrganisationDetails/OrganisationDetailsActions";
import { CreateOrganisationProfile } from "../../Pages/Roles/Admin/Organisation/Create/Profile/OrganisationProfileActions";
import { CreateOrganisationContact } from "../../Pages/Roles/Admin/Organisation/Create/Contact/OrganisationContactActions";
import { CreateOrganisationPreContract } from "../../Pages/Roles/Admin/Organisation/Create/PreContract/OrganisationPreContractActions";
import { CreateOrganisationGeneral } from "../../Pages/Roles/Admin/Organisation/Create/General/OrganisationGeneralActions";
import { useSelector } from "react-redux";
import Contact from "../../Pages/Roles/Admin/Organisation/Create/contact";
import General from "../../Pages/Roles/Admin/Organisation/Create/general";
import Profile from "../../Pages/Roles/Admin/Organisation/Create/profile";

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
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '50px'
  }
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
        fontSize: "13px",
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
        fill: 'black'
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: "#3b86ff",
      },
    },
  },
});

export default function HorizontalLinearStepper(props) {
  function getSteps() {
    return [
      "Organisation Details",
      "Profile",
      "Contact",
      "Pre-Contact",
      "General",
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

  const handleNext = (submitData, submitUrl) => {
    if(activeStep === 0){
      CreateOrganisationDetails(OrganisationDetail);
    } else if (activeStep === 1){
      CreateOrganisationProfile(OrganisationProfile);
    } else if (activeStep === 2){
      CreateOrganisationContact(OrganisationContact);
    } else if (activeStep === 3){
      CreateOrganisationPreContract(OrganisationPreContract);
    } else if (activeStep === 4){
      CreateOrganisationGeneral(OrganisationGeneral);
    } else {
      
    }
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setSkipped(newSkipped);
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
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} connector={false}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step onClick={() => handleTabChange(index)}
                key={label}
                {...stepProps}
                style={{
                  backgroundColor: activeStep === index ? "#3b86ff" : "",
                  cursor: 'pointer'
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
