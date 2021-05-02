import React, { useState } from 'react'
import Header from './header';
import Backdrop from '@material-ui/core/Backdrop';
import { Grid, Paper, Container, TextField, Checkbox, FormControlLabel, Button, Typography, Modal, Fade } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
        },
        paper: {
            backgroundColor: "#fff",
            boxShadow: theme.shadows[5],
            padding: 20,
            textAlign: "center"
        },
    }),
);
function Share_Login_Credentials(props: any) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const global_data = useSelector((state: any) => state.stepperReducer);


    const [userData, setUserData] = useState({});
 
    const onSubmit = () => {
        AdminPartnerClient.share_login_credentials({partner_profile_id: global_data.partner_profile}).then((response: any) => {
            props.parentSetProfileId(response.data.id, response.data.attributes.acuity_people_profile_id);
            props.parentHandleNext(props.activeIndex + 1)
        }).catch(error => alert("Something went wrong, please try again !!!"));
        setOpen(false);
    }
    
    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }
    const handleClose = () => {
        props.parentHandleNext(props.activeIndex + 1)
        setOpen(false);
        // history.push('/auth/ChangePassword', { subPage: "resetPassword" })
    };
    return (
        <>
            <Modal
                disableBackdropClick
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Typography variant="h3" style={{ color: "#4D4F5C", marginTop: 20, marginBottom: 30 }}>Do you want to generate and share login credentials with John?</Typography>
                        <Button variant="contained" onClick={onSubmit} color="primary" style={{marginRight:20}}> Yes</Button>
                        <Button variant="outlined" onClick={handleClose} > No</Button>

                    </div>
                </Fade>
            </Modal>
    
        </>
    )
}

export default Share_Login_Credentials
