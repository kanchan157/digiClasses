import { AppBar, Avatar, Grid, Link, makeStyles, MenuItem, Menu, MenuList, Select, TextField, Toolbar, IconButton, Card, CardContent, Typography, ListItem, List, ListItemIcon, ListItemText, Divider, InputLabel, Button } from '@material-ui/core'
import React, { useState } from 'react'
import CustomSelect from './CustomSelect'
import Icon from '@material-ui/core/Icon';
import { Search, LocationSearching, Business, Label, SupervisorAccount, Add, AddCircleOutline, AddCircleOutlined, ExpandMore } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
// import Image from 'material-ui-image'


const HeaderMenu = () => {
    const [menu, setMenu] = useState('');
    const [menuType, setMenuType] = useState('organization');
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [userData, setUserData] = useState();


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
            <Grid xs={12} justify="center" alignItems="center" style={{ textAlign: "left", backgroundColor: "#303030", }}>
                <Grid container direction="row" justify="center" alignItems="center" style={{ border: '0px solid red',  }}>
                    <Grid item xs={2}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                            <MenuIcon style={{ color: 'white', position: 'fixed', top: 20, bottom: 0, left: 30, right: 10, }} />
                        </IconButton>

                        <img src="../../../assets/images/logo.png" className={classes.logoImg} />

                    </Grid>
                    <Grid item xs={5} >
                        <Grid container className={classes.orgSearchBox} direction="row" alignItems="center" >
                        <div style={{display:'contents',}} >
                            <div>
                                <Link onClick={() => {menu == 'organization' ? setMenu('') : setMenu('organization')}}>
                                    <InputLabel className={classes.searchBoxTitle} >Organization</InputLabel>
                                </Link>

                                {menu == 'organization' && <Card className={classes.menuOption}>
                                    <List component="nav" aria-label="main mailbox folders" >
                                        {
                                        [{ name: "Organization", subTitle: "Search by ID, Name" },
                                        { name: "Coach", subTitle: "Search by ID, Name or Email" },
                                        { name: "Employee", subTitle: "Search by Id or Email" },
                                        { name: "Program", subTitle: "Search by or Email" },
                                        { name: "Assignment", subTitle: "Search by Id or Email" }]
                                            .map((e: any) => (
                                                <ListItem className={menuType == e.name ? classes.active : classes.inActive} style={{ paddingBottom: 0, paddingTop: 0, }} onClick={() => setMenuType(e.name)}>
                                                    <ListItemIcon style={{ minWidth: 0, }}>
                                                        <Business />
                                                    </ListItemIcon>
                                                    <InputLabel style={{ marginLeft: 20, minWidth: 100, }}><h4>{e.name}</h4></InputLabel>
                                                    <InputLabel style={{ marginLeft: 20, }} ><h5>{e.subTitle}</h5></InputLabel>
                                                </ListItem>))
                                                }

                                    </List>
                                    <Divider />

                                </Card>}
                            </div>
                            <ExpandMore />
                            </div>
                            <div className={classes.searchBox}>
                            <Search className={classes.searchIcon} />
                            <input className={classes.inputBox} type="text" placeholder="Search Name or OrgID" style={{ backgroundColor: 'transparent', borderWidth: 0, color: 'white' }} >
                                 
                            </input>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={5} alignItems="center" justify="center">
                        <Toolbar style={{float:'right',}} >
                            <div>
                                <Link className={classes.menuTitle}>
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link className={classes.menuTitle} onClick={() => {menu == 'manage' ? setMenu('') : setMenu('manage')}}> 
                                    Manage
                                </Link>

                                {menu == 'manage' && <Card className={classes.menuOption}>
                                    <List component="nav" aria-label="main mailbox folders">
                                        {
                                        [{ name: "Organization",  },
                                        { name: "Partners",  }]
                                            .map((e: any) => (
                                                <ListItem style={{ paddingBottom: 0, paddingTop: 0, }} >
                                                    <ListItemIcon style={{ minWidth: 0, }}>
                                                        <SupervisorAccount />
                                                    </ListItemIcon>
                                                    <InputLabel style={{ marginLeft: 20, minWidth: 100, }}><h4>{e.name}</h4></InputLabel>
                                                    <Button variant="contained" color="primary" style={{borderRadius:50, textTransform:'none',}}>
                                                        <AddCircleOutlined style={{marginRight:10, fontSize:15}} />
                                                        Create
                                                    </Button>
                                                    
                                                </ListItem>))
                                                }

                                    </List>
                                    <Divider />

                                </Card>}


                            </div>
                            <div>
                                <Link className={classes.menuTitle}>
                                    Dashboard
                                </Link>
                            </div>
                            <div>
                                <Link className={classes.menuTitle} onClick={() => {menu == 'user' ? setMenu('') : setMenu('user')}}>
                                    John Deo
                                </Link>

                                {menu == 'user' && <Card className={classes.menuOption}>
                                    <List component="nav" aria-label="main mailbox folders">
                                        {
                                        [{ name: "Profile",  },
                                        {name:"Settings"},
                                        { name: "Sign Out",  }]
                                            .map((e: any) => (
                                                <ListItem style={{ paddingBottom: 0, paddingTop: 0, }} >  
                                                    <InputLabel style={{ marginLeft: 20, minWidth: 100, }}><h4>{e.name}</h4></InputLabel>  
                                                </ListItem>))
                                                }

                                    </List>
                                    <Divider />

                                </Card>}
                            </div>
                            <div style={{marginTop: 5,}} >
                                <Link style={{ marginLeft: 30, color: "white" }}>
                                    <ExpandMore />
                                </Link>
                            </div>
                            <Avatar style={{marginTop: 2,}} alt="" src="/static/images/avatar/1.jpg" />


                        </Toolbar>


                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default HeaderMenu

// const {
//     TextField,
//     InputAdornment,
//     IconButton,
//     SearchIcon,
//     Icon
//   } = window[''];

const useStyles = makeStyles((theme) => ({
    active:{
        borderLeft:'3px solid #3b86ff',
        backgroundColor:'#f4f4f4'
    },
    inActive:{
        borderLeft:'3px solid #fff',
    },
    logoImg:{
        width: 100, marginTop: 10, marginLeft: 50, borderRadius: 5,
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
    orgSearchBox:{
        backgroundColor: "#565454", border: '0px solid red', height: 40, borderRadius: 5, color: 'white'
    },
    searchBoxTitle:{
        color: '#fff',
        marginLeft: '10px',
        fontSize: '12px',
        '&:hover': {
            textDecoration:'none',
         },
    },
    searchBox: {
        borderLeft: '1px solid #707070',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        marginLeft:10,
    },
    inputBox:{
        backgroundColor: 'transparent',
        borderWidth: '0px',
        color: 'white',
        border: '1px solid red',
        height: '30px',
        width: '250px',
        marginLeft:20,
    },
    searchIcon: {
        marginLeft:20,
        color: '#fff',
        fontSize:18
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
    menuTitle:{
        marginLeft: 30, color: "#fff", cursor:'pointer',fontSize: 14,
        '&:hover': {
            textDecoration:'none',
         },
    },
    
}))

