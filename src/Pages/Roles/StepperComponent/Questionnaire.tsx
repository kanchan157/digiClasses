import { Card, Grid, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CustomInput from '../../../Components/CustomInput';
import CustomSelect from '../../../Components/CustomSelect'
import Header from './header';
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import CustomTimePicker from '../../../Components/CustomTimePicker';
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))

function Questionnaire(props: any) {
    const classes = useStyles();

    const global_data = useSelector((state: any) => state.stepperReducer);

    const [quesData, setQuesData]:any = useState({});
    const [focusText, setFocusText] = useState("1");
    var refArr:any = [
        { "email": "", "phone": "", "name": "" },
        { "email": "", "phone": "", "name": "" },
        { "email": "", "phone": "", "name": "" }
    ]
    var quesArr: any = []
    const onSubmit = () => {
        for (var i in quesData) {
            quesArr.push({ question_id: i, answer: quesData[i] })
        }
        AdminPartnerClient.Questionnaire(
            {
                partner_profile_id: global_data.partner_profile,
                question_answers: quesArr,
                references: refArr,
            }).then((response: any) => {
                console.log(response)
                props.parentHandleNext(props.activeIndex + 1)
            });
        props.parentHandleNext(props.activeIndex + 1)
    }
    useEffect(() => {
        if (global_data.partner_profile != "") {
            AdminPartnerClient.Questionnaire_get({ partner_profile: global_data.partner_profile }).then((response: any) => {
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

 
    const setRefInputState = (inputStateValue: any, inputId: any,dataIndex:any) => {
        refArr[dataIndex][inputId] = inputStateValue;
    }
    const setQuestionInputState = (inputStateValue: any, inputId: any) => {
        setQuesData({ ...quesData, [inputId]: inputStateValue })
    }
    const setQuestionChangeState = (selectedItemValue: any, inputId: any) => {
        setQuesData({ ...quesData, [selectedItemValue.id]: selectedItemValue.value })
    };
    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }

    return (
        <div>
            <Header saveBtnTitle={'Save & Proceed'} isBack={true} parentcall={onSubmit} parentBackCall={onBack} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={10}>

                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '1' ? "elevation" : "outlined"} style={{ padding: "30px 10px", border: (focusText == '1') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '1') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Business Experience</Typography>
                            <CustomInput id="Business Experience" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('1')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '2' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '2') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '2') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>How do you keep up-to-date with business issues?</Typography>
                            <CustomInput id="How do you keep up-to-date with business issues" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('2')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{  padding: "30px 10px", borderWidth: 0 }} >
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>How long have you operated as a coach?</Typography>
                            <CustomInput id="How long have you operated as a coach" variant="outlined" placeholder="Numeric Input" parentcall={setQuestionInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{  padding: "30px 10px", borderWidth: 0 }} >
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>In which industry sectors have you delivered coaching to?</Typography>
                            <CustomSelect id="In which industry sectors have you delivered coaching to" displayEmpty variant="outlined" itemArr={['1', '2']} parentcall={setQuestionChangeState} selectedValue={""} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '3' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '3') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '3') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Workload distribution</Typography>
                            <CustomInput id="Workload distribution" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('3')} />
                        </Card>
                    </Grid>
                    <Grid item xs={5} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{  padding: "30px 10px", borderWidth: 0 }} >
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Coaching hours</Typography>
                            <CustomTimePicker id="Coaching hours"  variant="outlined"   parentcall={setQuestionInputState} />

                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '4' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '4') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '4') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>How do you evaluate and measure the success of your coaching assignments?</Typography>
                            <CustomInput id="How do you evaluate and measure the success of your coaching assignments" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('4')} />
                        </Card>
                    </Grid>

                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '5' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '5') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '5') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Additional information</Typography>
                            <CustomInput id="Additional information" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('5')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '6' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '6') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '6') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Associate relationship</Typography>
                            <CustomInput id="Associate relationship" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('6')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{  padding: "30px 10px", borderWidth: 0 }} >
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>What sector did you work in?e.g. Financial Service, IT, Retail</Typography>
                            <CustomSelect id="What sector did you work in?e.g. Financial Service, IT, Retail" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={setQuestionChangeState} selectedValue={""} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '7' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '7') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '7') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>What did you have responsibility for?</Typography>
                            <CustomInput id="What did you have responsibility for" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('7')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '8' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '8') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '8') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>What was your last job title?</Typography>
                            <CustomInput id="What was your last job title" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('8')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '9' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '9') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '9') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>What was your role experience?</Typography>
                            <CustomInput id="What was your role experience" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('9')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{  padding: "30px 10px", borderWidth: 0, }} >
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>(Please explain your role within the organization)</Typography>
                            <CustomInput id="Please explain your role within the organization" placeholder="Free Text" parentcall={setQuestionInputState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '10' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '10') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '10') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>What was the level you held?</Typography>
                            <CustomInput id="What was the level you held" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('10')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '11' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '11') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '11') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>What levels do you coach at?</Typography>
                            <CustomInput id="What levels do you coach at" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('11')} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{  padding: "30px 10px", borderWidth: 0, }} >
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Insurence in place yes or no with upload</Typography>
                            <CustomSelect id="Insurence in place yes or no with upload" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={setQuestionChangeState} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '12' ? "elevation" : "outlined"} style={{  padding: "30px 10px", border: (focusText == '12') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '12') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Thumbnail bio</Typography>
                            <CustomInput id="Thumbnail bio" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('12')} />
                        </Card>
                    </Grid>

                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant="outlined" style={{  padding: "30px 10px", borderWidth: 0, }} >
                            <Grid container direction="row" alignItems="center" >
                                <Grid item xs={12} >
                                    <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Reference contact details(Name,email,phone number)*</Typography>
                                </Grid>
                                <Grid item xs={12} style={{ marginBottom: 30 }}>
                                    <Grid container direction="row" alignItems="center" >
                                        <Grid item xs={3} ></Grid>

                                        <Grid item xs={9} >
                                            <Grid container direction="row" alignItems="center" >
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Full Name*</Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Email*</Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Phone*</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {[0, 0, 0].map((e, i) => <Grid container direction="row" alignItems="center" >
                                        <Grid item xs={3} >
                                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Reference {i + 1} </Typography>
                                        </Grid>
                                        <Grid item xs={9} >
                                            <Grid container direction="row" alignItems="center" >
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <CustomInput id="email" variant="outlined" dataIndex={i} placeholder="First name" parentcall={setRefInputState} />
                                                </Grid>
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <CustomInput id="phone" variant="outlined" dataIndex={i} placeholder="Email" parentcall={setRefInputState} />
                                                </Grid>
                                                <Grid item xs={4} style={{ padding: 5 }}>
                                                    <CustomInput id="name" variant="outlined" dataIndex={i} placeholder="Phone" parentcall={setRefInputState} />
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
            <Header saveBtnTitle={'Save & Proceed'} isBack={true} parentcall={onSubmit} parentBackCall={onBack} />
        </div>
    )
}

export default Questionnaire
