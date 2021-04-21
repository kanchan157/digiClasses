import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomDatePicker from '../../../Components/CustomDatePicker'
import CustomInput from '../../../Components/CustomInput'
import CustomRadioButton from '../../../Components/CustomRadioButton'
import CustomSelect from '../../../Components/CustomSelect'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions'
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'

const AssociateCoaches = (props:any) => {
    const classes = useStyles();
    const data = {
        job_role: '',
        bio_paragraph: '',
    }
    const [userData, setUserData] = useState(data);
    const global_data = useSelector((state: any) => state.stepperReducer);
    const dispatch = useDispatch();

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
        console.log(inputStateValue)
    }
        
    useEffect(() => {
        if (global_data.associate_coaches_id != "") {
            AdminPartnerClient.AssociateCoaches(
                global_data.associate_coaches_id,
                { partner_profile_id: global_data.partner_profile },
                'GET'
            ).then((response: any) => {
                setUserData(response.data.attributes)

            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])

    const onSubmit = () => {
        console.log(userData)
        if (global_data.associate_coaches_id == "") {
            AdminPartnerClient.AssociateCoaches(
                '',
                { partner_profile_id: global_data.partner_profile, ...userData },
                'POST'
            ).then((response: any) => {
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { associate_coaches_id: response.data.id } });
                props.parentHandleNext(props.activeIndex + 1)
            });

        } else {
            AdminPartnerClient.AssociateCoaches(
                global_data.associate_coaches_id,
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
                            <InputLabel className={classes.labelText}>Associate Job Role</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                        <CustomInput id="job_role" variant="outlined" placeholder="Phone" parentcall={setInputState} value={userData.job_role} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate Bio Paragraph</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="bio_paragraph" variant="outlined" placeholder="Phone" parentcall={setInputState} value={userData.bio_paragraph} />
                        </Grid>
                    </Grid>
                    
                                        
                </Grid>
            </Grid>

        </div>
    )
}
export default AssociateCoaches
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
        paddingRight: '10px'
    },
}))
