import { Button, Card, Grid, InputLabel, TextField, Typography } from '@material-ui/core'
import { Cancel, CloudUpload } from '@material-ui/icons';
import React, { useState } from 'react'
import CustomDatePicker from '../../../Components/CustomDatePicker';
import CustomInput from '../../../Components/CustomInput';
import CustomRadioButton from '../../../Components/CustomRadioButton';
import CustomSelect from '../../../Components/CustomSelect';
import Header from './header';


function BasicInfo() {

    const data = {
        title: 'Mr',
        firstName: '1',
        middleName: '2',
        lastName: '3',
        email: '4',
        phone: '5',
        orgName: '6',
        addrLine1: '7',
        addrLine2: '8',
        city: '9',
        country: '99',
        countryText: '999',
        zipCode: '9999',
    }
    const [userData, setUserData] = useState(data);
    const onSubmit = () => {
        console.log(userData)
    }

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
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


    return (
        <div>
            <Header saveBtnTitle={'Submit'} isBack={false} parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={8}>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }} >

                        <Grid item xs={4}>
                            <InputLabel>Title*</InputLabel>
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.title} />
                        </Grid>

                    </Grid>
                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                        <Grid item xs={4} >
                            <InputLabel style={{ marginTop: 30, }} >Full Name*</InputLabel>
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
                                <Grid item xs={8} style={{ padding: 10, paddingRight: 0 }}>
                                    <CustomInput id="lastName" variant="outlined" placeholder="Last Name" parentcall={setInputState} />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Email*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="email" variant="outlined" placeholder="Email" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Phone*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="phone" variant="outlined" placeholder="Phone" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Organization Name</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="orgName" variant="outlined" placeholder="Name" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 30 }}>
                        <Grid item xs={4} >
                            <InputLabel style={{ marginTop: 30, }}>Address*</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }}>
                                <Grid item xs={12} >
                                    <CustomInput id="addrLine1" variant="outlined" placeholder="Address Line 1" parentcall={setInputState} />
                                </Grid>
                            </Grid>

                            <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }} >
                                <Grid item xs={12} >
                                    <CustomInput id="addrLine2" variant="outlined" placeholder="Address Line 2" parentcall={setInputState} />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" >
                                <Grid item xs={6}>
                                    <CustomSelect id="city" displayEmpty variant="outlined" itemArr={['India', 'Pakistan']} parentcall={onChangeItem} selectedValue={userData.title} />
                                </Grid>
                                <Grid item xs={6} style={{ padding: 10, paddingRight: 0 }}>
                                    <CustomSelect id="country" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.title} />
                                </Grid>
                                <Grid item xs={6}>
                                    <CustomInput id="countryText" variant="outlined" placeholder="Country" parentcall={setInputState} />
                                </Grid>
                                <Grid item xs={6} style={{ padding: 10, paddingRight: 0 }}>
                                    <CustomInput id="zipCode" variant="outlined" placeholder="Zip Code" parentcall={setInputState} />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Resume</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <label htmlFor="upload-photo">
                                <input accept="application/pdf, application/vnd.ms-excel,image/gif, image/jpeg" style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
                                <Button color="secondary" variant="contained" component="span" style={{ fontSize: 12 }}><CloudUpload style={{ marginRight: 10 }} />Upload</Button>
                            </label>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center"  >
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={8} >

                            <Grid container direction="row" alignItems="center">
                               {[1,2].map(() =>  <Grid item xs={5} >
                                    <div style={{ marginRight: 15,  height: 100, backgroundColor: "#ddd", marginBlock: 10, borderRadius: 5 }}>
                                        <div style={{ position: "relative", flex: .5, padding: 10 }}>
                                            <Cancel style={{ marginRight: 10, position: "absolute", top: -9, right: -18, fontSize: 16 }} />
                                            <Typography variant="h5" style={{ color: "#3B86FF", fontSize: 12, }}>26 Jan 2018</Typography>
                                            <Typography variant="h5" style={{ fontSize: 12, }}>Proposal Documents.pdf</Typography>
                                        </div>
                                    </div>
                                </Grid>)}
                               
                            </Grid>

                            

                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
            <Header saveBtnTitle={'Submit'} />

        </div>
    )
}

export default BasicInfo
