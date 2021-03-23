import { Grid, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../../../Components/CustomDatePicker';
import CustomInput from '../../../../Components/CustomInput';
import CustomSelect from '../../../../Components/CustomSelect'
import Header from './header';

function OtherQuestions() {

    const data = {
        coachingRate:'1',
        faciliationRate:'2',
        assesmentRate:'3',
        travelExpenses:'',
        psychoCost:'',
        localTX:'',
        deliveryMethod:'',
        nextAvaiDate:'',
        considerLevel:'',
        internalComments:''
    }
    const [userData,setUserData] = useState(data);

    const onChangeItem = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const onChangeDate = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({...userData, [inputId] : inputStateValue})
    }
    const onSubmit = () => {
        console.log(userData)
    }
    return (
        <div>
                       <Header isSkip={true} parentcall={onSubmit} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={6}>
                
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Coaching hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="coachingRate" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Facilitation day rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="faciliationRate" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Assessment hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="assesmentRate" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Travel expenses</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="travelExpenses" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Psychometric costs</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="psychoCost" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Local TX areas</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="localTX" variant="outlined" placeholder="Mr"  parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Delivery method</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="deliveryMethod" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Next Available Date</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="nextAvaiDate" displayEmpty variant="outlined" itemArr={['1', '2']} selectedValue={userData.nextAvaiDate} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Considered Levels</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="considerLevel" variant="outlined" placeholder="Mr" parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Internal Comments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="internalComments" variant="outlined" placeholder="Mr"  parentcall={setInputState}/>
                        </Grid>
                    </Grid>

                </Grid>
            
            </Grid>
            <Header  parentcall={onSubmit} />

        </div>
    )
}

export default OtherQuestions
