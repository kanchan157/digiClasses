import { Button, Grid, InputLabel, Typography } from '@material-ui/core'
import { Cancel, CloseSharp, CloudUpload } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Header from './header';
import AdminPartnerClient from '../../../Service/Admin/partner_services'



function ContractDocumentition(props:any) {
    const global_data = useSelector((state: any) => state.stepperReducer);

    const data = {
        partner_profile_id:global_data.partner_profile,
        acuity_people_profile_id:props.acuityProfileID,
        document:'https://acuityapi.digiryte.co.uk/',
    }
    const [userData, setUserData] = useState(data);
    const onSubmit = () => {
        AdminPartnerClient.ContractDocumentition(userData).then((response: any) => {
            console.log(response)
            
        });
        props.parentHandleNext(props.activeIndex + 1)
    }
    useEffect(() => {
        if (global_data.partner_profile != "") {
            AdminPartnerClient.ContractDocumentition_get({ id: global_data.partner_profile }).then((response: any) => {
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }, [])
    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }
    return (
        <div>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit}  parentBackCall={onBack} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={10}>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Contract Documents</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <label htmlFor="upload-photo">
                                <input accept="application/pdf, application/vnd.ms-excel,image/gif, image/jpeg" style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
                                <Button color="secondary" variant="contained" component="span" style={{ fontSize: 12 }}><CloudUpload style={{ marginRight: 10 }} />Upload</Button>
                            </label>

                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center"  >
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={8} >

                            <Grid container direction="row" alignItems="center">
                                {[1, 2, 3, 4].map(() => <Grid item xs={3} >
                                    <div style={{ marginRight: 15, width: 100, height: 100, backgroundColor: "#ddd", marginBlock: 10, borderRadius: 5 }}>
                                        <div style={{ position: "relative", flex: .5, padding: 10 }}>
                                            <Cancel style={{ marginRight: 10, position: "absolute", top: -9, right: -18, fontSize: 16 }} />
                                            <Typography variant="h5" style={{ color: "#3B86FF", fontSize: 12, }}>26 Jan 2018</Typography>
                                            <Typography variant="h5" style={{ fontSize: 12, }}>Proposal Documents.pdf</Typography>
                                        </div>
                                    </div>
                                </Grid>)}

                            </Grid>

                            <Grid container direction="row" alignItems="center">
                                {[1, 2, 3].map(() => <Grid item xs={3} >
                                    <div style={{ marginRight: 15, width: 100, height: 100, backgroundColor: "#ddd", marginBlock: 10, borderRadius: 5 }}>
                                        <div style={{ position: "relative", flex: .5, padding: 10 }}>
                                            <Cancel style={{ marginRight: 10, position: "absolute", top: -9, right: -18, fontSize: 16 }} />
                                            <Typography variant="h5" style={{ color: "#3B86FF", fontSize: 12, }}>26 Jan 2018</Typography>
                                            <Typography variant="h5" style={{ fontSize: 12, }}>Proposal Documents.pdf</Typography>
                                        </div>
                                    </div>
                                </Grid>)}


                            </Grid>

                        </Grid>
                    </Grid>



                </Grid>
            </Grid>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit}  parentBackCall={onBack} />
        </div>
    )
}

export default ContractDocumentition
