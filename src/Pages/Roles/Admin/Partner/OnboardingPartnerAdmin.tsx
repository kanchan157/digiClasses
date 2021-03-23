import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, FormControlLabel, Checkbox, StepConnector, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CustomInput from '../../../../Components/CustomInput';
import Contact from '../Organisation/Create/contact';
import General from '../Organisation/Create/general';
import OrganisationDetails from '../Organisation/Create/organisation_details';
import PreContract from '../Organisation/Create/pre_contract';
import Profile from '../Organisation/Create/profile';
import BasicInfo from './BasicInfo';
import NDA from './NDA';
import Share_Login_Credentials from './Share_Login_Credentials';
import DueDiligenceCall from './DueDiligenceCall';
import Questionnaire from './Questionnaire';
import ReferenceQuestionnaire from './ReferenceQuestionnaire';
import WorkingWithAcuity from './WorkingWithAcuity';
import ContractDocumentation from './ContractDocumentation';
import OtherQuestions from './OtherQuestions';
import Ranking from './Ranking';
import Review from './Review';
import HeaderMenu from '../../../../Components/HeaderMenu';
import clsx from 'clsx';
import { Check } from '@material-ui/icons';

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
    return ['Basic Info', 'Share login credentials', 'NDA', 'Due Diligence call', 'Questionnaire', 'Reference Questionnaire', 'Working with acuity', 'Contract Documentation', 'Other Questions', 'Ranking', 'Review'];
}

function OnboardingPartnerAdmin() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();


    function getStepContent(step: any) {
        switch (step) {
            case 0:
                return <BasicInfo />;
            case 1:
                return <Share_Login_Credentials />;
            case 2:
                return <NDA />;
            case 3:
                return <DueDiligenceCall />;
            case 4:
                return <Questionnaire />;
            case 5:
                return <ReferenceQuestionnaire />;
            case 6:
                return <WorkingWithAcuity />;
            case 7:
                return <ContractDocumentation />;
            case 8:
                return <OtherQuestions />;
            case 9:
                return <Ranking />;
            case 10:
                return <Review />;
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
                    <HeaderMenu/>
                </Grid>
            </Grid>
            {/* <Grid direction="row" >
                <Grid xs={12} style={{ textAlign: "left", backgroundColor: "blue" }}>
                    <div style={{ height: 60 }}></div>
                </Grid>
            </Grid> */}
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={4} style={{ paddingTop: 30, textAlign: "left", backgroundColor: "#EEEEEE", height: "calc(100vh - 60px)" }}>
                    <Typography variant="h4" style={{ textAlign: "center" }}>Partner Onboarding</Typography>
                    <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />} style={{ backgroundColor: "#EEEEEE" }}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={QontoStepIcon} onClick={() => { handleNext(index) }}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                </Grid>
                <Grid item xs={8} style={{ height: "calc(100vh - 60px)" }}>
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

