import { Button, Card, Grid, InputLabel, TextField, Typography } from '@material-ui/core'
import { Cancel, CloudUpload } from '@material-ui/icons';
import React, { useState } from 'react'
import CustomDatePicker from '../../../Components/CustomDatePicker';
import CustomInput from '../../../Components/CustomInput';
import CustomRadioButton from '../../../Components/CustomRadioButton';
import CustomSelect from '../../../Components/CustomSelect';
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import Header from './header';


function BasicInfo(props:any) {

    const data = {
        // id: '',
        // first_name: '',
        // middle_name: '',
        // last_name: '',
        // associate_coach: '',
        // associate_role: '',
        // associate_bio: '',
        // contact_location: '',
        // phone: '',
        // email: '',
        // initial_contact_date: '',
        // referred_by: '',
        // resume: '',
        // acuity_people_profile_id: '',
        // nda_status: '',
        // wwa_status: '',
        // sourced_for: '',
        // partner_roles_attributes: '',
        // partner_resumes_attributes: '',
        // address_line1: '',
        // address_line2: '',
        // zipcode: '',
        // dob: '',
        // facebook: '',
        // gender: '',
        // linkedin: '',
        // organisation_id: '',
        // secondary_email: '',
        // skype: '',
        // suffix: '',
        // title: '',
        // twitter: '',
        // visa_status: '',
        // work_info: '',
        // city: '',
        // country_list_id: '',
        // county: '',
        // nationality_list_id: '',
        // website: [],
        role: "admin",
        first_name: '',
        middle_name: '',
        last_name: '',
        title: '',

        phone: '',
        email: '',
        initial_contact_date: '',
        organisation_id: '',
        secondary_email: '',
        contact_locationtest: '',
        referred_bySelf: '',
        sourced_fortrue: '',
        associate_coachtrue: '',
        associate_roletest: '',
        associate_biotest: '',
        partner_roles_attributes: {role:[2]},
        partner_resumes_att:[2]

    }
    const [userData, setUserData] = useState(data);
    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: selectedItemValue.value })
    };

    const onSubmit = () => {
        AdminPartnerClient.BasicInfo(userData).then((response: any) => {
            props.parentSetProfileId(response.data.id,response.data.attributes.acuity_people_profile_id)
        });
    }


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
                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 30 }}>
                        <Grid item xs={4} >
                            <InputLabel style={{ marginTop: 30, }}>Address*</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }}>
                                <Grid item xs={12} >
                                    <CustomInput id="" variant="outlined" placeholder="Address Line 1" parentcall={setInputState} />
                                </Grid>
                            </Grid>

                            <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }} >
                                <Grid item xs={12} >
                                    <CustomInput id="" variant="outlined" placeholder="Address Line 2" parentcall={setInputState} />
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
            <Header saveBtnTitle={'Submit'} />

        </div>
    )
}

export default BasicInfo
