import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
import CustomSelect from '../../../Components/CustomSelect'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions';
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))
function Review(props: any) {
    const classes = useStyles();

    const global_data = useSelector((state: any) => state.stepperReducer);
    const dispatch = useDispatch();

    const data = {
        feedback: '',
        onboarding_status: true,
        acuity_people_profile_id: '',
    }
    const [userData, setUserData] = useState(data);
    const setInputState = (inputStateValue: any, inputId: any) => {
        if (inputId == "onboarding_status") {
            inputStateValue = inputStateValue == "Yes" ? true : false
        }
        setUserData({ ...userData, [inputId]: inputStateValue })
    }

    const onSubmit = () => {
        if (global_data.review_id != "") {
            AdminPartnerClient.Review({ partner_profile_id: global_data.partner_profile, ...userData }).then((response: any) => {
                console.log(response)
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { review_id: response.data.id } });

                props.parentHandleNext(props.activeIndex + 1)
            }).catch(error => alert(JSON.stringify(error.error)));
        } else {
            AdminPartnerClient.Review_put(global_data.review_id, { partner_profile_id: global_data.partner_profile, ...userData }).then((response: any) => {
                props.parentHandleNext(props.activeIndex + 1)
            }).catch(error => alert(JSON.stringify(error.error)));
        }
        // console.log(userData)
    }
    useEffect(() => {
        if (global_data.review_id != "") {
            AdminPartnerClient.Review_get(global_data.review_id, { partner_profile_id: global_data.partner_profile }).then((response: any) => {
                setUserData(response.data.attributes)
            }).catch(error => alert(JSON.stringify(error.error)));
        }
    }, [])
    return (
        <div>
            <Header isSkip={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} />

            <Grid container direction="row" alignItems="center" style={{ padding: 20 }}>
                <Grid item xs={10}>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Onboarding confirmation</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomRadioButton id="onboarding_status" itemArr={["Yes", "No"]} parentcall={setInputState} index={userData.onboarding_status ? 0 : 1} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Feedback</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="feedback" variant="outlined" placeholder="Free text" multiline={true} rows={4} parentcall={setInputState} defaultValue={userData.feedback} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Header isSkip={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} />

        </div>
    )
}

export default Review
