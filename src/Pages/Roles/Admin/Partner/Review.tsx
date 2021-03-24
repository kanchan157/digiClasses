import { Grid, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'
import CustomInput from '../../../../Components/CustomInput'
import CustomRadioButton from '../../../../Components/CustomRadioButton'
import CustomSelect from '../../../../Components/CustomSelect'
import AdminPartnerClient from '../../../../Service/Admin/partner_services'
import Header from './header'

function Review() {
    const data = {

        feedback: '',
        onboarding_status: '',
        acuity_people_profile_id: '',
        partner_profile_id: '',
    }
    const [userData, setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any ) => {
        setUserData({ ...userData, [inputId]: selectedItemValue.value })
    };
    const OnChangeRadioStatus = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onSubmit = () => {
        AdminPartnerClient.Review(userData).then((response: any) => {
            console.log(response)
        });
        // console.log(userData)
    }
    return (
        <div>
            <Header isSkip={true} parentcall={onSubmit} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={8}>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Onboarding confirmation</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomRadioButton id="onboarding_status" itemArr={["Yes", "No"]} parentcall={OnChangeRadioStatus} selectedValue={userData.onboarding_status}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Feedback</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="feedback" variant="outlined" placeholder="Free text" multiline={true} rows={4} parentcall={setInputState} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Header parentcall={onSubmit} />

        </div>
    )
}

export default Review
