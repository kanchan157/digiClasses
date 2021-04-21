import { Card, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../../Components/CustomInput'
import CustomSelect from '../../../Components/CustomSelect';
import Header from './header';
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions';
import { ObjectToFormdata } from '../../../Common/Utils/common_utils';
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
    const dispatch = useDispatch();

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
    const [submitClickFlag, setSubmitClickFlag] = React.useState(false);

    var quesArr: any = []
    const onSubmit = () => {
        var flag = true;
        if (userData.internal_notes == "") {
            flag = false;
        }

        if (flag) {
            setSubmitClickFlag(false)
            for (var i in quesData) {
                quesArr.push({ question_id: i, answer: quesData[i] })
            }
            if (global_data.partner_reference_ques_id == "") {
                AdminPartnerClient.ReferenceQuestionnaire({
                    partner_reference_detail_id: global_data.referenceDetail[0].id,
                    partner_profile_id: global_data.partner_profile,
                    question_answers: quesArr,
                    access_token: global_data.referenceDetail[0].access_token
                }).then((response: any) => {
                    dispatch({ type: GLOBAL_STEPPER_DATA, payload: { partner_reference_ques_id: response.data[response.data.length-1].id } });
                    props.parentHandleNext(props.activeIndex + 1)
                });
            } else {
                AdminPartnerClient.BasicInfo_put(global_data.partner_reference_ques_id, ObjectToFormdata(
                    {
                        partner_reference_detail_id: global_data.referenceDetail[0].id,
                        partner_profile_id: global_data.partner_profile,
                        question_answers: quesArr,
                        access_token: global_data.referenceDetail[0].access_token
                    }
                )).then((response: any) => {
                    props.parentHandleNext(props.activeIndex + 1)
                }).catch(error => alert(JSON.stringify(error.error)));
            }
            // props.parentHandleNext(props.activeIndex + 1)
        } else {
            setSubmitClickFlag(true)
        }

    }
    useEffect(() => {
        if (global_data.partner_reference_ques_id != "") {
            AdminPartnerClient.ReferenceQuestionnaire_get(
                global_data.partner_reference_ques_id,
                {
                    partner_profile_id: global_data.partner_profile,
                    question_type: "question_and_answer"
                })
                .then((response: any) => {
                    setUserData(response.data.attributes)
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
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Business Experience</Typography>
                            <CustomInput id="Business Experience" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('1')} on />
                        </Card>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '2' ? "elevation" : "outlined"} style={{ padding: 10, border: (focusText == '2') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '2') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>What were your observation as to her/his contribution to the achievement of your objectives?</Typography>
                            <CustomInput id="What were your observation as to her/his contribution to the achievement of your objectives" placeholder="Free Text" parentcall={setQuestionInputState} onClick={() => setFocusText('2')} />
                        </Card> </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>How would you describe their professionalism and effectiveness?</Typography>
                        <CustomInput id="How would you describe their professionalism and effectiveness" variant="outlined" placeholder="Numeric Input" parentcall={setQuestionInputState} />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Was 'coach:name' supportive and challenging?</Typography>
                        <CustomSelect id="Was 'coach:name' supportive and challenging" displayEmpty variant="outlined" itemArr={['1', '2']} parentcall={setQuestionChangeState} selectedValue={userData.coachName} />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Card variant={focusText == '3' ? "elevation" : "outlined"} style={{ padding: 10, border: (focusText == '3') ? '0px solid #3B86FF' : '', borderLeftWidth: (focusText == '3') ? '5px' : "1px" }}>
                            <Typography variant="h5" className={classes.labelText} style={{ marginBottom: 5 }}>Any other comments</Typography>
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
