import { Button, Card, Grid, Icon, makeStyles, Typography } from '@material-ui/core';
import { ArrowForward, ContactPhoneOutlined, Redo } from '@material-ui/icons';
import React from 'react';

const ButtonDesign = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="center" >
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="center" style={{ textAlign: 'center', }}>

                        <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                            <Card variant="outlined" style={{ padding: 20, }}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} justify="center" className={classes.centerItem}>
                                        <Card className={classes.boxShadow}>
                                            <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <h4>Coaching Request Form (External)</h4>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            endIcon={<ArrowForward />}
                                            className={classes.btnComplete}
                                        >
                                            Complete Form
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<Redo />}
                                            className={classes.btnShare}
                                        >
                                            Share CRF
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                        <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                            <Card variant="outlined" style={{ padding: 20, }}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} justify="center" className={classes.centerItem}>
                                        <Card className={classes.boxShadow}>
                                            <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <h4>Coaching Request Form (External)</h4>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            endIcon={<ArrowForward />}
                                            className={classes.btnComplete}
                                        >
                                            Complete Form
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<Redo />}
                                            className={classes.btnShare}
                                        >
                                            Share CRF
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                        <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                            <Card variant="outlined" style={{ padding: 20, }}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} justify="center" className={classes.centerItem}>
                                        <Card className={classes.boxShadow}>
                                            <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <h4>Request Coachs</h4>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            endIcon={<ArrowForward />}
                                            className={classes.btnComplete}
                                        >
                                            Request Coachs
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Card>
                        </Grid>
                    
                    </Grid>

                </Grid>
            </Grid>

            <Grid container direction="row" alignItems="center" justify="center" >
                <Grid item xs={3} justify="center" >
                    {/* <Grid container direction="row" alignItems="center" style={{ textAlign: 'center', }}>
                        <Grid item xs={12}> */}
                    {/* <Card variant="outlined" style={{ padding: 20, }} > */}
                        <Grid container direction="row" className={classes.cardColor} alignItems="center">
                            <Grid item xs={12} justify="center" className={classes.centerItem}>
                                <Card className={classes.boxShadow}>

                                </Card>
                            </Grid>
                            <Grid item xs={12} justify="center" style={{marginTop:25}} >
                                <p>To discuss new programmes</p>
                            </Grid>
                            <Grid item xs={12} justify="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ArrowForward />}
                                    className={classes.btnComplete}
                                >
                                    Complete Form
                                </Button>
                            </Grid>
                        </Grid>
                    {/* </Card> */}
                    {/* </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
        
        </div>
    )
}
export default ButtonDesign

const useStyles = makeStyles({
    centerItem: {
        justifyContent: 'center',
        display: 'flex',
        border: '0px solid red',
    },
    boxShadow: {
        border: '0px solid red',
        width: 50,
        height: 40,
        padding: 10,

    },
    btnComplete: {
        backgroundColor: '#981B1E',
        textTransform: 'capitalize',
        fontSize: 12
    },
    btnShare: {
        backgroundColor: '#fff',
        border: '1px solid #981B1E',
        textTransform: 'capitalize',
        fontSize: 12,
        color: '#981B1E',
    },
    cardColor:{
        backgroundColor: '#EEEEEE',
        padding: 20,
        textAlign: 'center',
        marginTop:30,
        marginBottom:30,
        borderRadius:5
    }
});