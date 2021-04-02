import { Card, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CustomInput from '../../../Components/CustomInput'
import CustomSelect from '../../../Components/CustomSelect';
import Header from './header';
import AdminPartnerClient from '../../../Service/Admin/partner_services'
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))
function ReferenceQuestionnaire(props: any) {
    const classes = useStyles();

    const global_data = useSelector((state: any) => state.stepperReducer);

    const data = {
        coachingAssignment: '',
        observationAchievement: '',
        effectiveness: '',
        coachName: '',
        otherComments: '',
        partner_reference_detail_id: 1
    }

    const [quesData, setQuesData]: any = useState({});
    const [userData, setUserData]: any = useState(data);
    const [focusText, setFocusText] = useState("1");
    var quesArr: any = []
    const onSubmit = () => {
        for (var i in quesData) {
            quesArr.push({ question_id: i, answer: quesData[i] })
        }
        AdminPartnerClient.ReferenceQuestionnaire({
            partner_reference_detail_id: 21,
            partner_profile_id: global_data.partner_profile,
            question_answers: quesArr,
        }).then((response: any) => {
            console.log(response)
            props.parentHandleNext(props.activeIndex + 1)
        });
        props.parentHandleNext(props.activeIndex + 1)
    }
    useEffect(() => {
        if (global_data.partner_profile != "") {
            AdminPartnerClient.ReferenceQuestionnaire_get({ partner_profile_id: global_data.partner_profile }).then((response: any) => {
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        userData[inputId] = inputStateValue;
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

    const updatePageObj = (key: any, value: any) => {
    }

    return (
        <div>
            <Header saveBtnTitle={'Save & Proceed'} isBack={true} parentcall={onSubmit} parentBackCall={onBack} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={10}>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '1' ? "elevation" : "outlined"} style={{ padding: 10, border: (focusText == '1') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '1') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText}  style={{ marginBottom: 5 }}>Business Experience*</Typography>
                            <CustomInput id="Business Experience" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('1')} on />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '2' ? "elevation" : "outlined"} style={{ padding: 10, border: (focusText == '2') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '2') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText}  style={{ marginBottom: 5 }}>What were your observation as to her/his contribution to the achievement of your objectives?</Typography>
                            <CustomInput id="What were your observation as to her/his contribution to the achievement of your objectives" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('2')} />
                        </Card> </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" className={classes.labelText}  style={{ marginBottom: 5 }}>How would you describe their professionalism and effectiveness?</Typography>
                        <CustomInput id="How would you describe their professionalism and effectiveness" variant="outlined" placeholder="Numeric Input" parentcall={setQuestionInputState} />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" className={classes.labelText}  style={{ marginBottom: 5 }}>Was 'coach:name' supportive and challenging?</Typography>
                        <CustomSelect id="Was 'coach:name' supportive and challenging" displayEmpty variant="outlined" itemArr={['1', '2']} parentcall={setQuestionChangeState} selectedValue={userData.coachName} />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '3' ? "elevation" : "outlined"} style={{ padding: 10, border: (focusText == '3') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '3') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText}  style={{ marginBottom: 5 }}>Any other comments</Typography>
                            <CustomInput id="Any other comments" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('3')} />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Header saveBtnTitle={'Save & Proceed'} isBack={true} parentcall={onSubmit} parentBackCall={onBack} />
        </div>
    )
}

export default ReferenceQuestionnaire
