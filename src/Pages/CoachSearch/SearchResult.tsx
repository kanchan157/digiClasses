import { Avatar, Button, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import React from 'react';

const SearchResult = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container direction="row" justify="center" style={{ border: '0px solid red', }}>
                <Grid item xs={10} alignItems="flex-start">
                    <label className={classes.headingTitle}>Search Results</label>
                </Grid>
                <Grid item xs={2} alignItems="flex-end" style={{ border: '0px solid red', }}>
                    <div>
                        <Avatar style={{ marginTop: 2, float: 'right', }} alt="" src="/static/images/avatar/1.jpg" />
                    </div>
                </Grid>
            </Grid>

            {[1,2,].map((e) => <Grid container direction="row" justify="center" style={{ border: '0px solid red', }}>
                <Grid item xs={12} style={{}}>
                    <Card variant="outlined" style={{ padding: "10px", marginTop: 30, borderRadius: 0, }}>
                        <Grid container direction="row" justify="center" className={classes.deviderLine} >
                            <Grid item xs={1} style={{ border: '0px solid blue', }}>
                                <div>
                                    <Avatar style={{}} alt="" src="/static/images/avatar/1.jpg" />
                                </div>
                            </Grid>
                            <Grid item xs={9} style={{ border: '0px solid yellow', }}>
                                <Grid container direction="row" justify="center" >
                                    <Grid item xs={12} >
                                        <label className={classes.userTitle} >David James</label>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <label className={classes.userId} style={{ textTransform: 'uppercase', }}>
                                            id : skyemp943
                                        </label>
                                    </Grid>
                                    <Grid item xs={8} >
                                        <label className={classes.userId}>
                                            E-Mail:<label style={{ textTransform: 'lowercase', }}>sample@anymail.com</label>
                                        </label>
                                        <div>
                                            <div className={classes.onlineCircle}></div>
                                            <label className={classes.onlineAvailable} >
                                                Available Now
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2} style={{ border: '0px solid red', }}>
                                <Button variant="contained" color="primary" className={classes.btnSearch}>
                                    View Profile
                                </Button>
                            </Grid>

                        </Grid>
                        <Grid container direction="row" justify="center" style={{ marginTop:10, }}>
                            <Grid item xs={1} style={{}}>

                            </Grid>
                            <Grid item xs={8}  style={{}}>
                                <Button variant="contained" color="primary" className={classes.btnLanguage}>
                                    English
                                </Button>
                                <Button variant="contained" color="primary" className={classes.btnLanguage}>
                                    UK
                                </Button>
                                <Button variant="contained" color="primary" className={classes.btnLanguage} style={{backgroundColor:'#FFCC53',}}>
                                    Voice Dialouge
                                </Button>
                                <Button variant="contained" color="primary" className={classes.btnLanguage}style={{backgroundColor:'#4AD991',}}>
                                    Design Manager
                                </Button>
                            </Grid>
                            <Grid item xs={3} style={{}}>
                                <div className={classes.addCoachBtn} style={{border:'1px solid #981B1E',}}>
                                    <PersonAdd /> 
                                    <label style={{position: 'relative',bottom: 6,marginLeft: 10,}}>Add coach to your list</label>
                                </div>
                                
                            </Grid>

                        </Grid>
                    </Card>
                </Grid>
            </Grid>)}

            
        </>
    )
}
export default SearchResult

const useStyles = makeStyles((theme) => ({
    headingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4D4F5C',
    },
    userId: {
        fontSize: 14,
        color: '#707070',
        lineHeight: 2,

    },
    onlineCircle: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#21BA45',
        display: 'inline-block',
    },
    onlineAvailable: {
        marginLeft: 10,
        color: '#21BA45',
        fontSize: 14,
    },
    btnSearch: {
        backgroundColor: '#981b1e',
        borderRadius: '0',
        textTransform: 'capitalize',
        // width: 100,
        fontSize: '12px',
        float: 'right',
        '&:hover': {
            backgroundColor: 'none',
        },
    },
    deviderLine: {
        borderBottom: '1px solid #F1F1F3',
        paddingBottom: 10,
    },
    btnLanguage:{
        borderRadius: 50,
        textTransform: 'capitalize',
        backgroundColor: '#40C9FC',
        fontSize: 11,
        marginRight:20,
    },
    addCoachBtn:{
        border: '#981B1E',
        color: '#981B1E',
        textAlign: 'center',
        fontSize:12,
        borderRadius: 4,
        float: 'right',
        padding: '0 5px',
    },
}))