import { Button, Card, CardActions, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowForward, ContactPhoneOutlined } from '@material-ui/icons';
import React from 'react';

const CoachPannel = () => {
    const classes = useStyles();
    const coachPannelHeadingData = [
        {
            headingtitle:"External Coaches"
        },
        {
            headingtitle:"Internal Coaches"
        },
        {
            headingtitle:"Onboard Coach Request"
        },
    ]
    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="center" >
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="center" style={{ textAlign: 'center', }}>

                        
                        {coachPannelHeadingData.map((e:any) => <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                            <Card variant="outlined" style={{ padding: 20, }}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} justify="center" className={classes.centerItem}>
                                        <Card className={classes.boxShadow}>
                                            <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <h4>{e.headingtitle}</h4>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu nunc sit amet elit euismod faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis gravida eget neque vel vulputate.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            endIcon={<ArrowForward />}
                                            className={classes.btnComplete}
                                        >
                                            View Panel
                                        </Button>
                                    </Grid>
                                    
                                </Grid>
                            </Card>
                        </Grid>)}

                
                    </Grid>
                </Grid>
            </Grid>

        </div >
    )
}
export default CoachPannel

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
    
    cardColor:{
        backgroundColor: '#EEEEEE',
        padding: 20,
        textAlign: 'center',
        marginTop:30,
        marginBottom:30,
        borderRadius:5
    }
});