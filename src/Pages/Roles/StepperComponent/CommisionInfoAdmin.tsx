import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
import CustomSelect from '../../../Components/CustomSelect'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'

const CommisionInfoAdmin = (props: any) => {
    const classes = useStyles();
    const data = {
        commission: true,
        commission_rate: '',
        commission_currency: '',
        commission_notes: '',
        commission_period: '',
        commission_total: '',

    }
    const [userData, setUserData] = useState(data);
    const global_data = useSelector((state: any) => state.stepperReducer);
    const dispatch = useDispatch();

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any) => {
        if (selectedItemValue.id == "commission") {
            setUserData({ ...userData, [selectedItemValue.id]: (selectedItemValue.value == "Yes" ? true : false) })
        } else {
            setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
        }
        console.log(selectedItemValue)
    };
    const onChangeDate = (selectedItemValue: any, id: any) => {
        setUserData({ ...userData, [id]: selectedItemValue })
    };

    useEffect(() => {
        if (global_data.Commision_info_admin_id != "") {
            AdminPartnerClient.CommisionInfoAdmin(
                global_data.Commision_info_admin_id,
                { partner_profile_id: global_data.partner_profile },
                'GET'
            ).then((response: any) => {
                setUserData(response.data.attributes)

            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const onSubmit = () => {
        console.log(userData)
        if (global_data.Commision_info_admin_id == "") {
            AdminPartnerClient.CommisionInfoAdmin(
                '',
                { partner_profile_id: global_data.partner_profile, ...userData },
                'POST'
            ).then((response: any) => {
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { Commision_info_admin_id: response.data.id } });
                props.parentHandleNext(props.activeIndex + 1)
            });

        } else {
            AdminPartnerClient.CommisionInfoAdmin(
                global_data.Commision_info_admin_id,
                { ...userData },
                "PUT"
            ).then(() => {
                props.parentHandleNext(props.activeIndex + 1)
            });
        }

    }
    return (
        <div>
            <Header parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="commission" displayEmpty variant="outlined" itemArr={['Yes', 'No']} parentcall={onChangeItem} defaultValue={userData.commission ? "Yes" : "No"} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Rate</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="commission_rate" variant="outlined" placeholder="Email" parentcall={setInputState} value={userData.commission_rate} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Currency</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="commission_currency" variant="outlined" placeholder="Phone" parentcall={setInputState} value={userData.commission_currency} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Notes</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="commission_notes" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.commission_notes} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Period</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="commission_period" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.commission_period} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Commission Total</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="commission_total" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.commission_total} />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}
export default CommisionInfoAdmin
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
        paddingRight: '10px'
    },
}))
