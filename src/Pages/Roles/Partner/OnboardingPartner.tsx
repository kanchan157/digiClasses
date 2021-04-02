import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, FormControlLabel, Checkbox, StepConnector, withStyles } from '@material-ui/core';

import clsx from 'clsx';
import { Check } from '@material-ui/icons';
import BasicInfo from '../StepperComponent/BasicInfo';
// import NDA from '../Partner/NDA';
import DueDiligence from '../StepperComponent/DueDiligence';
import Questionnaire from '../StepperComponent/Questionnaire';
import WorkingWithAcuity from '../StepperComponent/WorkingWithAcuity';
import HeaderMenu from '../../../Components/HeaderMenu';
import ContractDocumentition from '../StepperComponent/ContractDocumentition';
import OtherQue from '../StepperComponent/OtherQuestions';
import NDA from '../StepperComponent/NDA';
// import OtherQuestions from '../Partner/OtherQuestions';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
        },

    }),
);
const QontoConnector = withStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 20,
        alignItems: 'left',
        marginLeft: 8
    },

    active: {
        '& $line': {
            borderColor: '#784af4',
        },
        marginLeft: 9,
        height: 20,

    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
        marginLeft: 9,
        height: 20,
    },
    line: {
        height: 18
    },
})(StepConnector);
const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'left',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: '#3B86FF',
    },
    completed: {
        color: '#fff',
        backgroundColor: "#3B86FF",
        zIndex: 1,
        fontSize: 14,
        borderRadius: "50%",
        padding: 3
    },
});
function QontoStepIcon(props: any) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
    return (
        <div className={clsx(classes.root, { [classes.active]: active })}>
            {active ? <div style={{ borderColor: "#3B86FF", borderWidth: 1, padding: 3, backgroundColor: "#fff", borderRadius: "50%", width: 8, height: 8, borderStyle: "solid" }}><div className={classes.circle} /></div>
                : completed ? <div ><Check className={classes.completed} /></div>
                    : <div style={{
                        borderColor: "#3B86FF",
                        borderWidth: 1,
                        padding: 3,
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        width: 8,
                        height: 8,
                        borderStyle: "solid"
                    }}>
                    </div>}
        </div>
    );
}


function getSteps() {
    return ['Basic Info', 'NDA', 'Due Diligence call', 'Questionnaire', 'Working with acuity', 'Contract Documentation', 'Other Questions'];
}

function OnboardingPartner() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [profileID, setProfileID] = React.useState(0);
    const [acuityProfileID, setAcuityProfileID] = useState(0);

    const updateProfileId = (profileID: any, acuityProfileID: any) => {
        setProfileID(profileID);
        setAcuityProfileID(acuityProfileID)
    }

    function getStepContent(step: any) {
        switch (step) {
            case 0:
                return <BasicInfo parentSetProfileId={updateProfileId} parentHandleNext={handleNext} activeIndex={step} />;
            case 1:
                return <NDA profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 2:
                return <DueDiligence profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 3:
                return <Questionnaire profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 4:
                return <WorkingWithAcuity profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 5:
                return <ContractDocumentition profileId={profileID} acuityProfileID={acuityProfileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 6:
                return <OtherQue profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            default:
                return "Not available"
        }
    }

    const handleNext = (index: any) => {
        setActiveStep(index);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (

        <div className={classes.root}>
            <Grid direction="row" >
                <Grid xs={12} style={{ textAlign: "left", backgroundColor: "blue" }}>
                    <HeaderMenu />
                </Grid>
            </Grid>
            {/* <Grid direction="row" >
            <Grid xs={12} style={{ textAlign: "left", backgroundColor: "blue" }}>
                <div style={{ height: 60 }}></div>
            </Grid>
        </Grid> */}
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={3} style={{ paddingTop: 18, textAlign: "left", backgroundColor: "#EEEEEE", height: "calc(100vh - 64px)" }}>
                    <Typography style={{ paddingBlock: 25, textAlign: "center", alignSelf: "center", fontSize: 26, color: "#4A4A4A", fontWeight: "bold" }}>
                        <ArrowBackIosIcon style={{ fontSize: 16, color: "#4A4A4A" }} /> Partner Onboarding</Typography>
                    <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />} style={{ backgroundColor: "#EEEEEE", paddingLeft: 55 }}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel style={{ cursor: "pointer" }} StepIconComponent={QontoStepIcon} onClick={() => { handleNext(index) }}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                </Grid>
                <Grid item xs={9} style={{ height: "calc(100vh - 64px)", overflow: "auto" }}>
                    {getStepContent(activeStep)}
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} className={classes.button}>Reset</Button>
                        </Paper>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}






export default OnboardingPartner
