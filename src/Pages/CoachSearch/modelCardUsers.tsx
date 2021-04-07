import React, { useState } from 'react';
import { Avatar, Backdrop, Button, Card, Dialog, DialogTitle, Divider, Fade, InputLabel, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, Modal, Typography } from '@material-ui/core';
import { AddCircleOutlined, Delete, Label, SupervisorAccount } from '@material-ui/icons';

const ModelCardSelectedCoach = (props:any) => {
    const {data} = props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // const { open } = props;
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Card className={classes.menuOption} style={{ position: 'absolute' }}>
                <List component="nav" aria-label="main mailbox folders" style={{ paddingTop: 0 }}>
                    <div className={classes.userModelTitle}>
                        <label>Selected coaches</label>
                    </div>
                    { data.length > 0 ? (
                        data.map((e: any, index: number) => (

                                // <Dialog open={open}>
                                <ListItem key={index} style={{ border: '0px solid red', }}>
                                    <ListItemAvatar style={{ border: '0px solid yellow', minWidth: 40, }}>
                                        <Avatar className={classes.userModelPic}>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText style={{ border: '0px solid blue', width: 100, fontSize: 14, }} primary={e.name} />
                                    <Delete className={classes.userModelIcon} />

                                </ListItem>

                                // </Dialog>
                            ))):
                            <ListItem style={{ border: '0px solid red', }}>
                                  <ListItemText style={{ border: '0px solid blue', fontSize: 14, }} primary={'No coach selected'} />
                               </ListItem>
                    }

                    {data.length > 0 && <Button variant="contained" color="primary" className={classes.btnSaveProceed} style={{ fontSize: '12px' }}
                        onClick={() => setOpen(true)}>
                        Submit your selection
                                </Button>}
                </List>
                {/* <Divider /> */}

            </Card>
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
                    <div className={`${classes.paper} ${classes.modalInner}`}>
                        <Typography variant="h3" style={{ color: "#4D4F5C", textAlign: "left" }}>Submit coaches</Typography>
                        <Divider />
                        <p>
                            By clicking submit, an email will be sent to all selected coaches requesting for chemistry session.
                       </p>
                        <div style={{ textAlign: "right" }}>
                            <Button variant="outlined" onClick={handleClose} style={{ backgroundColor: '#ccc' }}> Cancel</Button>
                            <Button variant="outlined" onClick={handleClose} style={{ marginLeft: 10, backgroundColor: '#981B1E', color: '#fff' }}> Continue</Button></div>

                    </div>
                </Fade>
            </Modal>
        </>
    )
}
export default ModelCardSelectedCoach

const useStyles = makeStyles((theme) => ({

    menuOption: {
        border: '0px solid red',
        position: 'absolute',
        zIndex: 1,
        // maxWidth: 360,
        // minWidth: 330,
        top: 52,
    },
    userModelTitle: {
        backgroundColor: '#981B1E',
        color: 'white',
        fontSize: 14,
        padding: 10,
    },
    userModelPic: {
        width: 30,
        height: 30,
    },
    userModelIcon: {
        fontSize: 15, color: '#077F83',
    },
    btnSaveProceed: {
        backgroundColor: '#077F83',
        borderRadius: '0',
        textTransform: 'capitalize',
        fontSize: 12,
        // width: 100,
        boxShadow: 'none',
        margin: 20,
        marginRight: 10,
        float: 'right',
        '&:hover': {
            backgroundColor: 'none',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    paper: {
        backgroundColor: "#fff",
        boxShadow: theme.shadows[5],
        padding: 20,
        textAlign: "left"
    },
    modalInner: {
        width: 600,
        borderRadius: 10
    },
}))