import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import { AccountCircle, ArrowBackIos, ArrowForward, FilterList, Search, Settings } from '@material-ui/icons';
import React from 'react'

const CoachList = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="center" >
                <Grid item xs={11} >

                    <Grid container direction="row" alignItems="center" justify="center" className={classes.bgGray}>
                        <Grid item xs={5} >
                            {/* <ArrowBackIos style={{border:'1px solid red',}}/> */}
                            <h3 style={{ margin: 0 }}>Coach List (External)</h3>
                        </Grid>
                        <Grid item xs={7} >
                            <div style={{ float: 'right' }}>
                                <Button
                                    variant="contained"
                                    color="primary"

                                    className={classes.btnComplete}
                                >
                                    Onboard Coach
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"

                                    className={classes.btnComplete}
                                >
                                    Request for assistance/alternative coaches
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Search />}
                                    className={classes.btnSearch}
                                >
                                    Search Coach
                            </Button>

                            </div>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" justify="center" style={{padding:20}}>
                        <Grid item xs={6} >
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <Search />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Search coach name" />
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={6} >
                            <div style={{float:'right'}}>
                                <Button 
                                    style={{marginRight:20}}
                                    variant="contained"
                                    color="primary"
                                    startIcon={<FilterList />}
                                    className={classes.btnSearch}
                                >
                                    Filter
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Settings />}
                                    className={classes.btnSearch}
                                >
                                    Customized
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default CoachList

const useStyles = makeStyles({
    bgGray: {
        backgroundColor: '#F7F7F7',
        padding: 20
    },
    btnComplete: {
        backgroundColor: '#981B1E',
        textTransform: 'capitalize',
        fontSize: 12,
        marginRight: 20
    },
    btnSearch: {
        backgroundColor: '#077F82',
        textTransform: 'capitalize',
        fontSize: 12,
    },

});


