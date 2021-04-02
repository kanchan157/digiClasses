import { Card, Grid, InputLabel, makeStyles } from '@material-ui/core'
import CustomDatePicker from '../../../Components/CustomDatePicker';
import CustomInput from '../../../Components/CustomInput';
import CustomSelect from '../../../Components/CustomSelect'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Header from './header';
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import InputWithDropdownComponent from '../../../Components/FormGenerator/input_with_dropdown';

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
        if (global_data.partner_profile != "") {
            AdminPartnerClient.OtherQuestions_get({ partner_profile_id: global_data.partner_profile }).then((response: any) => {
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

    const onSubmit = () => {
        // var pdata = {
        //     partner_profile_id: global_data.partner_profile,
        //     ...userData
        // }
        AdminPartnerClient.OtherQuestions({ partner_profile_id: global_data.partner_profile, ...userData }).then((response: any) => {
            console.log(response)

            // props.parentSetProfileId(response.id)
            global_data_common.role == 'admin' && props.parentHandleNext(props.activeIndex + 1)
        });
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
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={10}>
                                    <CustomInput id="coaching_hour_rate" variant="outlined" placeholder="Mr" parentcall={setInputState} 
                                    defaultValue={userData.coaching_hour_rate} />
                                </Grid>
                                <Grid item xs={2}>
                                    <CustomSelect id="coach_currency_type" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} 
                                    parentcall={onChangeItem} selectedValue={userData.coaching_hour_rate} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Coaching hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={10}>
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
                                        selectValue: userData.coaching_hour_rate
                                    }} /></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Facilitation day rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={10}>
                                    <CustomInput id="facilitator_day_rate" variant="outlined" placeholder="Mr" parentcall={setInputState} 
                                    defaultValue={userData.facilitator_day_rate} />
                                </Grid>
                                <Grid item xs={2}>
                                    <CustomSelect id="facilitator_currency_type" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.facilitator_currency_type} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Assessment hourly rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={10}>
                                    <CustomInput id="assessor_hour_rate" variant="outlined" placeholder="Mr" parentcall={setInputState} defaultValue={userData.assessor_hour_rate} />
                                </Grid>
                                <Grid item xs={2}>
                                    <CustomSelect id="assessor_currency_type" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.assessor_currency_type} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Travel expenses</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="travel_expenses" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.travel_expenses} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Psychometric costs</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="psychometric_costs" variant="outlined" placeholder="Mr" parentcall={setInputState} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Local TX areas</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="local_tx_areas" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.local_tx_areas} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Delivery method</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="delivery_methods" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.delivery_methods} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Next Available Date</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="available_date" variant="outlined" parentcall={setInputState} selectedValue={userData.available_date} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Considered Levels</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="considered_levels" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.considered_levels} />
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />

        </div>
    )
}

export default OtherQuestions
