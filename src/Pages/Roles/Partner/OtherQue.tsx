import { Card, Grid, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../../Components/CustomDatePicker';
import CustomInput from '../../../Components/CustomInput';
import CustomSelect from '../../../Components/CustomSelect'
import Header from './header';

function OtherQue() {

    const data = {
        coachingHourRate: '1',
        faciliationRate: '2',
        assesmentRate: '3',
        travelExpenses: 'a',
        psychoCost: 'b',
        localTX: 'c',
        deliveryMethod: 'd',
        nextAvaiDate: 'e',
        considerLevel: 'f',
    }
    const [userData, setUserData] = useState(data);
    const onSubmit = () => {
        console.log(userData)
    }
    const onChangeItem = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const onChangeDate = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }

    return (
        <div>
            <Header isBack={true} parentcall={onSubmit} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={8}>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Coaching hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                        <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} />
                            {/* <CustomInput id="coachingHourRate" variant="outlined" placeholder="Mr" parentcall={setInputState} /> */}
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Facilitation day rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="faciliationRate" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Assessment hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="assesmentRate" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Travel expenses</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="travelExpenses" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Psychometric costs</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="psychoCost" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Local TX areas</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="localTX" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Delivery method</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="deliveryMethod" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Next Available Date</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="nextAvaiDate" variant="outlined" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel>Considered Levels</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="considerLevel" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>
            <Header isBack={true} parentcall={onSubmit} />

        </div>
    )
}

export default OtherQue
