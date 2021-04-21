import { Button, Grid, InputLabel, Typography } from '@material-ui/core'
import { Cancel, CloseSharp, CloudUpload } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from './header';
import AdminPartnerClient from '../../../Service/Admin/partner_services'
import { ObjectToFormdata } from '../../../Common/Utils/common_utils';
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions';



function ContractDocumentition(props: any) {
    const global_data = useSelector((state: any) => state.stepperReducer);
    const dispatch = useDispatch();

    const [userData, setUserData]: any = useState([]);
    const [dataArr, setDataArr]: any = useState([]);
    const onSubmit = () => {
        onBeforeSubmit();
    }
    useEffect(() => {
        // alert(global_data.partner_profile)
        // if ( global_data.partner_profile != "") {
        AdminPartnerClient.ContractDocumentition_get({
            partner_profile_id: global_data.partner_profile,
        }).then((response: any) => {
            userData.length = 0;
            setUserData(userData.concat(response.data));
        }).catch(error => alert(JSON.stringify(error.errors)));
        // }
    }, [])
    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }
    const onImageChange = (event: any) => {
        console.log(event.target.files[0])
        var localArr = [];
        var pdata = {
            "attributes": {
                "document": event.target.files[0],
                "created_at": "2021-04-08T12:06:08.000Z",
                "file_name": event.target.files[0].name
            }
        }
        localArr.push(pdata)
        setDataArr(dataArr.concat(localArr));
        setUserData(userData.concat(localArr));
        // onBeforeSubmit();
    }
    const onBeforeSubmit = () => {
        var docArr: any = [];
        dataArr.map((option: any) => {
            docArr.push(option.attributes.document)
        })
        AdminPartnerClient.ContractDocumentition(ObjectToFormdata({
            partner_profile_id: global_data.partner_profile, document: docArr.length > 0 ? (docArr) : (docArr[0])
        })).then((response: any) => {
            dispatch({ type: GLOBAL_STEPPER_DATA, payload: { contractdocumentition_id: response.data.id } });
            props.parentHandleNext(props.activeIndex + 1)

        });
    }
    console.log(userData)
    return (
        <div>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />

            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 30 }}>
                <Grid item xs={10}>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 30 }}>
                        <Grid item xs={4}>
                            <InputLabel>Contract Documents</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <label htmlFor="upload-photo">
                                <input onChange={(e) => { onImageChange(e) }} accept="application/pdf, application/vnd.ms-excel,image/gif, image/jpeg" style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
                                <Button color="secondary" variant="contained" component="span" style={{ fontSize: 12 }}><CloudUpload style={{ marginRight: 10 }} />Upload</Button>
                            </label>

                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center"  >
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={8} >

                            <Grid container direction="row" alignItems="center" spacing={10}>
                                {userData.map((option: any) => <Grid item xs={3} >
                                    <div style={{ marginRight: 15, width: 100, height: 100, backgroundColor: "#ddd", marginBlock: 10, borderRadius: 5 }}>
                                        <div style={{ position: "relative", flex: .5, padding: 10 }}>
                                            <Cancel style={{ marginRight: 10, position: "absolute", top: -9, right: -18, fontSize: 16 }} />
                                            <Typography variant="h5" style={{ color: "#3B86FF", fontSize: 12, }}>{option.attributes.created_at.split("T")[0]}</Typography>
                                            <Typography variant="h5" style={{ fontSize: 12, }}>{option.attributes.file_name}</Typography>
                                        </div>
                                    </div>
                                </Grid>)}

                            </Grid>


                        </Grid>
                    </Grid>



                </Grid>
            </Grid>
            <Header isBack={true} saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} parentBackCall={onBack} />
        </div>
    )
}

export default ContractDocumentition
