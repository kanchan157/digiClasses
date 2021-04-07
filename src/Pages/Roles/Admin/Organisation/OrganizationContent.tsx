import { Grid, InputLabel, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import CustomInput from '../../../../Components/CustomInput';
import CustomSelect from '../../../../Components/CustomSelect';
import CustomMultiSelectOrganization from './CustomMultiSelectOrganization';

function OrganizationContent() {
    const classes = useStyles();
    const [selectedFilter, setSelectedFilter] = useState<any>([]);
    const [orgName, setOrgName] = useState('');

    const onChangeMultipleItem = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue);
        setSelectedFilter({ ...selectedFilter, [inputId]: inputStateValue })
    }
    const setInputState = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue);
        setSelectedFilter({ ...selectedFilter, [inputId]: inputStateValue })
    }
    const serviceTypedata = [
        {
            name: "Service Type",
            values: [
                { title: 'A' },
                { title: 'B' },
                { title: 'C' },

            ]
        },
    ]
    const statusData = [
        {
            name: "Status",
            values: [
                { title: 'P' },
                { title: 'Q' },
                { title: 'R' },

            ]
        },
    ]
    const activityData = [
        {
            name: "Activity",
            values: [
                { title: 'P' },
                { title: 'Q' },
                { title: 'R' },

            ]
        },
    ]
    const [serviceType, setServiceType] = useState(serviceTypedata);
    const [status, setstatus] = useState(statusData);
    const [activity, setActivity] = useState(activityData);


    return (
        <div>
            <Grid container direction="row" alignItems="center" style={{ padding: 20, }}>
                <Grid item xs={12} className={classes.bgGray}>
                    <Grid container direction="row" alignItems="center" style={{}}>
                        <Grid item xs={2} >
                            <TextField  label="Org Name" 
                            style={{backgroundColor:'white', padding: '22px !important', width: "80%",marginBlock: 10,borderRadius: 4, }} 
                            margin="normal" variant="outlined" 
                            onChange={(e:any) => setOrgName(e.target.value) }
                            value={orgName}
                             />
                        </Grid>
                        {serviceType.map((e) => <Grid item xs={2}>
                            <CustomMultiSelectOrganization id="partnerRolesArr" values={e} parentcall={onChangeMultipleItem} />
                        </Grid>)}
                        {status.map((e) =><Grid item xs={2}>
                            <CustomMultiSelectOrganization id="partnerRolesArr" values={e} parentcall={onChangeMultipleItem} />
                        </Grid>)}
                        {activity.map((e) =><Grid item xs={2}>
                            <CustomMultiSelectOrganization id="partnerRolesArr" values={e} parentcall={onChangeMultipleItem} />
                        </Grid>)}
                        <Grid item xs={3}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrganizationContent;

const useStyles = makeStyles((theme) => ({
    bgGray: {
        backgroundColor: '#ebe8e8',
        padding: 10,

    },
    
}))
