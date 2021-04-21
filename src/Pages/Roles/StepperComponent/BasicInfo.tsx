import { Button, Grid, InputLabel, makeStyles, Typography } from '@material-ui/core'
import { Cancel, CloudUpload } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ObjectToFormdata } from '../../../Common/Utils/common_utils';
import CustomInput from '../../../Components/CustomInput';
import CustomMultiSelectAutoComplete from '../../../Components/CustomMultiSelectAutoComplete';
import CustomRadioButton from '../../../Components/CustomRadioButton';
import CustomSelect from '../../../Components/CustomSelect';
import DateComponent from '../../../Components/FormGenerator/datepicker_component';
import { GLOBAL_STEPPER_DATA } from '../../../Redux/actions';
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import Header from './header';
const useStyles = makeStyles(() => ({
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
}))


function BasicInfo(props: any) {
    const partnerDummyRoleArr = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II'];
    const languageArr = ['English', 'French', 'German'];

    const data = {
        first_name: '',
        middle_name: '',
        last_name: '',
        full_name: '',
        title: '',
        email: '',
        phone: '',
        source: '',
        initial_contact_date: '',
        contact_location: '',
        referred_by: "Self",
        sourced_for: "",
        associate_coach: true,
        associate_role: '',
        associate_bio: '',
        partner_roles_attributes: '',
        organisation_name: "",
        address_line1: '',
        address_line2: '',
        zipcode: '',
        city: "",
        country_list_id: '',
        country: "",
        facebook: '',
        gender: '',
        linkedin: '',
        secondary_email: '',
        skype: '',
        suffix: '',
        twitter: '',
        level_of_authorisation: '',
        service_authorisation: "Self",
        authorisation_provided_by: "Self",
        bame: "",
        diversity_inclusion: true,
        telephone: '',
        language_attribute: [],
        website: "",
        website1: "",
        nationality_list_id: "",
        partner_resumes_attributes: '',
        passport: '',
        visa: '',

        document: '',
    }

    const classes = useStyles();
    const dispatch = useDispatch();

    const global_data = useSelector((state: any) => state.stepperReducer);
    const global_data_common = useSelector((state: any) => state.commonReducer);

    const [submitClickFlag, setSubmitClickFlag] = React.useState(false);
    const [userData, setUserData] = useState(data);
    const [partnerRolesArr, setPartnerRolesArr]: any = useState([]);
    const [languages_attribute, setLanguages_attribute]: any = useState([]);
    const [dataArr, setDataArr]: any = useState([]);

    const setInputState = (inputStateValue: any, inputId: any) => {
        if (inputId == "associate_coach") {
            inputStateValue = inputStateValue == "Yes" ? true : false
        }
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    const onChangeItem = (selectedItemValue: any) => {
        if (selectedItemValue.id == "sourced_for") {
            selectedItemValue.value = selectedItemValue.value == "Yes" ? true : false
        }
        setUserData({ ...userData, [selectedItemValue.id]: selectedItemValue.value })
    };
    const onChangeMultipleItem = (inputStateValue: any, inputId: any) => {
        debugger
        if (inputId == "partnerRolesArr") {
        partnerRolesArr.length = 0

            setPartnerRolesArr(partnerRolesArr.concat((inputStateValue)))
        }
        if(inputId == "languages_attribute"){
            setLanguages_attribute(languages_attribute.concat((inputStateValue)))
        }
        partnerRolesArr.length == 0 ? setSubmitClickFlag(false) : setSubmitClickFlag(true)
    }
    const onChangeMultipleItemLang = (inputStateValue: any, inputId: any) => {
        console.log(inputStateValue);
        setUserData({ ...userData, [inputId]: inputStateValue })
    }
    useEffect(() => {
        getBasicInfo();
        // getSource();
    }, [])

    const getBasicInfo = () => {
        if (global_data.partner_profile != "") {
            AdminPartnerClient.BasicInfo_get('', global_data.partner_profile).then((response: any) => {
                debugger
                alert(response.data.attributes.partner_profile_resumes.length)
                setUserData(response.data.attributes)
                if (response.data.attributes.partner_roles.length > 0) {
                    partnerRolesArr.length = 0;
                    debugger
                    let tempPartnerRolesArr:any= [];
                    response.data.attributes.partner_roles.map((options: any) => {
                        tempPartnerRolesArr.push(options.role)
                        setPartnerRolesArr(tempPartnerRolesArr);
                    })
                }
                if (response.data.attributes.partner_profile_resumes.length > 0) {
                    dataArr.length = 0;
                    var localDataArr: any = [];
                    response.data.attributes.partner_profile_resumes.map((options: any) => {
                        var pdata = {
                            attributes: {
                                created_at: options.created_at,
                                file_name: options.file_name,
                            }
                        }
                        localDataArr.push(pdata)
                    })
                    console.log(localDataArr)
                    setDataArr(dataArr.concat(localDataArr));
                }
            }).catch(error => alert(JSON.stringify(error.errors)));
        }
    }
  
    const onSubmit = () => {
        var flag = true;
        if (userData.first_name == "" || userData.email == "" || userData.phone == "" || partnerRolesArr.length == 0) {
            flag = false;
        }
        console.log(userData)
        // if (flag) {
        //     setSubmitClickFlag(false)
        //     var docArr: any = [];
        //     dataArr.map((option: any) => {
        //         docArr.push(option.attributes.document)
        //     })
        //     if (global_data.partner_profile == "") {
        //         AdminPartnerClient.BasicInfo(ObjectToFormdata({ partner_resumes_attributes: (docArr), partner_roles_attributes: JSON.stringify(partnerRolesArr), ...userData })).then((response: any) => {
        //             props.parentSetProfileId(response.data.id, response.data.attributes.acuity_people_profile_id);
        //             props.parentHandleNext(props.activeIndex + 1)
        //             dispatch({ type: GLOBAL_STEPPER_DATA, payload: { partner_profile: response.data.id } });
        //         }).catch(error => alert(JSON.stringify(error.error)));
        //     } else {
        //         AdminPartnerClient.BasicInfo_put(global_data.partner_profile, ObjectToFormdata({ partner_roles_attributes: JSON.stringify(partnerRolesArr), partner_resumes_attributes: docArr, ...userData })).then(() => {
        //             props.parentHandleNext(props.activeIndex + 1)
        //         }).catch(error => alert(JSON.stringify(error.error)));
        //     }
        // } else {
        //     setSubmitClickFlag(true)
        // }
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
        // onBeforeSubmit();
    }
    // const onBeforeSubmit = () => {
    //     var docArr: any = [];
    //     dataArr.map((option: any) => {
    //         docArr.push(option.attributes.document)
    //     })
    //     AdminPartnerClient.ContractDocumentition(ObjectToFormdata({
    //         partner_profile_id: global_data.partner_profile, document: docArr.length > 0 ? (docArr) : (docArr[0])
    //     })).then((response: any) => {
    //         dispatch({ type: GLOBAL_STEPPER_DATA, payload: { contractdocumentition_id: response.data.id } });
    //         props.parentHandleNext(props.activeIndex + 1)

    //     });
    // }

    return (
        <div>
            <Header saveBtnTitle={'Save & Proceed'} isBack={false} parentcall={onSubmit} />
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 20 }}>
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                        <Grid item xs={4} >
                            <InputLabel className={classes.labelText} style={{ marginTop: 20 }}>Full Name*</InputLabel>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                                <Grid item xs={12} >
                                    <CustomInput id="first_name" variant="outlined" placeholder="First Name"
                                        helperText={(submitClickFlag && userData.first_name == "") ? "* Please enter username" : ""}
                                        error={(submitClickFlag && userData.first_name == "") ? true : false}
                                        parentcall={setInputState} value={userData.first_name} />
                                </Grid>
                            </Grid>

                            <Grid container direction="row" alignItems="center" justify="space-between">
                                <Grid item xs={4} >
                                    <CustomInput id="middle_name" variant="outlined" placeholder="Middle Name"
                                        helperText={(submitClickFlag && userData.first_name == "") ? "* Please enter username" : ""}
                                        error={(submitClickFlag && userData.first_name == "") ? true : false}
                                        parentcall={setInputState} value={userData.middle_name} />
                                </Grid>
                                <Grid item xs={7} >
                                    <CustomInput id="last_name" variant="outlined" placeholder="Last Name"
                                        helperText={(submitClickFlag && userData.first_name == "") ? "* Please enter username" : ""}
                                        error={(submitClickFlag && userData.first_name == "") ? true : false}
                                        parentcall={setInputState} value={userData.last_name} />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" style={{ marginTop: 20 }}>
                                <Grid item xs={12} >
                                    <CustomInput id="full_name" variant="outlined" placeholder="Full Name"
                                        helperText={(submitClickFlag && userData.first_name == "") ? "* Please enter username" : ""}
                                        error={(submitClickFlag && userData.first_name == "") ? true : false}
                                        parentcall={setInputState} value={userData.first_name} />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }} >

                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText} style={{ marginTop: 20 }}>Title*</InputLabel>
                        </Grid>
                        <Grid item xs={4}>
                                <CustomInput id="title" variant="outlined" placeholder="Full Name"
                                helperText={(submitClickFlag && userData.title == "") ? "* Please enter username" : ""}
                                error={(submitClickFlag && userData.title == "") ? true : false}
                                parentcall={setInputState} value={userData.title} />

                            {/* <CustomSelect id="title" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem}
                                helperText={(submitClickFlag && (userData.title == "" || userData.title == undefined)) ? "* Please enter title" : ""}
                                error={(submitClickFlag && userData.title == "") ? true : false} defaultValue={userData.title} /> */}
                        </Grid>

                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Email*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="email" variant="outlined" placeholder="Email" parentcall={setInputState}
                                helperText={(submitClickFlag && userData.email == "") ? "* Please enter email" : ""}
                                error={(submitClickFlag && userData.email == "") ? true : false} value={userData.email} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Phone*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="phone" variant="outlined" placeholder="Phone" parentcall={setInputState} 
                            helperText={(submitClickFlag && userData.phone == "") ? "* Please enter phone" : ""} 
                            error={(submitClickFlag && userData.phone == "") ? true : false} value={userData.phone} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Source</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="source" variant="outlined" placeholder="Source" parentcall={setInputState} value={userData.source} />
                        </Grid>
                    </Grid>
                    {/* <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Organization Name</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="organisation_name" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.organisation_name} />
                        </Grid>
                    </Grid> */}
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Date of initial contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <DateComponent key={'001'} componentObject={
                                {
                                    "componentType": "datePicker",
                                    "required": true,
                                    "label": "",
                                    "name": "start_date_with_client",
                                    "placeholder": "Start Date",
                                    "helperText": false,
                                    "indexKey": "0-0",
                                    "index": "initial_contact_date",
                                    handleChange: setInputState,
                                    value: userData.initial_contact_date
                                }
                            }
                            />
                            {/* <CustomDatePicker id="initial_contact_date" placeholder="DD-MM-YYYY" variant="outlined" parentcall={setInputState} value={userData.initial_contact_date} /> */}
                        </Grid>
                    </Grid>
                    {/* <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Location of contact</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contact_location" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.contact_location} />
                        </Grid>
                    </Grid> */}
                    {/* <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Source</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="source" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} value={userData.source} />
                        </Grid>
                    </Grid> */}
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Contact Location</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="contact_location" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.contact_location} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Referred By</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="referred_by" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.referred_by} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Sourced for Assignment</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="sourced_for" displayEmpty variant="outlined" itemArr={["Yes", "No"]}
                                parentcall={onChangeItem} defaultValue={userData.sourced_for == "true" ? "Yes" : "No"} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate coach</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomRadioButton id="associate_coach" itemArr={["Yes", "No"]} parentcall={setInputState} index={userData.associate_coach ? 0 : 1} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate Role</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="associate_role" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.associate_role} />
                            {/* <CustomSelect id="associate_role" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} parentcall={onChangeItem} defaultValue={userData.associate_role} /> */}
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Associate Bio</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="associate_bio" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.associate_bio} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Role*</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomMultiSelectAutoComplete id="partnerRolesArr" itemArr={partnerDummyRoleArr}
                                helperText={(submitClickFlag && (partnerRolesArr.length == 0)) ? "* Please enter role" : ""}
                                error={(submitClickFlag && partnerRolesArr.length == 0) ? true : false}
                                parentcall={onChangeMultipleItem} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Organization Name</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="organisation_name" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.organisation_name} />
                        </Grid>
                    </Grid>
                    {
                        global_data_common.role == "admin" &&
                        <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                            <Grid item xs={4} >
                                <InputLabel className={classes.labelText} style={{ marginTop: 20, }}>Address*</InputLabel>
                            </Grid>
                            <Grid item xs={8} >
                                <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }}>
                                    <Grid item xs={12} >
                                        <CustomInput id="address_line1" variant="outlined" placeholder="Address Line 1" parentcall={setInputState} value={userData.first_name} />
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }} >
                                    <Grid item xs={12} >
                                        <CustomInput id="address_line2" variant="outlined" placeholder="Address Line 2" 
                                        helperText={(submitClickFlag && userData.address_line2 == "") ? "* Please enter phone" : ""} 
                                        error={(submitClickFlag && userData.address_line2 == "") ? true : false} 
                                        value={userData.address_line2}
                                        parentcall={setInputState} />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" alignItems="center" >
                                    <Grid item xs={6} style={{ padding: 10, paddingRight: 0 }}>
                                        <CustomInput id="zipcode" variant="outlined" placeholder="Zip Code" parentcall={setInputState}
                                        helperText={(submitClickFlag && userData.zipcode == "") ? "* Please enter phone" : ""} 
                                        error={(submitClickFlag && userData.zipcode == "") ? true : false} 
                                         />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomSelect id="city" displayEmpty variant="outlined" itemArr={['India', 'Pakistan']} 
                                        parentcall={onChangeItem} defaultValue={userData.city}
                                        helperText={(submitClickFlag && userData.city == "") ? "* Please enter phone" : ""} 
                                        error={(submitClickFlag && userData.city == "") ? true : false} 
                                         />
                                    </Grid>
                                    <Grid item xs={6} style={{ padding: 10, paddingRight: 0 }}>
                                        <CustomSelect id="country_list_id" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} 
                                        parentcall={onChangeItem} defaultValue={userData.country_list_id}
                                        helperText={(submitClickFlag && userData.country_list_id == "") ? "* Please enter phone" : ""} 
                                        error={(submitClickFlag && userData.country_list_id == "") ? true : false} 
                                         />
                                    </Grid>
                                    <Grid item xs={6} style={{ padding: 10, paddingRight: 0 }}>
                                        <CustomSelect id="country" displayEmpty variant="outlined" itemArr={['Mr', 'Miss']} 
                                        parentcall={onChangeItem} defaultValue={userData.country}
                                        helperText={(submitClickFlag && userData.country == "") ? "* Please enter phone" : ""} 
                                        error={(submitClickFlag && userData.country == "") ? true : false} 
                                        />
                                    </Grid>
                                    {/* <Grid item xs={6}>
                                        <CustomInput id="countryText" variant="outlined" placeholder="Country" parentcall={setInputState} />
                                    </Grid> */}

                                </Grid>

                            </Grid>
                        </Grid>
                    }
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Facebook</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="facebook" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.facebook} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Gender</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="gender" displayEmpty variant="outlined" itemArr={['Male', 'Female']} parentcall={onChangeItem} defaultValue={userData.gender} />

                            {/* <CustomInput id="gender" variant="outlined" 
                            placeholder="Name" parentcall={setInputState} 
                            value={userData.gender} /> */}
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Linkedin</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="linkedin" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.linkedin} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Secondary Email</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="secondary_email" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.secondary_email} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Skype</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="skype" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.skype} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Suffix</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="suffix" displayEmpty variant="outlined" itemArr={['aa', 'bb']} parentcall={onChangeItem} defaultValue={userData.suffix} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Twitter</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="twitter" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.twitter} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Level of Authorisation</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            {/* <CustomSelect id="level_of_authorisation" displayEmpty variant="outlined" itemArr={["Yes", "No"]}
                             parentcall={onChangeItem} defaultValue={userData.level_of_authorisation == "true" ? "Yes" : "No"} /> */}
                            <CustomSelect id="level_of_authorisation" displayEmpty variant="outlined" itemArr={['aa', 'bb']}
                                parentcall={onChangeItem}
                                helperText={(submitClickFlag && (userData.level_of_authorisation == "" || userData.level_of_authorisation == undefined)) ? "* Please enter title" : ""}
                                error={(submitClickFlag && userData.level_of_authorisation == "") ? true : false}
                                defaultValue={userData.level_of_authorisation} />

                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Service Authorisation</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="service_authorisation" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.service_authorisation} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Authorisation Provided By</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="authorisation_provided_by" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.authorisation_provided_by} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Bame</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="bame" displayEmpty variant="outlined" itemArr={['aa', 'bb']} parentcall={onChangeItem} defaultValue={userData.bame} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Diversity Inclusion</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="diversity_inclusion" displayEmpty variant="outlined" itemArr={['aa', 'bb']} parentcall={onChangeItem} defaultValue={userData.diversity_inclusion} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Telephone</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="telephone" variant="outlined" placeholder="Name" 
                            parentcall={setInputState} value={userData.telephone}
                            helperText={(submitClickFlag && (userData.telephone == "" || userData.level_of_authorisation == undefined)) ? "* Please enter title" : ""}
                            error={(submitClickFlag && userData.telephone == "") ? true : false}
                                />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Languages</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                                <CustomMultiSelectAutoComplete id="languages_attribute" itemArr={languageArr}
                                parentcall={onChangeMultipleItem}
                                helperText={(submitClickFlag && (languages_attribute.length == 0)) ? "* Please select languages" : ""} 
                                error={(submitClickFlag && languages_attribute.length == 0) ? true : false} 
                                />

                            {/* <CustomMultiSelectAutoComplete id="languages_attribute" itemArr={languageArr} 
                            helperText={(submitClickFlag && (languages_attribute.length == 0)) ? "* Please enter role" : ""} 
                            error={(submitClickFlag && languages_attribute.length == 0) ? true : false} 
                            parentcall={onChangeMultipleItem} defaultValue={userData.languages_attribute} /> */}

                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Website</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="website" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.website} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Website1</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="website1" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.website1} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Nationality List Id</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect id="nationality_list_id" displayEmpty variant="outlined" itemArr={['1', '2']}
                                parentcall={onChangeItem}
                                helperText={(submitClickFlag && (userData.nationality_list_id == "" || userData.level_of_authorisation == undefined)) ? "* Please enter title" : ""}
                                error={(submitClickFlag && userData.nationality_list_id == "") ? true : false}
                                defaultValue={userData.nationality_list_id} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Partner Resumes</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="partner_resumes_attributes" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.partner_resumes_attributes} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Passport</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="passport" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.passport} />
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Visa</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomInput id="visa" variant="outlined" placeholder="Name" parentcall={setInputState} value={userData.visa} />
                        </Grid>
                    </Grid>




                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={4}>
                            <InputLabel className={classes.labelText}>Resume</InputLabel>
                        </Grid>
                        <Grid item xs={8}>
                            <label htmlFor="upload-photo">
                                {/* <input
                                    type="file"
                                    accept="application/pdf, application/vnd.ms-excel,image/gif, image/jpeg" name="image"
                                    onChange={onImageChange}
                                    style={{ display: "none" }}

                                /> */}
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
                                {dataArr.map((option: any) => <Grid item xs={3} >
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
            <Header saveBtnTitle={'Save & Proceed'} parentcall={onSubmit} />

        </div>
    )
}

export default BasicInfo
