import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '../../../Components/CustomInput'
import CustomMultiSelectAutoComplete from '../../../Components/CustomMultiSelectAutoComplete'
import CustomSelect from '../../../Components/CustomSelect'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'

const CoachingProfileField = (props: any) => {
    const classes = useStyles();
    const repCoachingEngageDummy = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II'];
    const representativeClientsDummy = ['The Shawshank ', 'Godfather', 'The Godfather: II'];
    const dispatch = useDispatch();
    const global_data = useSelector((state: any) => state.stepperReducer);

    const data = {
        overview: '',
        photo: '',
        approach: '',
        background: '',
        expertise_areas: '',
        client_areas_expertise: '',
        client_type: '',
        education_qualification: '',
        languages: '',
        professional_development: '',
        professional_affiliations: '',
        tools: '',
        personal_interests: '',
        client_testimonial: ''

    }

    const [userData, setUserData] = useState(data);
    const [repCoachingEngageArr, setRepCoachingEngage]: any = useState([]);
    const [representativeClientsArr, setRepresentativeClientsArr]: any = useState([]);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        // debugger
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })

        console.log(selectedItemValue)
    };
    const onChangeMultipleItem = (inputStateValue: any, inputId: any) => {
        repCoachingEngageArr.length = 0;
        representativeClientsArr.length = 0;
        if (inputId == "representative_clients") {
            setRepCoachingEngage(repCoachingEngageArr.concat((inputStateValue)))
        }
        if (inputId == "representative_clients") {
            setRepresentativeClientsArr(representativeClientsArr.concat((inputStateValue)))
        }
    }
    useEffect(() => {
        if (global_data.coaching_profile_field_id != "") {
            AdminPartnerClient.CoachingProfileField_get(global_data.coaching_profile_field_id, { partner_profile_id: global_data.partner_profile }).then((response: any) => {
                setUserData(response.data.attributes)
                
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const onSubmit = () => {
        var flag = true;
        console.log(userData)

        if (global_data.coaching_profile_field_id == "") {
            AdminPartnerClient.CoachingProfileField({
                partner_profile_id: global_data.partner_profile,
                representative_clients: JSON.stringify(representativeClientsArr),
                rep_coaching_engage: JSON.stringify(repCoachingEngageArr),
                ...userData
            }).then((response: any) => {
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { coaching_profile_field_id: response.data.id } });
                props.parentHandleNext(props.activeIndex + 1)
            });

        } else {
            AdminPartnerClient.CoachingProfileField_put(global_data.coaching_profile_field_id, {
                representative_clients: JSON.stringify(representativeClientsArr),
                rep_coaching_engage: JSON.stringify(repCoachingEngageArr), 
                ...userData
            }).then(() => {
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
                            <InputLabel className={classes.labelText}>Overview</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="overview" variant="outlined" placeholder="Email" parentcall={setInputState} value={userData.overview} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Photo</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="photo" variant="outlined" placeholder="Email" parentcall={setInputState} value={userData.photo} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Approach</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="approach" variant="outlined" placeholder="Phone" parentcall={setInputState} value={userData.approach} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Background</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="background" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.background} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Coaching Areas of Experties</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="expertise_areas" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.expertise_areas} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Client specific areas of experties</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="client_areas_expertise" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.client_areas_expertise} />
                        </Grid>
                    </Grid>


                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Representative coaching Engagenments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomMultiSelectAutoComplete id="rep_coaching_engage" itemArr={representativeClientsDummy} parentcall={onChangeMultipleItem} defaultValue={representativeClientsArr} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Types of Clients</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="client_type" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.client_type} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Representative Clients</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomMultiSelectAutoComplete id="representative_clients"
                                itemArr={repCoachingEngageDummy} parentcall={onChangeMultipleItem} defaultValue={representativeClientsArr} />

                        </Grid>

                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Education and Qualification</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="education_qualification" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.education_qualification} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Languages</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="languages" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.languages} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Professional Development and Supervision</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="professional_development" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.professional_development} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Professional Affiliations</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="professional_affiliations" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.professional_affiliations} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Psychometric and Diagnostic Tools</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="tools" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.tools} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Personal Interests</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="personal_interests" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.personal_interests} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Client Testimonials</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="client_testimonial" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.client_testimonial} />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}
export default CoachingProfileField
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
        paddingRight: '10px'
    },
}))
