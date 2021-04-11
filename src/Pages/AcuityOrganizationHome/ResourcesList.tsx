import { Button, Card, Grid, List, ListItem, makeStyles } from '@material-ui/core';
import { ArrowForward, ContactPhoneOutlined } from '@material-ui/icons';
import React from 'react';

const ResourceList = () => {
    const classes = useStyles();
    const headingTitleData =[
        {
            HeadingTitle:"Assessment for Coaching Needs"
        },
        {
            HeadingTitle:"Benefits of Coaching"
        },
        {
            HeadingTitle:"Executive Diagnostic Checklist"
        },
        {
            HeadingTitle:"Is Coaching Right For you"
        },
    ]
    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="center" >
                <Grid item xs={6}>

                    {headingTitleData.map((e:any) => <Grid container direction="row" alignItems="center" style={{ textAlign: 'center', padding:15,borderBottom:'1px solid #ece6e6' }}>
                        <Grid item xs={3} justify="center" className={classes.centerItem}>
                            <Card className={classes.boxShadow}>
                                <ContactPhoneOutlined style={{ fontSize: 40, }} />
                            </Card>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <h4>{e.HeadingTitle}</h4>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<ArrowForward />}
                                className={classes.btnComplete}
                            >
                                Explore more
                                </Button>
                        </Grid>
                        
                    </Grid>)}
                </Grid>
            </Grid>
        </div>
    )
}
export default ResourceList

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
    }

});