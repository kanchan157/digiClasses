import { Grid, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../../../Components/CustomDatePicker';
import CustomInput from '../../../../Components/CustomInput';
import CustomSelect from '../../../../Components/CustomSelect'
import AdminPartnerClient from '../../../../Service/Admin/partner_services';
import Header from './header';

function OtherQuestions() {

    const data = {
        
        partner_profile_id:'',
        assessor_currency_type:'',
        assessor_hour_rate:'',
        available_date:'',
        coaching_hour_rate:'',
        coach_currency_type:'',
        facilitator_currency_type:'',
        facilitator_day_rate:'',
        local_tx_areas:'',
        psychometric_costs:'',
        travel_expenses:'',
        delivery_methods:'',
        considered_levels:'',
    }
    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any ) => {
        setUserData({ ...userData, [inputId]: selectedItemValue.value })
    };
    const [userData,setUserData] = useState(data);

    const onChangeDate = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const onSubmit = () => {
        AdminPartnerClient.OtherQuestions(userData).then((response: any) => {
            console.log(response)
        });
        // console.log(userData)
    }
    return (
        <div>
                       <Header isSkip={true} parentcall={onSubmit} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={8}>
                
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Coaching hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="coaching_hour_rate" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Facilitation day rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="facilitator_day_rate" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Assessment hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="assessor_hour_rate" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Travel expenses</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="travel_expenses" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Psychometric costs</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="psychometric_costs" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Local TX areas</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="local_tx_areas" variant="outlined" placeholder="Mr"  parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Delivery method</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="delivery_methods" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Next Available Date</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="available_date" displayEmpty variant="outlined" itemArr={['1', '2']} parentcall={onChangeItem} selectedValue={userData.available_date} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Considered Levels</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="considered_levels" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Internal Comments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="assessor_currency_type" variant="outlined" placeholder="Mr"  parentcall={setInputState}/>
                        </Grid>
                    </Grid>

                </Grid>
            
            </Grid>
            <Header  parentcall={onSubmit} />

        </div>
    )
}

export default OtherQuestions
