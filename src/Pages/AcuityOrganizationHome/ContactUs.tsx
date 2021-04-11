import { Button, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import React from 'react';

const ContactUs = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="center" >
                <Grid item xs={9} justify="center" >
                    <Grid container direction="row" alignItems="center" justify="center" >
                        <Grid item xs={3} justify="center" >
                            <Grid container direction="row" className={classes.cardColor} alignItems="center">
                                <Grid item xs={12} justify="center" className={classes.centerItem}>
                                    <Card className={classes.boxShadow}>

                                    </Card>
                                </Grid>
                                <Grid item xs={12} justify="center" style={{ marginTop: 25 }} >
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
                        </Grid>
                        <Grid item xs={9} justify="center" >
                            <Grid container direction="row" alignItems="center" justify="center" style={{textAlign:'center'}}>
                                <Grid item xs={12} justify="center" >
                                    <h5>
                                        Our team is here to help. Please contact us from the options below:
                                    </h5>
                                </Grid>
                                <Grid item xs={12} justify="center" >
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Telephone: +44 (0) 207 1000 121 
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} justify="center" >
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Email: coaches@acuitycoaching.com
                                    </Typography>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>
                
                </Grid>

            </Grid>

        </div>
    )
}
export default ContactUs
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
    cardColor: {
        backgroundColor: '#EEEEEE',
        padding: 20,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 5
    }
});
