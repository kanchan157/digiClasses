import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
import CustomSelect from '../../../Components/CustomSelect'
import Header from './header'

const CommisionInfoAdmin = () => {
    const classes = useStyles();
    const data = {
        commission: '',
        commission_rate: '',
        commission_currency: '',
        commission_notes: '',
        commission_period: '',
        commission_total: '',
        partner_profile_id: ''
        
    }
    const [userData, setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any) => {
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
        console.log(selectedItemValue)
    };
    const onChangeDate = (selectedItemValue: any, id: any) => {
        setUserData({ ...userData, [id]: selectedItemValue })
    };

    const onSubmit = () => {
        console.log(userData)
    }
    return (
        <div>
            <Header parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="commission" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.commission} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="commission_rate" variant="outlined" placeholder="Email" parentcall={setInputState} selectedValue={userData.commission_rate} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Currency</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="commission_currency" variant="outlined" placeholder="Phone" parentcall={setInputState} selectedValue={userData.commission_currency} />
                        </Grid>
                    </Grid>
                    
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Notes</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                        <CustomSelect id="commission_notes" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.commission_notes} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Period</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="commission_period" variant="outlined" placeholder="Name" parentcall={setInputState} selectedValue={userData.commission_period} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Total</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="commission_total" variant="outlined" placeholder="Name" parentcall={setInputState} selectedValue={userData.commission_total} />
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>

        </div>
    )
}
export default CommisionInfoAdmin
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
        paddingRight: '10px'
    },
}))
