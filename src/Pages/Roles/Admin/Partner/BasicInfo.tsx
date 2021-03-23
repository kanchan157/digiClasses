import { Grid, InputLabel, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../../../Components/CustomDatePicker';
import CustomInput from '../../../../Components/CustomInput'
import CustomRadioButton from '../../../../Components/CustomRadioButton';
import CustomSelect from '../../../../Components/CustomSelect';
import Header from './header';



function BasicInfo() {

    const data = {
        title:'Mr',
        firstName:'',
        middleName:'',
        lastName:'',
        email:'',
        phone:'',
        orgName:'',
        dateOfContact:'',
        location:'',
        source:'',
        sourceAssign:'',
        associatedCoach:true,
        associateRole:'',
        associateBio:'',
        role:'',
        resume:''
    }
    const [userData,setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({...userData, [inputId] : inputStateValue})
    }
    const onChangeItem = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const onChangeDate = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const OnChangeRadioStatus = (inputStateValue: any) => {
        console.log(inputStateValue);
    }

    const onSubmit = () => {
        console.log(userData)
    }
    return (
        <div>
            <Header parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30,marginBottom:30 }}>
                <Grid item xs={6}>

                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Title*</InputLabel>
                        </Grid>
                        <Grid item xs={2}>
                            <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.title} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="flex-start" style={{marginBottom:20}}>
                        <Grid item xs={4} >
                            <InputLabel>Full Name*</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container direction="row" alignItems="center" >
                                <Grid item xs={12} >
                                    <CustomInput id="firstName" variant="outlined" placeholder="First Name" parentcall={setInputState} />
                                </Grid>
                            </Grid>


                            <Grid container direction="row" alignItems="center" >
                                <Grid item xs={4} >
                                    <CustomInput id="middleName" variant="outlined" placeholder="Middle Name" parentcall={setInputState} />
                                </Grid>
                                <Grid item xs={8} style={{ padding: 10,paddingRight:0 }}>
                                    <CustomInput id="lastName" variant="outlined" placeholder="Last Name" parentcall={setInputState} />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Email*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="email" variant="outlined" placeholder="Email" parentcall={setInputState} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Phone*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="phone" variant="outlined" placeholder="Phone" parentcall={setInputState} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Organization Name</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="orgName" variant="outlined" placeholder="Name" parentcall={setInputState} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Date of initial contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                        <CustomDatePicker id="dateOfContact" variant="outlined" parentcall={onChangeDate} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Location of contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="location" variant="outlined" placeholder="Name" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Source</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['a', 'b']} parentcall={onChangeItem} selectedValue={userData.source}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Sourced for Assignment</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['p', 'q']} parentcall={onChangeItem} selectedValue={userData.sourceAssign}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Associate coach</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                        <CustomRadioButton itemArr={["Yes", "No"]} parentcall={OnChangeRadioStatus} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Associate Role</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['c', 'd']} parentcall={onChangeItem} selectedValue={userData.associateRole}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Associate Bio</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="Username" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.associateBio}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Role</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['y', 'z']} parentcall={onChangeItem} selectedValue={userData.role}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{marginBottom:30}}>
                        <Grid item xs={4}>
                            <InputLabel>Resume</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Header />

        </div>
    )
}

export default BasicInfo
