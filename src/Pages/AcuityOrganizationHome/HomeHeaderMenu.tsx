import { AppBar, Avatar, Grid, Link, makeStyles, MenuItem, Menu, MenuList, Select, TextField, Toolbar, IconButton, Card, CardContent, Typography, ListItem, List, ListItemIcon, ListItemText, Divider, InputLabel, Button } from '@material-ui/core'
import React, { useState } from 'react'
// import CustomSelect from './CustomSelect'
import Icon from '@material-ui/core/Icon';
import { Search, LocationSearching, Business, Label, SupervisorAccount, Add, AddCircleOutline, AddCircleOutlined, ExpandMore, NotificationsNone } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { DELETE_STEPPER_DATA } from '../../Redux/actions';
// import { DELETE_STEPPER_DATA, GLOBAL_STEPPER_DATA } from '../Redux/actions';
// import Image from 'material-ui-image'


const HomeHeaderMenu = () => {
    const [menu, setMenu] = useState('');
    const [menuType, setMenuType] = useState('organization');
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [userData, setUserData] = useState();
    const history = useHistory();
    const dispatch = useDispatch();


    const handleChange = (event: any) => {
        // setAuth(event.target.checked);
    };

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid direction="row" justify="center" alignItems="center">
            <Grid xs={12} justify="center" alignItems="center" style={{ textAlign: "left", background: 'linear-gradient(45deg, #470000 30%, #960000 90%)', }}>
                <Grid container direction="row" justify="center" alignItems="center" style={{ border: '0px solid red', }}>
                    <Grid item xs={3}>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                            <MenuIcon style={{ color: 'white', position: 'fixed', top: 20, bottom: 0, left: 30, right: 10, }} />
                        </IconButton> */}

                        <img src="../../../assets/images/logo.png" className={classes.logoImg} />
                        <div style={{marginTop: '3px'}}>
                                <Link className={classes.designation}>
                                    Programm Manager
                                </Link>
                            </div>
                    </Grid>

                    <Grid item xs={6} alignItems="center" justify="center">
                        <Toolbar style={{ float: 'left', }} >
                            <div>
                                <Link className={classes.menuTitle}>
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link className={classes.menuTitle}>
                                    MI
                                </Link>
                            </div>
                            <div>
                                <Link className={classes.menuTitle}>
                                    Dashboard
                                </Link>
                            </div>
                            <div>
                                <Link className={classes.menuTitle}>
                                    Reports
                                </Link>
                            </div>
                            <div>
                                <Link className={classes.menuTitle}>
                                    Coaching Request
                                </Link>
                            </div>
                            <div>
                                <Link className={classes.menuTitle}>
                                    Coach Search
                                </Link>
                            </div>



                        </Toolbar>
                    </Grid>
                    <Grid item xs={3} alignItems="center" justify="center">
                        <Toolbar style={{ float: 'right', }} >
                            
                            <div style={{marginTop: 8}}>
                                <Link className={classes.menuicon}>
                                    <NotificationsNone />
                                </Link>
                            </div>
                            <div>
                                <Link className={classes.menuicon}>
                                Mahasri Jayan
                                </Link>
                            </div>
                            <div style={{ marginTop: 5, }} >
                                <Link style={{ marginLeft: 10, color: "white" }}>
                                    <ExpandMore />
                                </Link>
                            </div>
                            <Avatar style={{ marginTop: 2, }} alt="" src="/static/images/avatar/1.jpg" />


                        </Toolbar>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
export default HomeHeaderMenu

// const {
//     TextField,
//     InputAdornment,
//     IconButton,
//     SearchIcon,
//     Icon
//   } = window[''];

const useStyles = makeStyles((theme) => ({
    active: {
        borderLeft: '3px solid #3b86ff',
        backgroundColor: '#f4f4f4'
    },
    inActive: {
        borderLeft: '3px solid #fff',
    },
    logoImg: {
        width: 100, float:'left', marginLeft: 50, borderRadius: 5,
    },
    menuicon:{
        color: "#fff", cursor: 'pointer', fontSize: 14, marginLeft:20
    },
    menuOption: {
        border: '0px solid red',
        position: 'absolute',
        zIndex: 1,
        // maxWidth: 360,
        // minWidth: 330,
        top: 52,
    },
    searchBar: {
        border: '2px solid red',
        color: '#fff'
    },
    orgSearchBox: {
        backgroundColor: "#565454", border: '0px solid red', height: 40, borderRadius: 5, color: 'white'
    },
    searchBoxTitle: {
        color: '#fff',
        marginLeft: '10px',
        fontSize: '12px',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    searchBox: {
        borderLeft: '1px solid #707070',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        marginLeft: 10,
    },
    inputBox: {
        backgroundColor: 'transparent',
        borderWidth: '0px',
        color: 'white',
        border: '1px solid red',
        height: '30px',
        width: '250px',
        marginLeft: 20,
    },
    searchIcon: {
        marginLeft: 20,
        color: '#fff',
        fontSize: 18
    },

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),

    },
    title: {
        flexGrow: 2,
    },
    menuTitle: {
        marginRight: 40, color: "#fff", cursor: 'pointer', fontSize: 14,
        '&:hover': {
            textDecoration: 'none',
        },
    },
    designation:{
        marginLeft: 10, color: "#fff", cursor: 'pointer', fontSize: 14,
        borderLeft:'1px solid #fff', paddingLeft:20

    }

}))

