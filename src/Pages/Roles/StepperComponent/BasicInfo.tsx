import { Button, Card, Grid, InputLabel, makeStyles, TextField, Typography } from '@material-ui/core'
import { Cancel, CloudUpload } from '@material-ui/icons';
import { DatePicker } from '@material-ui/pickers';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ObjectToFormdata } from '../../../Common/Utils/common_utils';
import CustomDatePicker from '../../../Components/CustomDatePicker';
import CustomInput from '../../../Components/CustomInput';
import CustomMultiSelectAutoComplete from '../../../Components/CustomMultiSelectAutoComplete';
import CustomRadioButton from '../../../Components/CustomRadioButton';
import CustomSelect from '../../../Components/CustomSelect';
import DateComponent from '../../../Components/FormGenerator/datepicker_component';
import DatePickerSelectComponent from '../../../Components/FormGenerator/select_with_datepicker_component';
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
    const [defaultRoleArr, setDefaultRoleArr]: any = useState([]);

    console.log(global_data.partner_profile)
    const partnerRoleArr = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II'];
    const data = {
        // role: global_data_common.role,
        first_name: '',
        middle_name: '',
        last_name: '',
        title: '',
        phone: '',
        email: '',
        initial_contact_date: '',
        referred_by: "Self",
        sourced_for: "",
        associate_coach: true,
        associate_role: '',
        associate_bio: '',
        organisation_name: "",
        city: "",
        country: "",
        // partner_resumes_att: [2]

    }
    const [userData, setUserData] = useState(data);
    const [partnerRolesArr, setPartnerRolesArr]: any = useState([]);

    const setInputState = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue, inputId)
        if (inputId == "associate_coach") {
            inputStateValue = inputStateValue == "Yes" ? true : false
        }
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        console.log(selectedItemValue, inputId)
        if (selectedItemValue.id == "sourced_for") {
            selectedItemValue.value = selectedItemValue.value == "Yes" ? true : false
        }
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    };
    const handleDateChange = (selectedItemValue: any, inputId: any) => {
        console.log(selectedItemValue, inputId)
        // setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    };
    const onChangeMultipleItem = (inputStateValue: any, inputId: any) => {
        partnerRolesArr.length = 0
        console.log(inputStateValue, inputId);
        if (inputId == "partnerRolesArr") {
            setPartnerRolesArr(partnerRolesArr.concat((inputStateValue)))
        }
        console.log(partnerRolesArr.length)
        partnerRolesArr.length == 0 ? setSubmitClickFlag(false) : setSubmitClickFlag(true)
    }

    const onSubmit = () => {
        var flag = true;
        console.log(userData.title)
        if (userData.first_name == "" || userData.email == "" || userData.phone == "" || partnerRolesArr.length == 0) {
            flag = false;
        }


        if (flag) {
            setSubmitClickFlag(false)
            var roleLocalArr = [];
            roleLocalArr.push(partnerRolesArr)
            AdminPartnerClient.BasicInfo(ObjectToFormdata({ ...userData })).then((response: any) => {
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
        // getSource();
    }, [])

    const getBasicInfo = () => {
        if (global_data.partner_profile != "") {
            AdminPartnerClient.BasicInfo_get('', global_data.partner_profile).then((response: any) => {
                alert("adasd")
                // props.parentSetProfileId(response.data.id, response.data.attributes.acuity_people_profile_id);
                // console.log(response.data.attributes)
                setUserData(response.data.attributes)
                if (response.data.attributes.partner_roles.length > 0) {
                    response.data.attributes.partner_roles.map((options: any) => {
                        console.log(options.role)
                        setDefaultRoleArr(defaultRoleArr.push(options.role));
                        // setPartnerRolesArr(defaultRoleArr)
                        console.log(defaultRoleArr)
                    })
                }
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
                            <CustomSelect id="title" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} helperText={(submitClickFlag && (userData.title == "" || userData.title == undefined)) ? "Please enter title" : ""} value={userData.title} />
                        </Grid>

                    </Grid>
                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                        <Grid item xs={4} >
                            <InputLabel className={classes.labelText} style={{ marginTop: 20 }}>Full Name*</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                                <Grid item xs={12} >
                                    <CustomInput id="first_name" variant="outlined" placeholder="First Name" helperText={(submitClickFlag && userData.first_name == "") ? "Please enter username" : ""} error={(submitClickFlag && userData.first_name == "") ? true : false} parentcall={setInputState} value={userData.first_name} />
                                </Grid>
                            </Grid>

                            <Grid container direction="row" alignItems="center" justify="space-between">
                                <Grid item xs={4} >
                                    <CustomInput id="middle_name" variant="outlined" placeholder="Middle Name" parentcall={setInputState} value={userData.middle_name} />
                                </Grid>
                                <Grid item xs={7} >
                                    <CustomInput id="last_name" variant="outlined" placeholder="Last Name" parentcall={setInputState} value={userData.last_name} />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Email*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="email" variant="outlined" placeholder="Email" parentcall={setInputState} helperText={(submitClickFlag && userData.email == "") ? "Please enter email" : ""} error={(submitClickFlag && userData.email == "") ? true : false} value={userData.email} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Phone*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="phone" variant="outlined" placeholder="Phone" parentcall={setInputState} helperText={(submitClickFlag && userData.phone == "") ? "Please enter phone" : ""} error={(submitClickFlag && userData.phone == "") ? true : false} value={userData.phone} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Organization Name</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="organisation_name" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.organisation_name} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date of initial contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <DateComponent key={'001'} componentObject={
                                {
                                    "componentType": "datePicker",
                                    "required": true,
                                    "label": "",
                                    "name": "start_date_with_client",
                                    "placeholder": "Start Date",
                                    "helperText": false,
                                    "indexKey": "0-0",
                                    "index": "initial_contact_date",
                                    handleChange: setInputState,
                                    value: userData.initial_contact_date
                                }
                            }
                            />
                            {/* <CustomDatePicker id="initial_contact_date" placeholder="DD-MM-YYYY" variant="outlined" parentcall={setInputState} value={userData.initial_contact_date} /> */}
                        </Grid>
                    </Grid>
                    {/* <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Location of contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contact_location" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.contact_location} />
                        </Grid>
                    </Grid> */}
                    {/* <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Source</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="source" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} value={userData.source} />
                        </Grid>
                    </Grid> */}
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Sourced for Assignment</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="sourced_for" displayEmpty variant="outlined" itemArr={["Yes", "No"]} parentcall={onChangeItem} defaultValue={userData.sourced_for} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate coach</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomRadioButton id="associate_coach" itemArr={["Yes", "No"]} parentcall={setInputState} index={userData.associate_coach ? 0 : 1} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate Role</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="associate_role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.associate_role} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate Bio</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="associate_bio" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.associate_bio} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Role*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomMultiSelectAutoComplete id="partnerRolesArr" itemArr={partnerRoleArr} helperText={(submitClickFlag && (partnerRolesArr.length == 0 || defaultRoleArr.length == 0)) ? "Please enter role" : ""} error={(submitClickFlag && partnerRolesArr.length == 0) ? true : false} parentcall={onChangeMultipleItem} defaultValue={defaultRoleArr} />
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
                                        <CustomInput id="" variant="outlined" placeholder="Address Line 1" parentcall={setInputState} value={userData.first_name} />
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }} >
                                    <Grid item xs={12} >
                                        <CustomInput id="" variant="outlined" placeholder="Address Line 2" parentcall={setInputState} />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" alignItems="center" >
                                    <Grid item xs={6}>
                                        <CustomSelect id="city" displayEmpty variant="outlined" itemArr={['India', 'Pakistan']} parentcall={onChangeItem} value={userData.city} />
                                    </Grid>
                                    <Grid item xs={6} style={{ padding: 10, paddingRight: 0 }}>
                                        <CustomSelect id="country" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} value={userData.country} />
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
