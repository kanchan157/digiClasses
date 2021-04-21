import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, StepConnector, withStyles } from '@material-ui/core';
import BasicInfo from '../../StepperComponent/BasicInfo';
import NDA from '../../StepperComponent/NDA';
import Share_Login_Credentials from '../../StepperComponent/Share_Login_Credentials';
import DueDiligenceCall from '../../StepperComponent/DueDiligence';
import Questionnaire from '../../StepperComponent/Questionnaire';
import ReferenceQuestionnaire from '../../StepperComponent/ReferenceQuestionnaire';
import WorkingWithAcuity from '../../StepperComponent/WorkingWithAcuity';
import ContractDocumentation from '../../StepperComponent/ContractDocumentition';
import Ranking from '../../StepperComponent/Ranking';
import Review from '../../StepperComponent/Review';
import WorkInfo from '../../StepperComponent/WorkInfo';
import QualityAssurance from '../../StepperComponent/QualityAssurance';
import CoachingProfileField from '../../StepperComponent/CoachingProfileField';
import CommisionInfoAdmin from '../../StepperComponent/CommisionInfoAdmin';
import AssessmentProfile from '../../StepperComponent/AssessmentProfile';
import AssociateCoaches from '../../StepperComponent/Associate_Coaches';
import FacilitationProfile from '../../StepperComponent/FacilititationProfile';
import MentoringProfile from '../../StepperComponent/MentoringProfile';
import HeaderMenu from '../../../../Components/HeaderMenu';
import clsx from 'clsx';
import { Check } from '@material-ui/icons';
import OtherQuestions from '../../StepperComponent/OtherQuestions';
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
    return ['Basic Info', 'Share login credentials', 'NDA', 'WorkInfo', 'QualityAssurance', 'Due Diligence call',
     'CoachingProfileField', 'CommisionInfoAdmin', 
     'AssessmentProfile','AssociateCoaches','FacilitationProfile','MentoringProfile',
     'Questionnaire', 'Reference Questionnaire', 'Working with acuity', 'Contract Documentation', 'Other Questions', 'Ranking', 'Review'];
}

function OnboardingPartnerAdmin() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [profileID, setProfileID] = React.useState(0);
    const steps = getSteps();

    const updateProfileId = (value: any) => {
        setProfileID(value)
    }

    function getStepContent(step: any) {
        console.log(step)
        switch (step) {
            case 0:
                return <BasicInfo parentSetProfileId={updateProfileId} parentHandleNext={handleNext} activeIndex={step} />;
            case 1:
                return <Share_Login_Credentials profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 2:
                return <NDA profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 3:
                return <WorkInfo profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 4:
                return <QualityAssurance profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 5:
                return <DueDiligenceCall profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 6:
                return <CoachingProfileField profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 7:
                return <CommisionInfoAdmin profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 8:
                return <AssessmentProfile profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 9:
                return <AssociateCoaches profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 10:
                return <FacilitationProfile profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 11:
                return <MentoringProfile profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 12:
                return <Questionnaire profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 13:
                return <ReferenceQuestionnaire profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 14:
                return <WorkingWithAcuity profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 15:
                return <ContractDocumentation profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 16:
                return <OtherQuestions profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 17:
                return <Ranking profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            case 18:
                return <Review profileId={profileID} parentHandleNext={handleNext} activeIndex={step} />;
            default:
                return "Not available"
        }
    }

    const handleNext = (index: any) => {
        setActiveStep(index);
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






export default OnboardingPartnerAdmin

