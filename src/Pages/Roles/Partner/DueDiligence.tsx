// import classes from '*.module.css'
import { Card, Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomSelect from '../../../Components/CustomSelect'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'

function DueDiligence(props:any) {

    const data = {
        assignee_id: '',
        due_diligence_available_slots_attributes: [],
        internal_notes: '',
        partner_notes: '',
        actions: '',
        partner_profile_id: props.profileId,
       
    }
    const [userData,setUserData] = useState(data);
    const classes = useStyles();


    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    
   
    const onSubmit = () => {
        AdminPartnerClient.DueDiligenceCall(userData).then((response: any) => {
            console.log(response)
        });
    }
    return (
        
        <div>
        <Header isBack={true} saveBtnTitle = {'Confirm'} parentcall={onSubmit} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30,marginBottom:30 }}>
                <Grid item xs={8}>
                    
                    
                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel style={{marginTop:20,}} >Schedule the call*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={12} >
                                    <CustomInput id="due_diligence_av" placeholder="February 1st 2019" parentcall={setInputState} />
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        9 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        10 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        11 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        12 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        1 PM
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={12} >
                                    <CustomInput id="businessExp" placeholder="February 2nd 2019" parentcall={setInputState} />
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        9 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        10 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        11 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        12 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        1 PM
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={12} >
                                    <CustomInput id="businessExp" placeholder="February 3rd 2019" parentcall={setInputState} />
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        9 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        10 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        11 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        12 AM
                                    </Grid>
                                </Grid>
                                <Grid item  sm={2} style={{marginRight:5,}} >
                                    <Grid container direction="row" justify="center" alignItems="center" 
                                    className={classes.smallGrid} >
                                        1 PM
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        
                    </Grid>
                    <Grid container direction="row" alignItems="flex-start" >
                        <Grid item xs={4}>
                            <InputLabel style={{marginTop:20,}} >Additional notes*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                        <CustomInput id="internal_notes" variant="outlined" placeholder="Free Text" multiline={true} rows={4} parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Header isBack={true} saveBtnTitle = {'Confirm'} parentcall={onSubmit} />
        </div>
    )
}

export default DueDiligence

const useStyles = makeStyles((theme) => ({
    smallGrid: {
    backgroundColor: '#dce6f5',
    padding: '5px',
    color: 'gray',
    borderRadius: '5px',
    fontSize:'12px',
    },
}))
