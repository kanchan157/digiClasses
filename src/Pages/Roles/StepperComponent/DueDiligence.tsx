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

function DueDiligence(props: any) {

    const data = {
        assignee_id: '',
        internal_notes: '',
        partner_notes: 'asdadas',
        actions: '',
        partner_profile_id: 37,
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


    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        console.log(selectedItemValue, inputId)
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    };
    const onScheduleChangeItem = (selectedItemValue: any) => {
        scheduleData[0][selectedItemValue.id] = selectedItemValue.value;
        scheduleData[0][selectedItemValue.id] !="" ? setSubmitClickFlag(false) : setSubmitClickFlag(true)

    };
    const onScheduleInputState = (inputStateValue: any, inputId: any) => {
        scheduleData[0][inputId] = inputStateValue;
        scheduleData[0][inputId] !="" ? setSubmitClickFlag(false) : setSubmitClickFlag(true)

    };

    useEffect(() => {
        if (global_data.due_diligence_id != "") {
            AdminPartnerClient.DueDiligenceCall_get({ id: global_data.due_diligence_id }).then((response: any) => {
                console.log(response.data.length)
                setUserData(response.data.attributes)
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const onSubmit = () => {
        var flag = true;
        console.log(scheduleData[0])
        if (scheduleData[0].available_date == "" || scheduleData[0].to == "" || scheduleData[0].from == "") {
            flag = false;
        }
        if (flag) {
            setSubmitClickFlag(false)
            if (global_data.due_diligence_id != "") {
                AdminPartnerClient.DueDiligenceCall({ due_diligence_available_slots_attributes: (scheduleData), ...userData }).then((response: any) => {
                    dispatch({ type: GLOBAL_STEPPER_DATA, payload: { due_diligence_id: response.data.id } });
                    props.parentHandleNext(props.activeIndex + 1)
                });

            } else {
                AdminPartnerClient.DueDiligenceCall_put(global_data.due_diligence_id, { due_diligence_available_slots_attributes: (scheduleData), ...userData }).then(() => {
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
                                <InputLabel className={classes.labelText}>Assignee</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomSelect id="assignee_id" displayEmpty variant="outlined" itemArr={[1, 2]} parentcall={onChangeItem} defaultValue={userData.assignee_id} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Schedule the call*</InputLabel>
                            </Grid>
                            <Grid item xs={4} style={{ padding: 0, paddingRight: 0 }}>
                                <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                                    <Grid item xs={12} style={{ marginBottom: 10 }}>
                                        <InputLabel className={classes.labelText}>Date</InputLabel>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomDatePicker id="available_date" style={{ textTransform: "uppercase !important" }} helperText={(submitClickFlag && scheduleData[0].available_date == "") ? "* Please enter required field" : ""} error={(submitClickFlag && scheduleData[0].available_date == "") ? true : false} dataIndex="0" variant="outlined" parentcall={onScheduleInputState} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} style={{ padding: 10, paddingRight: 0 }}>
                                <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                                    <Grid item xs={12} style={{ marginBottom: 10 }}>
                                        <InputLabel className={classes.labelText}>Time</InputLabel>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomTimePicker id="to" variant="outlined" dataIndex="0" helperText={(submitClickFlag && scheduleData[0].to == "") ? " " : ""} error={(submitClickFlag && scheduleData[0].to == "") ? true : false} parentcall={onScheduleChangeItem} />
                                    </Grid>
                                    <Grid item xs={5} style={{ marginLeft: 10 }}>
                                        <CustomTimePicker id="from" displayEmpty variant="outlined" dataIndex="0" parentcall={onScheduleChangeItem} helperText={(submitClickFlag && scheduleData[0].from == "") ? " " : ""} error={(submitClickFlag && scheduleData[0].from == "") ? true : false} selectedValue={""} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText} style={{ marginTop: 20, }} >Additional notes</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="internal_notes" variant="outlined" placeholder="Free Text" multiline={true} rows={4} parentcall={setInputState} defaultValue={userData.internal_notes} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.labelText}>Actions</InputLabel>
                            </Grid>
                            <Grid item xs={8}>
                                <CustomInput id="actions" variant="outlined" placeholder="Free Text" multiline={true} parentcall={setInputState} defaultValue={userData.actions} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            }
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />
        </div>
    )
}

export default DueDiligence

const useStyles = makeStyles(() => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))
