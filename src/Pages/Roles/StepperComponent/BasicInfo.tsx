import { Button, Card, Grid, InputLabel, makeStyles, TextField, Typography } from '@material-ui/core'
import { Cancel, CloudUpload } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomDatePicker from '../../../Components/CustomDatePicker';
import CustomInput from '../../../Components/CustomInput';
import CustomMultiSelectAutoComplete from '../../../Components/CustomMultiSelectAutoComplete';
import CustomRadioButton from '../../../Components/CustomRadioButton';
import CustomSelect from '../../../Components/CustomSelect';
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions';
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import Header from './header';
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))


function BasicInfo(props: any) {
    const classes = useStyles();

    const global_data = useSelector((state: any) => state.stepperReducer);
    const global_data_common = useSelector((state: any) => state.commonReducer);
    const dispatch = useDispatch();
    const [submitClickFlag, setSubmitClickFlag] = React.useState(false);

    console.log(global_data.partner_profile)
    const data = {
        role: global_data_common.role,
        first_name: '',
        middle_name: '',
        last_name: '',
        title: '',

        phone: '',
        email: '',
        initial_contact_date: '',
        organisation_id: 1,
        contact_location: '',
        referred_by: '',
        sourced_for: "",
        source: '',
        associate_coach: '',
        associate_role: '',
        associate_bio: '',
        partner_resumes_att: [2]

    }
    const [userData, setUserData] = useState(data);
    const [partnerRolesArr, setPartnerRolesArr] = useState([]);

    const setInputState = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue, inputId)
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        console.log(selectedItemValue, inputId)
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    };
    const onChangeMultipleItem = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue, inputId);
        if (inputId == "partnerRolesArr") {
            setPartnerRolesArr(partnerRolesArr.concat(inputStateValue))
        }
    }

    const onSubmit = () => {
        var flag = true;
        if (userData.first_name == "") {
            flag = false;
        }
        if (userData.email == "") {
            flag = false;
        }


        if (flag) {
            setSubmitClickFlag(false)
            AdminPartnerClient.BasicInfo({ partner_roles_attributes: partnerRolesArr, ...userData }).then((response: any) => {
                props.parentSetProfileId(response.data.id, response.data.attributes.acuity_people_profile_id);
                props.parentHandleNext(props.activeIndex + 1)
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { partner_profile: response.data.id } });

            }).catch(error => alert(JSON.stringify(error.error)));
        } else {
            setSubmitClickFlag(true)
        }
    }

    useEffect(() => {
        getBasicInfo();
        getSource();
    }, [])

    const getBasicInfo = () => {
        if (global_data.partner_profile != "") {
            AdminPartnerClient.BasicInfo_get('', global_data.partner_profile).then((response: any) => {
                props.parentSetProfileId(response.data.id, response.data.attributes.acuity_people_profile_id);
                setUserData(response.data.attributes)
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }
    const getSource = () => {
        AdminPartnerClient.source_get().then((response: any) => {
            // props.parentSetProfileId(response.data.id, response.data.attributes.acuity_people_profile_id);
            // setUserData(response.data.attributes)
            console.log(response)
        }).catch(error => alert(JSON.stringify(error.errors)));
    }

    return (
        <div>
            <Header saveBtnTitle={'Save & Proceed'} isBack={false} parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 20 }}>
                <Grid item xs={10}>
                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }} >

                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} style={{ marginTop: 20 }}>Title*</InputLabel>
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelect id="title" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.title} />
                        </Grid>

                    </Grid>
                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                        <Grid item xs={4} >
                            <InputLabel className={classes.labelText} style={{ marginTop: 20 }}>Full Name*</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                                <Grid item xs={12} >
                                    <CustomInput id="first_name" variant="outlined" placeholder="First Name" helperText={submitClickFlag ? "Please enter username." : ""} error={submitClickFlag} parentcall={setInputState} defaultValue={userData.first_name} />
                                </Grid>
                            </Grid>

                            <Grid container direction="row" alignItems="center" justify="space-between">
                                <Grid item xs={4} >
                                    <CustomInput id="middle_name" variant="outlined" placeholder="Middle Name" parentcall={setInputState} defaultValue={userData.middle_name} />
                                </Grid>
                                <Grid item xs={7} >
                                    <CustomInput id="last_name" variant="outlined" placeholder="Last Name" parentcall={setInputState} defaultValue={userData.last_name} />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Email*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="email" variant="outlined" placeholder="Email" parentcall={setInputState} defaultValue={userData.email} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Phone*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="phone" variant="outlined" placeholder="Phone" parentcall={setInputState} defaultValue={userData.phone} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Organization Name</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="organisation_name" variant="outlined" placeholder="Name" parentcall={setInputState} defaultValue={userData.organisation_id} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date of initial contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="initial_contact_date" variant="outlined" parentcall={setInputState} selectedValue={userData.initial_contact_date} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Location of contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contact_location" variant="outlined" placeholder="Name" parentcall={setInputState} defaultValue={userData.contact_location} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Source</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="source" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.source} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Sourced for Assignment</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="sourced_for" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.sourced_for} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate coach</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomRadioButton id="associate_coach" itemArr={["Yes", "No"]} parentcall={setInputState} selectedValue={userData.associate_coach} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate Role</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="associate_role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.associate_role} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate Bio</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="associate_bio" variant="outlined" placeholder="Name" parentcall={setInputState} defaultValue={userData.associate_bio} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Role*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomMultiSelectAutoComplete id="partnerRolesArr" parentcall={onChangeMultipleItem} />
                            {/* <CustomSelect id="partner_roles_attributes" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.partner_roles_attributes} /> */}
                        </Grid>
                    </Grid>
                    {
                        global_data_common.role == "admin" &&

                        <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                            <Grid item xs={4} >
                                <InputLabel className={classes.labelText} style={{ marginTop: 20, }}>Address*</InputLabel>
                            </Grid>
                            <Grid item xs={8} >
                                <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }}>
                                    <Grid item xs={12} >
                                        <CustomInput id="" variant="outlined" placeholder="Address Line 1" parentcall={setInputState} defaultValue={userData.first_name} />
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
                    }
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Resume</InputLabel>
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
            <Header saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} />

        </div>
    )
}

export default BasicInfo
