import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ObjectToFormdata } from '../../../Common/Utils/common_utils'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
import CustomSelect from '../../../Components/CustomSelect'
import DateComponent from '../../../Components/FormGenerator/datepicker_component'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'

const QualityAssurance = (props: any) => {
    const classes = useStyles();
    const data = {
        qa_admin_confirmed: "",
        contact_details_for_coachee: "",
        qa_admin_comments: "",
        contacted_date: "",
        reminder_date: "",
        agreed_give_feedback: "",
        comments: "",
        qa_call_date: "",
        qa_feedback: "",
        thanks_email_date: "",
        agreed_give_testimonial: "",
        testimonial: "",
    }
    const [userData, setUserData] = useState(data);
    const global_data = useSelector((state: any) => state.stepperReducer);
    const dispatch = useDispatch();

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const onChangeDate = (selectedItemValue: any, id: any) => {
        setUserData({ ...userData, [id]: selectedItemValue })
    };

    // const onSubmit = () => {
    //     console.log(userData)
    // }

    useEffect(() => {
        getBasicInfo();
        // getSource();
    }, [])

    const getBasicInfo = () => {
        if (global_data.quality_assurance_id != "") {
            AdminPartnerClient.QualityAssurance_get(global_data.quality_assurance_id, { partner_profile_id: global_data.partner_profile}).then((response: any) => {
                setUserData(response.data.attributes)
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }

    const onSubmit = () => {
        var flag = true;

        if (global_data.quality_assurance_id == "") {
            AdminPartnerClient.QualityAssurance(({partner_profile_id: global_data.partner_profile, ...userData })).then((response: any) => {
                props.parentHandleNext(props.activeIndex + 1)
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { quality_assurance_id: response.data.id } });
            }).catch(error => alert(JSON.stringify(error.error)));
        } else {
            AdminPartnerClient.QualityAssurance_put(global_data.quality_assurance_id, ({  ...userData })).then(() => {
                props.parentHandleNext(props.activeIndex + 1)
            }).catch(error => alert(JSON.stringify(error.error)));
        }
    }



    return (
        <div>
            <Header parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>QA Admin confirmed ready to contact Y/N</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="qa_admin_confirmed" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.qa_admin_confirmed} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Contact Y/N</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contact_details_for_coachee" variant="outlined" placeholder="Email" parentcall={setInputState} value={userData.contact_details_for_coachee} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>QA Admin comments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="qa_admin_comments" variant="outlined" placeholder="Phone" parentcall={setInputState} value={userData.qa_admin_comments} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date contacted(to ask if they would take part and provide availability)</InputLabel>
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
                                    "index": "contacted_date",
                                    handleChange: setInputState,
                                    value: userData.contacted_date
                                }
                            }
                            />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date remainder set</InputLabel>
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
                                    "index": "reminder_date",
                                    handleChange: setInputState,
                                    value: userData.reminder_date
                                }
                            }
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Agreed to give feedback Y/N</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="agreed_give_feedback" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.agreed_give_feedback} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Comments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="comments" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.comments} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Contact details for coachee</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contact_details_for_coachee" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.contact_details_for_coachee} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date of QA call</InputLabel>
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
                                    "index": "qa_call_date",
                                    handleChange: setInputState,
                                    value: userData.qa_call_date
                                }
                            }
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>QA Feedback</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="qa_feedback" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.qa_feedback} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Thank you email date would you like to provide a testimonial about their coaching</InputLabel>
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
                                    "index": "thanks_email_date",
                                    handleChange: setInputState,
                                    value: userData.thanks_email_date
                                }
                            }
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Agreed to give named testimonial</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="agreed_give_testimonial" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.agreed_give_testimonial} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Testimonial</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="testimonial" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.testimonial} />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}
export default QualityAssurance
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
        paddingRight: '10px'
    },
}))
