import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import CustomInput from '../../../Components/CustomInput'
import CustomSelect from '../../../Components/CustomSelect'
import Header from './header'

const CoachingProfileField = () => {
    const classes = useStyles();
    const data = {
       
        id: '',
        partner_profile_id: '',
        
        overview: '',
        photo: '',
        approach: '',
        background: '',
        expertise_areas: '',
        client_areas_expertise: '',
        rep_coaching_engage: '',
        client_type: '',
        representative_clients: '',
        education_qualification: '',
        languages: '',
        professional_development: '',
        professional_affiliations: '',
        tools: '',
        personal_interests: '',
        client_testimonial: ''
        
    }

    const [userData, setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any, inputId: any) => {
        // debugger
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
        
        console.log(selectedItemValue)
    };
    
    const onSubmit = () => {
        console.log(userData)
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
                            <CustomInput id="overview" variant="outlined" placeholder="Email" parentcall={setInputState} selectedValue={userData.overview} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Photo</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="photo" variant="outlined" placeholder="Email" parentcall={setInputState} selectedValue={userData.photo} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Approach</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="approach" variant="outlined" placeholder="Phone" parentcall={setInputState} selectedValue={userData.approach} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Background</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="background" variant="outlined" placeholder="Name" parentcall={setInputState} selectedValue={userData.background} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Coaching Areas of Experties</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="expertise_areas" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.expertise_areas} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Client specific areas of experties</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="client_areas_expertise" variant="outlined" placeholder="Name" parentcall={setInputState} selectedValue={userData.client_areas_expertise} />
                        </Grid>
                    </Grid>


                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Representative coaching Engagenments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="rep_coaching_engage" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.rep_coaching_engage} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Types of Clients</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="client_type" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.client_type} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Representative Clients</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="representative_clients" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.representative_clients} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Education and Qualification</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="education_qualification" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.education_qualification} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Languages</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="languages" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.languages} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Professional Development and Supervision</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="professional_development" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.professional_development} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Professional Affiliations</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="professional_affiliations" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.professional_affiliations} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Psychometric and Diagnostic Tools</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="tools" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.tools} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Personal Interests</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="personal_interests" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.personal_interests} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Client Testimonials</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="client_testimonial" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.client_testimonial} />
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
