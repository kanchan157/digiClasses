import { Button, Divider, FormControl, FormHelperText, Grid, IconButton, InputBase, InputLabel, makeStyles, NativeSelect, Paper, Select, TextField } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import CustomSelect from '../../Components/CustomSelect'

function CoachSearch() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: any) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (
        <div>
            <Grid container direction="row" alignItems="center" style={{}}>
                <Grid item xs={8} style={{ backgroundColor: 'rgba(152,27,30,0.2)', padding: 20, }}>

                    <Grid container direction="row" alignItems="center" style={{ marginBottom: 20 }}>
                        <Grid item xs={7}>
                            <Paper className={classes.root}>
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <Search />
                                </IconButton>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search Coach"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container direction="row" alignItems="center" style={{ marginLeft: 20, }}>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" className={classes.btnSearch}>
                                        Search
                                    </Button>
                                    <Button variant="contained" color="primary" className={classes.btnAdditional}>
                                        Show Additional Filters
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginTop: '20', }}>
                        <Grid item xs={12}>
                
                            {/* <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel >Currently available for new assignments</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChange}
                                    label="Age"
                                    inputProps={{
                                        name: 'age',
                                        // id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" disabled/>
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl> */}
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>

        </div>
    )
}

export default CoachSearch

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        // width: 400,
        border: '1px solid #981b1e',
        boxShadow: 'none',
        borderRadius: '0',
        height: 30,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        color: '#981b1e',
    },
    btnSearch: {
        backgroundColor: '#981b1e',
        borderRadius: '0',
        textTransform: 'capitalize',
        width: 100,
        '&:hover': {
            backgroundColor: 'none',
        },
    },
    btnAdditional: {
        backgroundColor: 'rgba(152,27,30,0.1)',
        color: '#981b1e',
        borderRadius: 0,
        marginLeft: 20,
        width: 220,
        textTransform: 'capitalize',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}))
