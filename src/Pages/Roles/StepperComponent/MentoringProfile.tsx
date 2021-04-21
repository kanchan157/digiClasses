import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomInput from '../../../Components/CustomInput'
import CustomMultiSelectAutoComplete from '../../../Components/CustomMultiSelectAutoComplete'
import CustomSelect from '../../../Components/CustomSelect'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'

const MentoringProfile = (props: any) => {
    const classes = useStyles();
    const data = {
        overview: '',
        picture: '',
        approach: '',
        background: '',
        client_specific_areas_of_expertise: '',
        representative_engagements: '',
        types_of_clients: '',
        representative_clients: '',
        education_and_qualifications: '',
        development_and_supervision: '',
        professional_affiliations: '',
        diagnostic_tools: '',
        personal_interests: '',
        client_testimonials: '',

    }

    const [userData, setUserData] = useState(data);
    const languageAttributeArr = ['Afrikaans', 'Akan', 'Albanian'];
    const areasExpertiseArr = ['aa', 'bb', 'cc'];
    const [mentoringAreasArr, setMentoringAreasArr]: any = useState([]);
    const [languagesArr, setLanguagesArr]: any = useState([]);
    const global_data = useSelector((state: any) => state.stepperReducer);
    const dispatch = useDispatch();


    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })

        console.log(selectedItemValue)
    };
    const onChangeMultipleItem = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue);
        mentoringAreasArr.length = 0;
        languagesArr.length = 0;
        if (inputId == "areas_of_expertise_attribute") {
            setMentoringAreasArr(mentoringAreasArr.concat((inputStateValue)))
        }
        if (inputId == "languages_attribute") {
            setLanguagesArr(languagesArr.concat((inputStateValue)))
        }
    }

    useEffect(() => {
        if (global_data.mentoring_profile_id != "") {
            AdminPartnerClient.MentoringProfile(
                global_data.mentoring_profile_id,
                { partner_profile_id: global_data.partner_profile },
                'GET'
            ).then((response: any) => {
                setUserData(response.data.attributes)
                // if (response.data.attributes.partner_faci_expertises.length > 0) {
                //     partnerRolesArr.length = 0;
                //     response.data.attributes.partner_faci_expertises.map((options: any) => {
                //         setPartnerRolesArr(partnerRolesArr.push(options.areas_of_expertise));
                //     })
                // }
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const onSubmit = () => {
        console.log(userData)
        if (global_data.mentoring_profile_id == "") {
            AdminPartnerClient.MentoringProfile(
                '',
                {
                    partner_profile_id: global_data.partner_profile,
                    areas_of_expertise_attribute: JSON.stringify(mentoringAreasArr),
                    languages_attribute: JSON.stringify(languageAttributeArr),
                    ...userData
                },
                'POST'
            ).then((response: any) => {
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { mentoring_profile_id: response.data.id } });
                props.parentHandleNext(props.activeIndex + 1)
            });

        } else {
            AdminPartnerClient.MentoringProfile(
                global_data.mentoring_profile_id,
                {
                    areas_of_expertise_attribute: JSON.stringify(mentoringAreasArr),
                    languages_attribute: JSON.stringify(languageAttributeArr),
                    ...userData
                },
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
                            <CustomInput id="picture" variant="outlined" placeholder="Email" parentcall={setInputState} value={userData.picture} />
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
                            <InputLabel className={classes.labelText}>Mentoring Areas of Experties</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            {/* <CustomSelect id="areas_of_expertise_attribute" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.areas_of_expertise_attribute} /> */}
                            <CustomMultiSelectAutoComplete id="areas_of_expertise_attribute" itemArr={areasExpertiseArr} parentcall={onChangeMultipleItem} defaultValue={mentoringAreasArr} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Client specific areas of experties</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="client_specific_areas_of_expertise" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.client_specific_areas_of_expertise} />
                        </Grid>
                    </Grid>


                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Representative Mentoring Engagenments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="representative_engagements" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.representative_engagements} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Types of Clients</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="types_of_clients" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.types_of_clients} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Representative Clients</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="representative_clients" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.representative_clients} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Education and Qualification</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="education_and_qualifications" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.education_and_qualifications} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Languages</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            {/* <CustomSelect id="languages_attribute" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.languages_attribute} /> */}
                            <CustomMultiSelectAutoComplete id="languages_attribute" itemArr={languageAttributeArr} parentcall={onChangeMultipleItem} defaultValue={languagesArr} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Professional Development and Supervision</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="development_and_supervision" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.development_and_supervision} />
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
                            <CustomSelect id="diagnostic_tools" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.diagnostic_tools} />
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
                            <CustomInput id="client_testimonials" variant="outlined" placeholder="Mr" parentcall={setInputState} value={userData.client_testimonials} />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}
export default MentoringProfile
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
        paddingRight: '10px'
    },
}))
