import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
import CustomSelect from '../../../Components/CustomSelect'
import Header from './header'

const QualityAssurance = () => {
    const classes = useStyles();
    const data = {
        qaAdmin: '1',
        contact: '',
        qaAdmincomments: '',
        dateOfContact: '',
        dateRemainder: '',
        agreedFeedback: '',
        comments: '',
        contactDetails: '',
        dateQACall: '',
        qaFeedback: '',
        thankYou: '',
        namedTestimonial: '',
        testimonial: ''
    }
    const [userData, setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
    const onChangeItem = (selectedItemValue: any) => {
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
        console.log(selectedItemValue)
    };
    const onChangeDate = (selectedItemValue: any, id: any) => {
        setUserData({ ...userData, [id]: selectedItemValue })
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
                            <InputLabel className={classes.labelText}>QA Admin confirmedready to contact Y/N</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="qaAdmin" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.qaAdmin} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Contact Y/N</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contact" variant="outlined" placeholder="Email" parentcall={setInputState} selectedValue={userData.contact} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>QA Admin comments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="qaAdmincomments" variant="outlined" placeholder="Phone" parentcall={setInputState} selectedValue={userData.qaAdmincomments} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date contacted(to ask if they would take part and provide availability)</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="dateOfContact" variant="outlined" parentcall={onChangeDate} value={userData.dateOfContact} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date remainder set</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="dateRemainder" variant="outlined" parentcall={onChangeDate} value={userData.dateRemainder} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Agreed to give feedback Y/N</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="agreedFeedback" variant="outlined" placeholder="Name" parentcall={setInputState} selectedValue={userData.agreedFeedback} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Comments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="comments" variant="outlined" placeholder="Name" parentcall={setInputState} selectedValue={userData.comments} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Contact details for coachee</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contactDetails" variant="outlined" placeholder="Name" parentcall={setInputState} selectedValue={userData.contactDetails} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date of QA call</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="dateQACall" variant="outlined" parentcall={onChangeDate} value={userData.dateQACall} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>QA Feedback</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="qaFeedback" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.qaFeedback} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Thank you email date would you like to provide a testimonial about their coaching</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomDatePicker id="thankYou" variant="outlined" parentcall={onChangeDate} value={userData.thankYou} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Agreed to give named testimonial</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="namedTestimonial" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.namedTestimonial} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Testimonial</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="testimonial" variant="outlined" placeholder="Mr" parentcall={setInputState} selectedValue={userData.testimonial} />
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
