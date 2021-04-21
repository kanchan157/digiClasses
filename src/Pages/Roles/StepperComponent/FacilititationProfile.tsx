import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
// import CustomSelect from '../../../Components/CustomSelect'
import Header from './header'
// import CustomMultiSelectAutoComplete from '../../../Components/CustomMultiSelectAutoComplete'
import CustomSelect from '../../../Components/CustomSelect'
import CustomMultiSelectAutoComplete from '../../../Components/CustomMultiSelectAutoComplete'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions'
import AdminPartnerClient from '../../../Service/Admin/partner_services'


const FacilitationProfile = (props: any) => {
    const classes = useStyles();
    const data = {
        Facilitation_exp_overview: '',
        topics: '',
        representative_facilitation_programmes: '',
        facilitation_clients: '',


    }
    const [userData, setUserData] = useState(data);
    const [partnerRolesArr, setPartnerRolesArr]: any = useState([]);
    const partnerDummyRoleArr = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II'];
    const global_data = useSelector((state: any) => state.stepperReducer);
    const dispatch = useDispatch();


    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any) => {
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
        console.log(selectedItemValue)
    };
    const onChangeMultipleItem = (inputStateValue: any, inputId: any) => {
        partnerRolesArr.length = 0
        if (inputId == "areas_of_expertise_attribute") {
            setPartnerRolesArr(partnerRolesArr.concat((inputStateValue)))
        }
    }

    useEffect(() => {
        if (global_data.facilitation_profile_id != "") {
            AdminPartnerClient.FacilitationProfile(
                global_data.facilitation_profile_id,
                { partner_profile_id: global_data.partner_profile },
                'GET'
            ).then((response: any) => {
                setUserData(response.data.attributes)
                if (response.data.attributes.partner_faci_expertises.length > 0) {
                    partnerRolesArr.length = 0;
                    response.data.attributes.partner_faci_expertises.map((options: any) => {
                        setPartnerRolesArr(partnerRolesArr.push(options.areas_of_expertise));
                    })
                }
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const onSubmit = () => {
        console.log(userData)
        if (global_data.facilitation_profile_id == "") {
            AdminPartnerClient.FacilitationProfile(
                '',
                { partner_profile_id: global_data.partner_profile, areas_of_expertise_attribute: JSON.stringify(partnerRolesArr), ...userData },
                'POST'
            ).then((response: any) => {
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { facilitation_profile_id: response.data.id } });
                props.parentHandleNext(props.activeIndex + 1)
            });

        } else {
            AdminPartnerClient.FacilitationProfile(
                global_data.facilitation_profile_id,
                { areas_of_expertise_attribute: JSON.stringify(partnerRolesArr), ...userData },
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
                            <InputLabel className={classes.labelText}>Facilitation experience overview</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="Facilitation_exp_overview" variant="outlined" placeholder="Email" parentcall={setInputState} value={userData.Facilitation_exp_overview} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Topics</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="topics" variant="outlined" placeholder="Email" parentcall={setInputState} value={userData.topics} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Facilitation areas of expertise</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            {/* <CustomSelect id="areas_of_expertise_attribute" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.areas_of_expertise_attribute} /> */}
                            <CustomMultiSelectAutoComplete id="areas_of_expertise_attribute" itemArr={partnerDummyRoleArr} parentcall={onChangeMultipleItem} defaultValue={partnerRolesArr} />

                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Representative facilitation programmes</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="representative_facilitation_programmes" variant="outlined" placeholder="Phone" parentcall={setInputState} value={userData.representative_facilitation_programmes} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Facilitation clients</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="facilitation_clients" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.facilitation_clients} />
                            {/* <CustomMultiSelectAutoComplete id="facilitation_clients" itemArr={partnerRoleArr} parentcall={onChangeMultipleItem} /> */}

                        </Grid>
                    </Grid>


                </Grid>
            </Grid>

        </div>
    )
}
export default FacilitationProfile
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
        paddingRight: '10px'
    },
}))
