import { Grid, InputLabel, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../../Components/CustomInput'
import CustomSelect from '../../../Components/CustomSelect'
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions';
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import Header from './header'
const useStyles = makeStyles((theme) => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))
function Ranking(props: any) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const global_data = useSelector((state: any) => state.stepperReducer);

    const data = {
        rank: '',
        comments: '',
    }
    const onChangeItem = (selectedItem: any) => {
        console.log(selectedItem)
        setUserData({ ...userData, [selectedItem.id]: selectedItem.value })
    };
    const [userData, setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onSubmit = () => {
        if (global_data.ranking_id != "") {
            AdminPartnerClient.Ranking({ partner_profile_id: global_data.partner_profile, ...userData }).then((response: any) => {
                console.log(response)
                dispatch({ type: GLOBAL_STEPPER_DATA, payload: { ranking_id: response.data.id } });

                props.parentHandleNext(props.activeIndex + 1)
            }).catch(error => alert(JSON.stringify(error.error)));
        }
        else {
            AdminPartnerClient.Ranking_put(global_data.ranking_id,{ partner_profile_id: global_data.partner_profile, ...userData }).then((response: any) => {
                props.parentHandleNext(props.activeIndex + 1)
            }).catch(error => alert(JSON.stringify(error.error)));
        }
        // console.log(userData)
    }
    useEffect(() => {
        if (global_data.ranking_id != "") {
            AdminPartnerClient.Ranking_get(global_data.ranking_id, { partner_profile_id: global_data.partner_profile }).then((response: any) => {
                setUserData(response.data.attributes)

            }).catch(error => alert(JSON.stringify(error.error)));
        }
    }, [])
    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }

    return (
        <div>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={10}>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Rank</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="rank" displayEmpty variant="outlined" itemArr={[1, 2]} parentcall={onChangeItem} defaultValue={userData.rank} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} >Internal comments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="comments" variant="outlined" placeholder="Free text" multiline={true} rows={4} parentcall={setInputState} defaultValue={userData.comments} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />

        </div>
    )
}

export default Ranking
