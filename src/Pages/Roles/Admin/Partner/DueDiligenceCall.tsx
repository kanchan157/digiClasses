import { Grid, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../../../Components/CustomDatePicker'
import CustomInput from '../../../../Components/CustomInput'
import CustomSelect from '../../../../Components/CustomSelect'
import Header from './header'

function DueDiligenceCall() {

    const data = {
        assignee:'q',
        scheduleCallDate:'q',
        internalNote:'q',
        actions:'q'
    }
    const [userData,setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({...userData, [inputId] : inputStateValue})
    }
   
    const onSubmit = () => {
        console.log(userData)
    }
    return (
        
        <div>
        <Header isSkip={true} parentcall={onSubmit} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30,marginBottom:30 }}>
                <Grid item xs={6}>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Assignee</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="assignee" displayEmpty variant="outlined" itemArr={['a', 'b']}  selectedValue={userData.assignee}/>
                        </Grid>
                    </Grid>
                    
                    <Grid container direction="row" alignItems="center">
                        <Grid item xs={4}>
                            <InputLabel>Schedule the call</InputLabel>
                        </Grid>
                        <Grid item xs={3} style={{ padding: 0,paddingRight:0 }}>
                            <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                                <Grid item xs={12} style={{marginBottom:10}}>
                                    <InputLabel>Date</InputLabel>
                                </Grid> 
                                <Grid item xs={12}>
                                    <CustomDatePicker id="scheduleCallDate" variant="outlined" parentcall={setInputState} />
                                </Grid> 
                            </Grid>
                        </Grid>
                        <Grid item xs={5} style={{ padding: 10,paddingRight:0 }}>
                            <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                                <Grid item xs={12} style={{marginBottom:10}}>
                                    <InputLabel>Time</InputLabel>
                                </Grid> 
                                <Grid item xs={6}>
                                    <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']}  />
                                </Grid>
                                <Grid item xs={5} style={{marginLeft:10}}>
                                    <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']}  />
                                </Grid>                             
                            </Grid>                        
                        </Grid>                      
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Internal notes</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                        <CustomInput id="internalNote" variant="outlined" placeholder="Free Text" multiline={true} rows={4} parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Actions</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="actions" variant="outlined" placeholder="Free Text" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Header  parentcall={onSubmit} />
        </div>
    )
}

export default DueDiligenceCall
