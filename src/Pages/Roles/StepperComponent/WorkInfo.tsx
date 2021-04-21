// import classes from '*.module.css'
import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomTimePicker from '../../../Components/CustomTimePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomSelect from '../../../Components/CustomSelect'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header';
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions'


function WorkInfo(props: any) {
    const data = {

        internal_job_title_id: "",
        internal_job_role: "",
        person_status: "",
        pa_name: "",
        pa_contact_details: "",
        address_line1: "",
        city: "",
        county: "",
        office_post_code: "",
        zipcode: "",
        business_phone: "",
        business_mobile_number: "",
        location_radius: "",
    }
    var scheduleData: any = [{
        available_date: "",
        from: "",
        to: ""
    }];

    const classes = useStyles();
    const dispatch = useDispatch();
    const global_data = useSelector((state: any) => state.stepperReducer);
    const [userData, setUserData] = useState(data);
    const [submitClickFlag, setSubmitClickFlag] = React.useState(false);
    const [flag, setFlag] = React.useState(false);


    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        console.log(selectedItemValue, inputId)
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    };

    useEffect(() => {
        if (global_data.work_info_id != "") {
            AdminPartnerClient.WorkInfo_get(global_data.work_info_id, { partner_profile_id: global_data.partner_profile }).then((response: any) => {
                console.log(response.data.attributes);
                setUserData(
                    {
                        ...userData,
                        address_line1: response.data.attributes.address.address_line1,
                        internal_job_title_id: response.data.attributes.internal_job_title.id,
                        zipcode: response.data.attributes.address.zipcode,
                        city: response.data.attributes.address.city,
                        county: response.data.attributes.address.county,
        
                        internal_job_role: response.data.attributes.internal_job_role,
                        person_status: response.data.attributes.person_status,
                        pa_name: response.data.attributes.pa_name,
                        pa_contact_details: response.data.attributes.pa_contact_details,
                        office_post_code: response.data.attributes.office_post_code,
                        business_phone: response.data.attributes.business_phone,
                        business_mobile_number: response.data.attributes.business_mobile_number,
                        location_radius: response.data.attributes.location_radius,
                    })
                // setFlag(true)
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [flag])

    const onSubmit = () => {
        var flag = true;
        console.log(userData)
        if (userData.internal_job_title_id == "" || userData.internal_job_role == "" || userData.person_status == "" || userData.city == "" || userData.county == "" ||  userData.zipcode == "") {
            flag = false;
        }
        alert(flag)
        if (flag) {
            setSubmitClickFlag(false)
            if (global_data.work_info_id == "") {
                AdminPartnerClient.WorkInfo({ partner_profile_id: global_data.partner_profile, ...userData }).then((response: any) => {
                    dispatch({ type: GLOBAL_STEPPER_DATA, payload: { work_info_id: response.data.id } });
                    props.parentHandleNext(props.activeIndex + 1)
                });

            } else {
                AdminPartnerClient.WorkInfo_put(global_data.work_info_id, userData).then(() => {
                    props.parentHandleNext(props.activeIndex + 1)
                });
            }
        } else {
            setSubmitClickFlag(true)
        }
    }

    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }
    return (

        <div>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />
            {
                userData &&
                <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 20 }}>
                    <Grid item xs={10}>

                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Internal Job Title eg CEO</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomSelect id="internal_job_title_id" displayEmpty variant="outlined" itemArr={[1, 2]} parentcall={onChangeItem} helperText={(submitClickFlag && (userData.internal_job_title_id == "" || userData.internal_job_title_id == undefined)) ? "* Please enter title" : ""} error={(submitClickFlag && userData.internal_job_title_id == "") ? true : false} defaultValue={userData.internal_job_title_id} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Internal Job Role</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomSelect id="internal_job_role" displayEmpty variant="outlined" itemArr={[1, 2]} parentcall={onChangeItem} helperText={(submitClickFlag && (userData.internal_job_role == "" || userData.internal_job_role == undefined)) ? "* Please enter title" : ""} error={(submitClickFlag && userData.internal_job_role == "") ? true : false} defaultValue={userData.internal_job_role} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Person Status</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomSelect id="person_status" displayEmpty variant="outlined" itemArr={["Retired", "left", "current"]} parentcall={onChangeItem} helperText={(submitClickFlag && (userData.person_status == "" || userData.person_status == undefined)) ? "* Please enter title" : ""} error={(submitClickFlag && userData.person_status == "") ? true : false} defaultValue={userData.person_status} />

                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>PA name</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="pa_name" variant="outlined" placeholder="First Name" parentcall={setInputState} value={userData.pa_name} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>PA Contact details</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="pa_contact_details" variant="outlined" placeholder="First Name" parentcall={setInputState} value={userData.pa_contact_details} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Office Street</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="address_line1" variant="outlined" placeholder="First Name" parentcall={setInputState} value={userData.address_line1} />
                            </Grid>
                        </Grid>

                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Office City</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomSelect id="city" displayEmpty variant="outlined" itemArr={[1, 2]} parentcall={onChangeItem} helperText={(submitClickFlag && (userData.city == "" || userData.city == undefined)) ? "* Please enter title" : ""} error={(submitClickFlag && userData.city == "") ? true : false} defaultValue={userData.city} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Office County</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomSelect id="county" displayEmpty variant="outlined" itemArr={[1, 2]} parentcall={onChangeItem} helperText={(submitClickFlag && (userData.county == "" || userData.county == undefined)) ? "* Please enter title" : ""} error={(submitClickFlag && userData.county == "") ? true : false} defaultValue={userData.county} />
                            </Grid>
                        </Grid>



                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Office Post Code</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="office_post_code" variant="outlined" placeholder="Office Post Code" helperText={(submitClickFlag && userData.office_post_code == "") ? "* Please enter username" : ""} error={(submitClickFlag && userData.office_post_code == "") ? true : false} parentcall={setInputState} value={userData.office_post_code} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Office Zip Code</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="zipcode" variant="outlined" placeholder="Office Zip Code" helperText={(submitClickFlag && userData.zipcode == "") ? "* Please enter username" : ""} error={(submitClickFlag && userData.zipcode == "") ? true : false} parentcall={setInputState} value={userData.zipcode} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Office Phone</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="business_phone" variant="outlined" placeholder="Office Phone" helperText={(submitClickFlag && userData.business_phone == "") ? "* Please enter username" : ""} error={(submitClickFlag && userData.business_phone == "") ? true : false} parentcall={setInputState} value={userData.business_phone} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Office Mobile</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="business_mobile_number" variant="outlined" placeholder="Office Mobile" helperText={(submitClickFlag && userData.business_mobile_number == "") ? "* Please enter username" : ""} error={(submitClickFlag && userData.business_mobile_number == "") ? true : false} parentcall={setInputState} value={userData.business_mobile_number} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Location Radius</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="location_radius" variant="outlined" placeholder="Location Radius"  parentcall={setInputState} value={userData.location_radius} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            }
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />
        </div>
    )

}

export default WorkInfo
const useStyles = makeStyles(() => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))
