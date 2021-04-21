import { Button, Divider, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, InputBase, InputLabel, makeStyles, NativeSelect, Paper, RadioGroup, Select, TextField, withStyles, Radio, Slider, Card } from '@material-ui/core'
import { ArrowDropDown, Close, Search } from '@material-ui/icons'
import React, { useMemo, useState } from 'react'
import CustomMultiSelectAutoComplete from '../../Components/CustomMultiSelectAutoComplete';
import CustomSelect from '../../Components/CustomSelect'
import HomeHeaderMenu from '../AcuityOrganizationHome/HomeHeaderMenu';
import CustomMultiSelectCoach from './CustomMultiSelectCoach';
import SearchResult from './SearchResult';
import { useHistory } from 'react-router';

function CoachSearch() {

    const history = useHistory();
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    const [partnerRolesArr, setPartnerRolesArr] = useState([]);
    const data = [
        {
            name: "Languages",
            values: [
                { title: 'English' },
                { title: 'French' },
                { title: 'German' },

            ]
        },
        {
            name: "Business Country",
            values: [
                { title: 'UK' },
                { title: 'America' },
                { title: 'India' },

            ]
        },
        {
            name: "Client Specifics",
            values: [
                { title: 'UK' },
                { title: 'America' },
                { title: 'India' },

            ]
        },
        {
            name: "Levels coach at",
            values: [
                { title: 'English' },
                { title: 'French' },
                { title: 'German' },

            ]
        },
    ]
    const corporateData = [
        {
            name: "Languages",
            values: [
                { title: 'English' },
                { title: 'French' },
                { title: 'German' },

            ]
        },
        {
            name: "Client Specifics areas of expertise",
            values: [
                { title: 'UK' },
                { title: 'America' },
                { title: 'India' },

            ]
        },
        {
            name: "Levels coach at",
            values: [
                { title: 'English' },
                { title: 'French' },
                { title: 'German' },

            ]
        },
        {
            name: "Business Country",
            values: [
                { title: 'UK' },
                { title: 'America' },
                { title: 'India' },

            ]
        }
    ]
    const internalCoachData = [
        {
            name: "Languages",
            values: [
                { title: 'English' },
                { title: 'French' },
                { title: 'German' },

            ]
        },
        {
            name: "Business Country",
            values: [
                { title: 'UK' },
                { title: 'America' },
                { title: 'India' },

            ]
        },
    ]
    const externalCoachData = [
        {
            name: "Languages",
            values: [
                { title: 'English' },
                { title: 'French' },
                { title: 'German' },

            ]
        },
        {
            name: "Business Country",
            values: [
                { title: 'UK' },
                { title: 'America' },
                { title: 'India' },

            ]
        },
    ]

    const [filterOption, setFilterOption] = useState(data);
    const [corporate, setCorporate] = useState(corporateData);
    const [internalCoach, SetinternalCoach] = useState(internalCoachData)
    const [externalCoach, setExternalCoach] = useState(externalCoachData)

    const [additionalFilter, setAdditionalFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<any>([]);

    const handleChange = (event: any) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const onChangeMultipleItem = (inputStateValue: any, inputId: any) => {
        setSelectedFilter({ ...selectedFilter, [inputId]: inputStateValue })
    }

    const filterData = useMemo(() => {
        if (Object.keys(selectedFilter).length) {
            return (Object.keys(selectedFilter).map((e: any) => {
                return (
                    <div className={classes.categoryBox}>
                        <label className={classes.categoryTitle}>{e}</label>
                        { selectedFilter[e].map((val: any) => {
                            return (<>
                                <label className={classes.categoryDetail}>{val.title} ,</label>
                            </>
                            )
                        })}
                        <Close className={classes.categoryicon} />

                    </div>

                )
            }))
        }

    }, [selectedFilter]);

    const [value, setValue] = React.useState('female');

    // const handleChange = (event: any) => {
    //     setValue(event.target.value);
    // };
    function valuetext(value: any) {
        return `${value}°C`;
    }
    const PrettoSlider = withStyles({
        root: {
            color: '#981B1E',
            height: 5,
            marginTop: 35
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
            <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={12} >
                    <HomeHeaderMenu />
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" style={{}}>
                <Grid item xs={8} alignItems="center" className={classes.bgContainer} >

                    <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20 }}>
                        <Grid item xs={7}>
                            <Paper className={classes.root}>
                                <Grid container direction="row" >
                                    <Grid item xs={1}>
                                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                            <Search />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={11} >
                                        {filterData}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container direction="row" alignItems="center" style={{ marginLeft: 20, }}>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" className={classes.btnSearch}
                                        onClick={() => { history.push('/CoachList') }}>
                                        Search
                                    </Button>
                                    <Button onClick={(e: any) => setAdditionalFilter(!additionalFilter)} variant="contained" color="primary" className={classes.btnAdditional}>
                                        {additionalFilter ? 'Hide' : 'Show'} Additional Filters
                                    </Button>
                                </Grid>
                                {Object.keys(selectedFilter).length > 0 && <Grid item xs={12} style={{ marginTop: 10 }}>
                                    <label style={{ color: '#981B1E', fontSize: 12, paddingLeft: 10, textDecoration: 'underline' }}
                                        onClick={() => setSelectedFilter([])}
                                    >Clear all filters</label>
                                </Grid>}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" alignItems="center" style={{ marginTop: 10, }}>
                        {filterOption.map((e) => <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                            <CustomMultiSelectCoach id="partnerRolesArr" values={e} parentcall={onChangeMultipleItem} />
                        </Grid>)}
                    </Grid>

                    {additionalFilter && <>
                        <Grid container direction="row" alignItems="center" style={{ marginTop: 30, }}>
                            <Grid item xs={12} style={{ marginBottom: 10, }}>
                                <label className={classes.headingTitle}>Background/corporate</label>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row" alignItems="center" style={{ marginTop: '10', }}>
                                    {corporate.map((e) => <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                        <CustomMultiSelectCoach id="partnerRolesArr" values={e} parentcall={onChangeMultipleItem} />
                                    </Grid>)}
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid container direction="row" alignItems="center" style={{ marginTop: 30, position: 'relative' }}>
                            <Grid item xs={12} style={{ marginBottom: 10, }}>
                                <label className={classes.headingTitle}>Internal coach filters</label>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row" style={{ marginTop: '10', }}>
                                    {internalCoach.map((e) => <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                        <CustomMultiSelectCoach id="partnerRolesArr" values={e} parentcall={onChangeMultipleItem} />
                                    </Grid>)}
                                    <Grid item xs={3}>
                                    <Card variant="outlined" style={{ padding: 10 , margin: 10}}>


                                        <Grid container direction="row" alignItems="flex-start" style={{ marginBottom: 20}}>

                                            <Grid item xs={12} >
                                                <div>
                                                    <label className={classes.locationTitle}>Location/Radius</label>
                                                    <div style={{ float: 'right' }}>
                                                        <ArrowDropDown />
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Paper component="form" className={classes.rootPop}>
                                                    <IconButton className={classes.iconButtonPop} aria-label="menu">
                                                        <Search />
                                                    </IconButton>
                                                    <InputBase
                                                        className={classes.inputPop}
                                                        placeholder="Search Google Maps"
                                                        inputProps={{ 'aria-label': 'search google maps' }}
                                                    />
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 10, marginBottom: 10 }}>
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
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={{ padding: 30, marginBottom: 20, position: 'absolute', right: 0, width: 250, zIndex: 1 }}>
                            <Grid item xs={12}>
                                <Card variant="outlined" style={{ padding: 10 }}>

                                </Card>
                            </Grid>
                        </Grid>


                        <Grid container direction="row" alignItems="center" style={{ marginTop: 30, }}>
                            <Grid item xs={12} style={{ marginBottom: 10, }}>
                                <label className={classes.headingTitle}>External coach filters</label>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row" alignItems="center" style={{ marginTop: '10', }}>
                                    {externalCoach.map((e) => <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                        <CustomMultiSelectCoach id="partnerRolesArr" values={e} parentcall={onChangeMultipleItem} />
                                    </Grid>)}
                                </Grid>

                            </Grid>
                        </Grid>
                    </>}


                </Grid>

                <Grid item xs={8} alignItems="center" style={{ padding: 0, }}>
                    <SearchResult />
                </Grid>
            </Grid>

        </div>
    )
}

export default CoachSearch

const useStyles = makeStyles((theme) => ({
    bgContainer: {
        backgroundColor: 'rgba(152,27,30,0.1)', padding: 20,
        position: 'relative'
    },
    root: {
        padding: '5px 4px',
        // display: 'flex',
        alignItems: 'center',
        // width: 400,
        border: '1px solid #981b1e',
        boxShadow: 'none',
        borderRadius: '0',
        // height: 100,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 0,
        color: '#981b1e',
        // marginTop: 10,
    },
    categoryBox: {
        border: '1px solid #981B1E',
        padding: 2,
        marginTop: 2,
        marginBottom: 2,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 2,
        display: '-webkit-inline-box',
    },
    categoryTitle: {
        color: '#981B1E',
        fontSize: 14,
        padding: 5,
    },
    categoryDetail: {
        color: '#000000CC',
        fontSize: 14,
        paddingRight: 5,
    },
    categoryicon: {
        fontSize: 12,
        color: '#981B1E',
    },
    btnSearch: {
        backgroundColor: '#981b1e',
        borderRadius: '0',
        textTransform: 'capitalize',
        width: 100,
        fontSize: '14px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'none',
        },
    },
    btnAdditional: {
        backgroundColor: 'rgba(152,27,30,0.1)',
        color: '#981b1e',
        borderRadius: 0,
        marginLeft: 20,
        width: 207,
        textTransform: 'capitalize',
        fontSize: '14px',
        boxShadow: 'none',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    labelText: {
        color: '#4D4F5C',
        fontSize: '14px',
        lineHeight: '18px',
    },
    headingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },


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
    rootPop: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
        height: 30,
        marginTop: 10,
        marginBottom: 10
    },
    inputPop: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButtonPop: {
        padding: 10,
        borderRadius: 0,
        backgroundColor: '#981B1E',
        height: 30,
        width: 35,
        color: 'white'
    },
    divider: {
        height: 28,
        margin: 4,
    },
    radioLocationTitle: {
        color: '#303030',
        fontSize: 13
    },

}))



