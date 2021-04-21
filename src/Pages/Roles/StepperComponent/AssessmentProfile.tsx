import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
import CustomSelect from '../../../Components/CustomSelect'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'

const AssessmentProfile = (props: any) => {
    const classes = useStyles();
    const data = {
        assessment_exp_overview: '',
        types_of_assessment: '',
        psychometrics_used: '',
        representative_engagements: '',
        assessment_clients: '',
    }
    const [userData, setUserData] = useState(data);
    const global_data = useSelector((state: any) => state.stepperReducer);
    const dispatch = useDispatch();

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any) => {
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
        console.log(selectedItemValue)
    };


 
    useEffect(() => {
        if (global_data.assessment_profile_id != "") {
            AdminPartnerClient.AssessmentProfile(
                global_data.assessment_profile_id,
                { partner_profile_id: global_data.partner_profile },
                'GET'
            ).then((response: any) => {
                setUserData(response.data.attributes)

            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const onSubmit = () => {
        console.log(userData)
        if (global_data.assessment_profile_id == "") {
            AdminPartnerClient.AssessmentProfile(
                '',
                { partner_profile_id: global_data.partner_profile, ...userData },
                'POST'
            ).then((response: any) => {
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { assessment_profile_id: response.data.id } });
                props.parentHandleNext(props.activeIndex + 1)
            });

        } else {
            AdminPartnerClient.AssessmentProfile(
                global_data.assessment_profile_id,
                { ...userData },
                "PUT"
            ).then(() => {
                props.parentHandleNext(props.activeIndex + 1)
            });
        }

    }

    return (
        <div>
            <Header parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Assessment Experince Overview</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="assessment_exp_overview" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.assessment_exp_overview} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Types of Assessment</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="types_of_assessment" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.types_of_assessment} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Psychometric Used</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="psychometrics_used" variant="outlined" placeholder="Phone" parentcall={setInputState} value={userData.psychometrics_used} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Representative Assessment Engagements</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="representative_engagements" variant="outlined" placeholder="Phone" parentcall={setInputState} value={userData.representative_engagements} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Assessment Clients</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="assessment_clients" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.assessment_clients} />
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>

        </div>
    )
}
export default AssessmentProfile
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
        paddingRight: '10px'
    },
}))
