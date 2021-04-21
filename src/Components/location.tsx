import { Card, Divider, FormControl, FormControlLabel, Grid, IconButton, InputBase, makeStyles, Paper, Radio, RadioGroup, Slider, withStyles } from '@material-ui/core';
import { ArrowDropDown, Search } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Location = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    function valuetext(value:any) {
        return `${value}°C`;
      }
      const PrettoSlider = withStyles({
        root: {
          color: '#981B1E',
          height: 5,
          marginTop:35
        },
        thumb: {
          height: 15,
          width: 15,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -5,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 5,
          borderRadius: 4,
        },
        rail: {
          height: 5,
          borderRadius: 4,
        },
      })(Slider);

    return (
        <div>
            <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 20 }}>
                <Grid item xs={2}>
                    <Card variant="outlined" style={{ padding: 10 }}>
                        <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>

                            <Grid item xs={12} >
                                <div>
                                    <label className={classes.locationTitle}>Location/Radius</label>
                                    <div style={{ float: 'right' }}>
                                        <ArrowDropDown />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} >
                                <Paper component="form" className={classes.root}>
                                    <IconButton className={classes.iconButton} aria-label="menu">
                                        <Search />
                                    </IconButton>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Search Google Maps"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} style={{marginTop:10, marginBottom:10}}>
                                <label className={classes.locationTitle2}>Location in CRF</label>
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="female" control={<Radio />} label="Location 1" className={classes.radioLocationTitle} />
                                        <FormControlLabel value="male" control={<Radio />} label="Location 2" className={classes.radioLocationTitle} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <label className={classes.locationTitle2}>Choose Radius</label>
                            </Grid>
                            <Grid item xs={12} >
                                {/* <Slider
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={10}
                                    max={110}
                                    className={classes.sliderRadius}
                                /> */}
                                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        
        </div>
    )
}
export default Location;

const useStyles = makeStyles((theme) => ({

    menuTitle: {
        marginLeft: 30, color: "#fff", cursor: 'pointer', fontSize: 14,
        '&:hover': {
            textDecoration: 'none',
        },
    },
    locationTitle: {
        float: 'left',
        color: '#000000CC',
        fontSize: 14
    },
    locationTitle2: {
        float: 'left',
        color: '#000000CC',
        fontSize: 13,
        fontWeight: 'bold'
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
        height: 30,
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        borderRadius: 0,
        backgroundColor: '#981B1E',
        height: 30,
        width: 35,
        color:'white'
    },
    divider: {
        height: 28,
        margin: 4,
    },
    radioLocationTitle: {
        color: '#303030',
        fontSize: 13
    },
    // sliderRadius:{
    //     marginTop:20,
    // }

}))