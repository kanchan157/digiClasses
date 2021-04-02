import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
import CustomSelect from '../../../Components/CustomSelect'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))
function Review(props:any) {
    const classes = useStyles();

    const global_data = useSelector((state: any) => state.stepperReducer);

    const data = {
        feedback: '',
        onboarding_status: '',
        acuity_people_profile_id: '',
        partner_profile_id: global_data.partner_profile,
    }
    const [userData, setUserData] = useState(data);
    const setInputState = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue, inputId)
        setUserData({ ...userData, [inputId]: inputStateValue })
    }

    const onSubmit = () => {
        AdminPartnerClient.Review(userData).then((response: any) => {
            console.log(response)
        });
        // console.log(userData)
    }
    useEffect(() => {
        if (global_data.partner_profile != "") {
            AdminPartnerClient.Review_get({  partner_profile_id: global_data.partner_profile}).then((response: any) => {
            }).catch(error => alert(JSON.stringify(error.error)));
        }
    }, [])
    return (
        <div>
            <Header isSkip={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit}   />

            <Grid container direction="row" alignItems="center" style={{ padding: 20 }}>
                <Grid item xs={10}>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel  className={classes.labelText} >Onboarding confirmation</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomRadioButton id="onboarding_status" itemArr={["Yes", "No"]} parentcall={setInputState} selectedValue={userData.onboarding_status}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel  className={classes.labelText} >Feedback</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="feedback" variant="outlined" placeholder="Free text" multiline={true} rows={4} parentcall={setInputState} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Header isSkip={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit}   />

        </div>
    )
}

export default Review
