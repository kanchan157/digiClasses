import { Avatar, Button, Card, Grid, makeStyles } from '@material-ui/core';
import { PersonAdd, PersonAddDisabled, } from '@material-ui/icons';
import React, { useState } from 'react';
import ModelCardSelectedCoach from './modelCardUsers';

const SearchResult = () => {
    const classes = useStyles();

    const [coaches, setCoaches] = useState('');
    const [menuType, setMenuType] = useState('organization');
    const [coachesCount, setCoachesCount] = useState(0)
    const [coachesList, setCoachesList] = useState<any>([{ name: 'David James' }, { name: 'David James2' }])
    const [selectedCoachesList, setSelectedCoachesList] = useState<any>([])
    return (
        <>
            <Grid container direction="row" justify="center" style={{ border: '0px solid red', marginTop: 20, }}>
                <Grid item xs={10} alignItems="flex-start">
                    <label className={classes.headingTitle}>Search Results</label>
                </Grid>
                <Grid item xs={2} alignItems="flex-end" style={{ border: '0px solid red', position: 'fixed',bottom:10,right:'16%',zIndex:9 }}>
                    <div style={{ position: 'relative' }}>
                        <Avatar onClick={() => (console.log('click'), coaches == 'active' ? setCoaches('') : setCoaches('active'))}
                            style={{ marginTop: 2, float: 'right', backgroundColor: '#077F83', }} alt="" src="/static/images/avatar/1.jpg" />
                        <div className={classes.couchCounts}>{selectedCoachesList.length}</div>
                    </div>

                    {coaches == 'active' && <ModelCardSelectedCoach data={selectedCoachesList} />}
                </Grid>
            </Grid>

            {coachesList.length > 0 && coachesList.map((e:any) => <Grid container direction="row" justify="center" style={{ border: '0px solid red', }}>
                <Grid item xs={12} style={{}}>
                    <Card variant="outlined" style={{ padding: "20px", marginTop: 30, borderRadius: 0, }}>
                        <Grid container direction="row" justify="center" className={classes.deviderLine} >
                            <Grid item xs={1} style={{ border: '0px solid blue' }}>
                                <div>
                                    <Avatar style={{}} alt="" src="/static/images/avatar/1.jpg" />
                                </div>
                            </Grid>
                            <Grid item xs={9} style={{ border: '0px solid yellow', }}>
                                <Grid container direction="row" justify="center" >
                                    <Grid item xs={12} >
                                        <label className={classes.userTitle} >{e.name}</label>
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
                        <Grid container direction="row" justify="center" style={{ marginTop: 10, }}>
                            <Grid item xs={1} style={{}}>

                            </Grid>
                            <Grid item xs={8} style={{ marginTop: 10, }}>
                                <Button variant="contained" color="primary" className={classes.btnBlue}>
                                    English
                                </Button>
                                <Button variant="contained" color="primary" className={classes.btnBlue}>
                                    UK
                                </Button>
                                <Button variant="contained" color="primary" className={classes.btnOrange}>
                                    Voice Dialouge
                                </Button>
                                <Button variant="contained" color="primary" className={classes.btnGreen}>
                                    Design Manager
                                </Button>
                            </Grid>
                            <Grid item xs={3} style={{}}>
                                <Button
                                    variant="outlined"
                                    // color="#981B1E"
                                    size="small"
                                    className={classes.addCoachBtn}
                                    startIcon={<PersonAdd />}
                                    onClick={() => (setSelectedCoachesList(selectedCoachesList.concat([e])))}
                                >
                                    Add coach to your list
                                </Button>
                            </Grid>

                        </Grid>
                    </Card>
                </Grid>
            </Grid>)}

            {coachesList.length == 0 && <Grid container direction="row" alignItems="center">
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <PersonAddDisabled className={classes.noUserIcon} />
                    <label className={classes.noUserTitle}>No results found</label>
                </Grid>
            </Grid>}

        </>
    )
}
export default SearchResult

const useStyles = makeStyles((theme) => ({
    headingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
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
    couchCounts: {
        width: 15,
        height: 15,
        backgroundColor: '#077F83',
        color: '#fff',
        position: 'absolute',
        right: -4,
        fontSize: 10,
        textAlign: 'center',
        border: '1px solid ',
        borderColor: '#fff',
        borderRadius: 50,
        cursor: 'pointer'
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
        boxShadow: 'none',
        float: 'right',
        '&:hover': {
            backgroundColor: 'none',
        },
    },
    deviderLine: {
        borderBottom: '1px solid #F1F1F3',
        paddingBottom: 10,
    },
    btnBlue: {
        borderRadius: 50,
        textTransform: 'capitalize',
        backgroundColor: '#40C9FC',
        fontSize: 11,
        marginRight: 20,
    },
    btnOrange: {
        borderRadius: 50,
        textTransform: 'capitalize',
        backgroundColor: '#FFCC53',
        fontSize: 11,
        marginRight: 20,
    },
    btnGreen: {
        borderRadius: 50,
        textTransform: 'capitalize',
        backgroundColor: '#4AD991',
        fontSize: 11,
        marginRight: 20,
    },
    addCoachBtn: {
        border: '1px solid #981B1E',
        color: '#981B1E',
        textAlign: 'center',
        fontSize: 12,
        borderRadius: 4,
        float: 'right',
        padding: '5px 5px',
        textTransform: 'capitalize'
    },
    menuOption: {
        border: '0px solid red',
        position: 'absolute',
        zIndex: 1,
        // maxWidth: 360,
        // minWidth: 330,
        top: 52,
    },
    noUserIcon: {
        fontSize: 35,
        color: '#40C9FC',
        width: '100%'
    },
    noUserTitle: {
        fontSize: 14
    },
}))