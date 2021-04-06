import { Button, Divider, FormControl, FormHelperText, Grid, IconButton, InputBase, InputLabel, makeStyles, NativeSelect, Paper, Select, TextField } from '@material-ui/core'
import { Close, Search } from '@material-ui/icons'
import React, { useMemo, useState } from 'react'
import CustomMultiSelectAutoComplete from '../../Components/CustomMultiSelectAutoComplete';
import CustomSelect from '../../Components/CustomSelect'
import CustomMultiSelectCoach from './CustomMultiSelectCoach';
import SearchResult from './SearchResult';

function CoachSearch() {

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
        debugger
        console.log(selectedFilter);

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
    return (
        <div>
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
                                    <Button variant="contained" color="primary" className={classes.btnSearch}>
                                        Search
                                    </Button>
                                    <Button onClick={(e: any) => setAdditionalFilter(!additionalFilter)} variant="contained" color="primary" className={classes.btnAdditional}>
                                        {additionalFilter ? 'Hide' : 'Show'} Additional Filters
                                    </Button>
                                </Grid>
                                {Object.keys(selectedFilter).length > 0  && <Grid item xs={12} style={{marginTop: 10 }}>
                                    <label style={{ color: '#981B1E', fontSize: 12, paddingLeft:10, textDecoration:'underline' }}
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

                    {additionalFilter && <> <Grid container direction="row" alignItems="center" style={{ marginTop: 30, }}>
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


                        <Grid container direction="row" alignItems="center" style={{ marginTop: 30, }}>
                            <Grid item xs={12} style={{ marginBottom: 10, }}>
                                <label className={classes.headingTitle}>Internal coach filters</label>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row" alignItems="center" style={{ marginTop: '10', }}>
                                    {internalCoach.map((e) => <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                        <CustomMultiSelectCoach id="partnerRolesArr" values={e} parentcall={onChangeMultipleItem} />
                                    </Grid>)}
                                </Grid>
                            </Grid>
                            {/* <Grid container direction="row" alignItems="center" style={{ marginTop: '10', }}>
                            <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                <CustomMultiSelectCoach id="partnerRolesArr" parentcall={onChangeMultipleItem} />
                            </Grid>
                            <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                <CustomMultiSelectCoach id="partnerRolesArr" parentcall={onChangeMultipleItem} />
                            </Grid>
                            <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                            </Grid>
                            <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                <CustomMultiSelectCoach id="partnerRolesArr" parentcall={onChangeMultipleItem} />
                            </Grid>
                        </Grid> */}
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
                                {/* <Grid container direction="row" alignItems="center" style={{ marginTop: '10', }}>
                                <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                    <CustomMultiSelectCoach id="partnerRolesArr" parentcall={onChangeMultipleItem} />
                                </Grid>
                                <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                    <CustomMultiSelectCoach id="partnerRolesArr" parentcall={onChangeMultipleItem} />
                                </Grid>
                                <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                </Grid>
                                <Grid item xs={3} style={{ paddingLeft: '10px', paddingRight: '10px', }}>
                                    <CustomMultiSelectCoach id="partnerRolesArr" parentcall={onChangeMultipleItem} />
                                </Grid>
                            </Grid> */}
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
    },
    root: {
        padding: '10px 4px',
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
        padding: 10,
        color: '#981b1e',
        // marginTop: 10,
    },
    categoryBox: {
        border: '1px solid #981B1E',
        padding: 2,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
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

}))
