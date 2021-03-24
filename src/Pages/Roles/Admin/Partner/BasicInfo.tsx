import { Button, Grid, InputLabel, TextField, Typography } from '@material-ui/core'
import { Cancel, CloudUpload } from '@material-ui/icons';
import React, { useState } from 'react'
import CustomDatePicker from '../../../../Components/CustomDatePicker';
import CustomInput from '../../../../Components/CustomInput'
import CustomRadioButton from '../../../../Components/CustomRadioButton';
import CustomSelect from '../../../../Components/CustomSelect';
import Header from './header';
import AdminPartnerClient from '../../../../Service/Admin/partner_services'



function BasicInfo() {

    const data = {

        id: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        associate_coach: '',
        associate_role: '',
        associate_bio: '',
        contact_location: '',
        phone: '',
        email: '',
        initial_contact_date: '',
        referred_by: '',
        resume: '',
        acuity_people_profile_id: '',
        nda_status: '',
        wwa_status: '',
        sourced_for: '',
        partner_roles_attributes: '',
        partner_resumes_attributes: '',
        address_line1: '',
        address_line2: '',
        zipcode: '',
        dob: '',
        facebook: '',
        gender: '',
        linkedin: '',
        organisation_id: '',
        secondary_email: '',
        skype: '',
        suffix: '',
        title: '',
        twitter: '',
        visa_status: '',
        work_info: '',
        city: '',
        country_list_id: '',
        county: '',
        nationality_list_id: '',
        website: [],
    }
    const [userData, setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: selectedItemValue.value })
    };
    const onChangeDate = (selectedItemValue: any, inputId: any) => {
        // debugger
        setUserData({ ...userData, [inputId]: selectedItemValue })
        // console.log(selectedItemValue)
    };
    const OnChangeRadioStatus = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        // console.log(inputStateValue);
    }

    const onSubmit = () => {
        AdminPartnerClient.BasicInfo(userData).then((response: any) => {
            console.log(response)
        });
    }
    return (
        <div>
            <Header parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={8}>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Title*</InputLabel>
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelect id="title" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.title} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                        <Grid item xs={4} >
                            <InputLabel style={{ marginTop: 30, }} >Full Name*</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container direction="row" alignItems="center" >
                                <Grid item xs={12} >
                                    <CustomInput id="first_name" variant="outlined" placeholder="First Name" parentcall={setInputState} />
                                </Grid>
                            </Grid>

                            <Grid container direction="row" alignItems="center" >
                                <Grid item xs={4} >
                                    <CustomInput id="middle_name" variant="outlined" placeholder="Middle Name" parentcall={setInputState} />
                                </Grid>
                                <Grid item xs={8} style={{ padding: 10, paddingRight: 0 }}>
                                    <CustomInput id="last_name" variant="outlined" placeholder="Last Name" parentcall={setInputState} />
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
                            <CustomInput id="organisation_id" variant="outlined" placeholder="Name" parentcall={setInputState} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Date of initial contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="initial_contact_date" variant="outlined" parentcall={onChangeDate} selectedValue={userData.initial_contact_date} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Location of contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contact_location" variant="outlined" placeholder="Name" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Source</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="referred_by" displayEmpty variant="outlined" itemArr={['a', 'b']} parentcall={onChangeItem} selectedValue={userData.referred_by} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Sourced for Assignment</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="sourced_for" displayEmpty variant="outlined" itemArr={['p', 'q']} parentcall={onChangeItem} selectedValue={userData.sourced_for} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Associate coach</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomRadioButton id="associate_coach" itemArr={["Yes", "No"]} parentcall={OnChangeRadioStatus} selectedValue={userData.associate_coach} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Associate Role</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="associate_role" displayEmpty variant="outlined" itemArr={['c', 'd']} parentcall={onChangeItem} selectedValue={userData.associate_role} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Associate Bio</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="associate_bio" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.associate_bio} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Role</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="partner_roles_attributes" displayEmpty variant="outlined" itemArr={['y', 'z']} parentcall={onChangeItem} selectedValue={userData.partner_roles_attributes} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Resume</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <label htmlFor="upload-photo">
                                <input id="resume" accept="application/pdf, application/vnd.ms-excel,image/gif, image/jpeg" style={{ display: 'none' }} name="upload-photo" type="file" />
                                <Button color="secondary" variant="contained" component="span" style={{ fontSize: 12 }}><CloudUpload style={{ marginRight: 10 }} />Upload</Button>
                            </label>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center"  >
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={8} >

                            <Grid container direction="row" alignItems="center">
                                {[1, 2].map(() => <Grid item xs={5} >
                                    <div style={{ marginRight: 15, height: 100, backgroundColor: "#ddd", marginBlock: 10, borderRadius: 5 }}>
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
            <Header />

        </div>
    )
}

export default BasicInfo
