import { Button, Card, Grid, InputLabel, Typography } from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons';
import React, { useState } from 'react'
import CustomInput from '../../../../Components/CustomInput';
import CustomSelect from '../../../../Components/CustomSelect'
import Header from './header';

function Questionnaire(props:any) {

    const data = {
        businessExp: '',
        businessIssues: '',
        operatedCoach: '',
        deliveredCoaching: '',
        workloadDistribution: '',
        coachingHours: '',
        coachingAssignment: '',
        coachingAssignment2: '',
        additionalInformation: '',
        associateRelationship: '',
        sectorWork: '',
        responsibility: '',
        jobTitle: '',
        roleExp: '',
        roleWithinOrg: '',
        levelHeld: '',
        levelCoach: '',
        insurence: '',
        thumbnailbio: '',

    }
    const [userData, setUserData] = useState(data);

    const onChangeItem = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onSubmit = () => {
        console.log(userData)
    }
    return (
        <div>
            <Header isSkip={true} parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={8}>

                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, borderLeft: '5px solid #3B86FF', }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>Business Experience*</Typography>
                            <CustomInput id="businessExp" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>How do you keep up-to-date with business issues?*</Typography>
                            <CustomInput id="businessIssues" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>How long have you operated as a coach?</Typography>
                            <CustomInput id="operatedCoach" variant="outlined" placeholder="Numeric Input" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>In which industry sectors have you delivered coaching to?*</Typography>
                            <CustomSelect id="deliveredCoaching" displayEmpty variant="outlined" itemArr={['1', '2']} parentcall={onChangeItem} selectedValue={userData.deliveredCoaching} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>Workload distribution*</Typography>
                            <CustomInput id="workloadDistribution" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={5} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>Coaching hours*</Typography>
                            <CustomInput id="coachingHours" variant="outlined" placeholder="hh/mm/ss" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>How do you evaluate and measure the success of your coaching assignments?*</Typography>
                            <CustomInput id="coachingAssignment" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>How do you evaluate and measure the success of your coaching assignments?*</Typography>
                            <CustomInput id="coachingAssignment2" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>Additional information*</Typography>
                            <CustomInput id="additionalInformation" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>Associate relationship*</Typography>
                            <CustomInput id="associateRelationship" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>What sector did you work in?e.g. Financial Service, IT, Retail*</Typography>
                            <CustomSelect id="sectorWork" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} selectedValue={userData.sectorWork} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>What did you have responsibility for?*</Typography>
                            <CustomInput id="responsibility" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>What was your last job title?*</Typography>
                            <CustomInput id="jobTitle" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>What was your role experience?*</Typography>
                            <CustomInput id="roleExp" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>(Please explain your role within the organization)*</Typography>
                            <CustomInput id="roleWithinOrg" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>What was the level you held?*</Typography>
                            <CustomInput id="levelHeld" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>What levels do you coach at?*</Typography>
                            <CustomInput id="levelCoach" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >

                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={9} style={{}}>

                                    <Typography variant="h5" style={{ marginBottom: 5 }}>Insurence in place yes or no with upload*</Typography>
                                    <CustomSelect id="insurence" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} />

                                </Grid>
                                <Grid item xs={3} style={{marginTop:30, padding:5, }}>
                                    <label htmlFor="upload-photo">
                                        <input accept="application/pdf, application/vnd.ms-excel,image/gif, image/jpeg" style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
                                        <Button color="secondary" variant="contained" component="span" style={{ fontSize: 12 }}><CloudUpload style={{ marginRight: 10 }} />Upload</Button>
                                    </label>
                                </Grid>
                            </Grid>
                        </Card>

                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Typography variant="h5" style={{ marginBottom: 5 }}>Thumbnail bio</Typography>
                            <CustomInput id="thumbnailbio" placeholder="Free Text" parentcall={setInputState} />
                        </Card>
                    </Grid>

                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{ padding: 10, }} >
                            <Grid container direction="row" alignItems="center" >
                                <Grid item xs={12} >
                                    <Typography variant="h5" style={{ marginBottom: 5 }}>Reference contact details(Name,email,phone number)*</Typography>
                                </Grid>
                                <Grid item xs={12} style={{ marginBottom: 30 }}>
                                    <Grid container direction="row" alignItems="center" >
                                        <Grid item xs={3} ></Grid>

                                        <Grid item xs={9} >
                                            <Grid container direction="row" alignItems="center" >
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <Typography variant="h5" style={{ marginBottom: 5 }}>Full Name*</Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <Typography variant="h5" style={{ marginBottom: 5 }}>Email*</Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <Typography variant="h5" style={{ marginBottom: 5 }}>Phone*</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {[0, 0, 0].map((e, i) => <Grid container direction="row" alignItems="center" >
                                        <Grid item xs={3} >
                                            <Typography variant="h5" style={{ marginBottom: 5 }}>Reference {i + 1} </Typography>
                                        </Grid>
                                        <Grid item xs={9} >
                                            <Grid container direction="row" alignItems="center" >
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <CustomInput id="Username" variant="outlined" placeholder="First name" parentcall={setInputState} />
                                                </Grid>
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <CustomInput id="Username" variant="outlined" placeholder="Email" parentcall={setInputState} />
                                                </Grid>
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <CustomInput id="Username" variant="outlined" placeholder="Phone" parentcall={setInputState} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>)}

                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>
            <Header parentcall={onSubmit} />
        </div>
    )
}

export default Questionnaire
