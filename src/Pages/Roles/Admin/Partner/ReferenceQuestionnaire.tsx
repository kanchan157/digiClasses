import { Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CustomInput from '../../../../Components/CustomInput'
import CustomSelect from '../../../../Components/CustomSelect';
import Header from './header';

function ReferenceQuestionnaire() {

    const data = {
        coachingAssignment:'',
        observationAchievement:'',
        effectiveness:'',
        coachName:'',
        otherComments:''
    }

    const [userData,setUserData] = useState(data);

    const setInputState = (inputStateValue: any, inputId: any) => {
        setUserData({...userData, [inputId] : inputStateValue})
    }
    const onSubmit = () => {
        console.log(userData)
    }
    return (
        <div>
           <Header isSkip={true} parentcall={onSubmit} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30,marginBottom:30 }}>
                <Grid item xs={6}>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" style={{ marginBottom: 5 }}>How long was your coaching assignment?</Typography>
                        <CustomInput id="coachingAssignment" placeholder="Free Text" parentcall={setInputState} />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" style={{ marginBottom: 5 }}>What were your observation as to her/his contribution to the achievement of your objectives?</Typography>
                        <CustomInput id="observationAchievement" placeholder="Free Text" parentcall={setInputState} />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" style={{ marginBottom: 5 }}>How would you describe their professionalism and effectiveness?</Typography>
                        <CustomInput id="effectiveness" variant="outlined" placeholder="Numeric Input" parentcall={setInputState} />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" style={{ marginBottom: 5 }}>Was 'coach:name' supportive and challenging?</Typography>
                        <CustomSelect id="coachName" displayEmpty variant="outlined" itemArr={['1', '2']}  selectedValue={userData.coachName}/>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography variant="h5" style={{ marginBottom: 5 }}>Any other comments</Typography>
                        <CustomInput id="otherComments" placeholder="Free Text" parentcall={setInputState} />
                    </Grid>
                </Grid>
            </Grid>
            <Header parentcall={onSubmit} />
        </div>
    )
}

export default ReferenceQuestionnaire
