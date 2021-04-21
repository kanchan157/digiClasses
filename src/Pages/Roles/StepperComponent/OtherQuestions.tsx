import { Card, Grid, InputLabel, makeStyles } from '@material-ui/core'
import CustomDatePicker from '../../../Components/CustomDatePicker';
import CustomInput from '../../../Components/CustomInput';
import CustomSelect from '../../../Components/CustomSelect'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from './header';
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import InputWithDropdownComponent from '../../../Components/FormGenerator/input_with_dropdown';
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions';

const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))
function OtherQuestions(props: any) {
    const classes = useStyles();

    const global_data = useSelector((state: any) => state.stepperReducer);
    console.log(global_data)
    const global_data_common = useSelector((state: any) => state.commonReducer);
    const dispatch = useDispatch();

    const data = {
        assessor_currency_type: '',
        assessor_hour_rate: '',
        available_date: '',
        coaching_hour_rate: '',
        coach_currency_type: '',
        facilitator_currency_type: '',
        facilitator_day_rate: '',
        local_tx_areas: '',
        psychometric_costs: '',
        travel_expenses: '',
        delivery_methods: '',
        considered_levels: '',

    }
    const [userData, setUserData] = useState(data);

    useEffect(() => {
        if (global_data.partner_extra_question_id != "") {
            AdminPartnerClient.OtherQuestions_get(global_data.partner_extra_question_id ,{ partner_profile_id: global_data.partner_profile }).then((response: any) => {
                setUserData(response.data.attributes)

            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const setInputState = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue, inputId)
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        console.log(selectedItemValue, inputId)
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    };
    const setInputWithDropdownState = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue, inputId)
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    // const onChangeItem = (selectedItemValue: any, inputId: any) => {
    //     console.log(selectedItemValue, inputId)
    //     setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    // };

    const onSubmit = () => {
        // var pdata = {
        //     partner_profile_id: global_data.partner_profile,
        //     ...userData
        // }
        if (global_data.partner_extra_question_id == "") {

            AdminPartnerClient.OtherQuestions({ partner_profile_id: global_data.partner_profile, ...userData }).then((response: any) => {
                console.log(response)
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { partner_extra_question_id: response.data.id } });
    
                // props.parentSetProfileId(response.id)
                // global_data_common.role == 'admin' && props.parentHandleNext(props.activeIndex + 1)
                 props.parentHandleNext(props.activeIndex + 1)
            });
        }else{
            AdminPartnerClient.OtherQuestions_put(global_data.partner_extra_question_id,{ partner_profile_id: global_data.partner_profile, ...userData }).then((response: any) => {
                 props.parentHandleNext(props.activeIndex + 1)
            });

        }
    }
    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }

    return (
        <div>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Coaching hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <InputWithDropdownComponent key={0} componentObject={{
                                componentType: "inputWithDropdown",
                                label: "",
                                inputName: "revenue",
                                selectName: "revenue_currency",
                                inputPlaceholder: "$00,000,000",
                                selectPlaceholder: "USD",
                                apiVariable: "currencies",
                                handleInputChange: setInputState,
                                handleSelectChange: onChangeItem,
                                inputValue: userData.coaching_hour_rate,
                                selectValue: userData.coach_currency_type
                            }} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Facilitation day rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <InputWithDropdownComponent key={1} componentObject={{
                                componentType: "inputWithDropdown",
                                label: "",
                                inputName: "revenue",
                                selectName: "revenue_currency",
                                inputPlaceholder: "$00,000,000",
                                selectPlaceholder: "USD",
                                apiVariable: "currencies",
                                handleInputChange: setInputState,
                                handleSelectChange: onChangeItem,
                                inputValue: userData.facilitator_day_rate,
                                selectValue: userData.facilitator_currency_type
                            }} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Assessment hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <InputWithDropdownComponent key={1} componentObject={{
                                componentType: "inputWithDropdown",
                                label: "",
                                inputName: "revenue",
                                selectName: "revenue_currency",
                                inputPlaceholder: "$00,000,000",
                                selectPlaceholder: "USD",
                                apiVariable: "currencies",
                                handleInputChange: setInputState,
                                handleSelectChange: onChangeItem,
                                inputValue: userData.assessor_hour_rate,
                                selectValue: userData.assessor_currency_type
                            }} />

                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Travel expenses</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="travel_expenses" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.travel_expenses} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Psychometric costs</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="psychometric_costs" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.psychometric_costs}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Local TX areas</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="local_tx_areas" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.local_tx_areas} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Delivery method</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="delivery_methods" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.delivery_methods} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Next Available Date</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="available_date" style={{textTransform:"uppercase!important"}} variant="outlined" parentcall={setInputState} defaultValue={userData.available_date} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Considered Levels</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="considered_levels" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.considered_levels} />
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />

        </div>
    )
}

export default OtherQuestions
