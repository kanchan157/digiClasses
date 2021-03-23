import { Grid, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'
import CustomInput from '../../../../Components/CustomInput'
import CustomSelect from '../../../../Components/CustomSelect'
import Header from './header'

function Ranking() {

    const data = {
        rank: '',
        internalComments: ''
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
                            <InputLabel>Rank</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="rank" displayEmpty variant="outlined" itemArr={['g', 'h']} selectedValue={userData.rank} parentcall={setInputState}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Internal comments</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="internalComments" variant="outlined" placeholder="Free text" multiline={true} rows={4} parentcall={setInputState} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Header parentcall={onSubmit} />

        </div>
    )
}

export default Ranking
