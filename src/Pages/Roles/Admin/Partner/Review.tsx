import { Grid, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'
import CustomInput from '../../../../Components/CustomInput'
import CustomRadioButton from '../../../../Components/CustomRadioButton'
import CustomSelect from '../../../../Components/CustomSelect'
import Header from './header'

function Review() {
    const data = {
        feedback: ''
    }
    const [userData, setUserData] = useState(data);

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
                <Grid item xs={6}>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Onboarding confirmation</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomRadioButton itemArr={["Yes", "No"]} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Feedback</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="feedback" variant="outlined" placeholder="Free text" multiline={true} rows={4} parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Header parentcall={onSubmit} />

        </div>
    )
}

export default Review
