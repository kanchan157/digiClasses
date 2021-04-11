import classes from '*.module.css';
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, makeStyles, Typography } from '@material-ui/core'
import { ArrowForward, ContactPhoneOutlined, Label, Redo } from '@material-ui/icons';
import React, { useState } from 'react'
import HomeHeaderMenu from './HomeHeaderMenu';

const ModalCard = (props: any) => {
    const classes = useStyles();
    return (
        <div className={classes.infoCard}>
            <p>
                {props.data}
            </p>
        </div>
    )
}

function Home() {
    const classes = useStyles();
    const [activeMenu, setActiveMenu] = useState(0);
    const menues = [
        { menu: "Existing Programme" },
        { menu: "New Enqueries" },
        { menu: "Resources" },
        { menu: "Coach Panel" },
        { menu: "Contact Us" }]

    const existProgramme = [{
        headingName: "Executive Coaching",
        info: 'Our executive coaching programme utilises coaching as a development tool to enhance leadership capability at all levels of the organization.'
    },
    {
        headingName: "Transition Coaching",
        info: 'Our executive coaching programme utilises coaching as a development tool to enhance leadership capability at all levels of the organization.'
    },
    {
        headingName: "Internal Coaching",
        info: 'Our executive coaching programme utilises coaching as a development tool to enhance leadership capability at all levels of the organization.'
    },
    {
        headingName: "Parental Leave Coaching",
        info: 'Our executive coaching programme utilises coaching as a development tool to enhance leadership capability at all levels of the organization.'
    },
    {
        headingName: "Digital Disruption Coaching",
        info: 'Our executive coaching programme utilises coaching as a development tool to enhance leadership capability at all levels of the organization.'
    },
    {
        headingName: "Coaching for Diversity",
        info: 'Our executive coaching programme utilises coaching as a development tool to enhance leadership capability at all levels of the organization.'
    }
    ]
    const resourceList = [
        {
            HeadingTitle: "Assessment for Coaching Needs"
        },
        {
            HeadingTitle: "Benefits of Coaching"
        },
        {
            HeadingTitle: "Executive Diagnostic Checklist"
        },
        {
            HeadingTitle: "Is Coaching Right For you"
        },
    ]
    const coachPannel = [
        {
            headingtitle: "External Coaches"
        },
        {
            headingtitle: "Internal Coaches"
        },
        {
            headingtitle: "Onboard Coach Request"
        },
    ]
 

    return (
        <div>

            <HomeHeaderMenu />
            <Grid container direction="row" className={classes.bgImg} alignItems="center" justify="center" >
                <Grid item xs={12} style={{ textAlign: 'center', }}>
                    <h2 className={classes.welcomeTitle}>Welcome to coaching at SKY Corporation</h2>
                </Grid>
                <Grid item xs={8} style={{ textAlign: 'center', }}>
                    <p className={classes.textContent}>
                        Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sagittis consectetur velit, ac gravida nunc gravida et. Vestibulum at eros imperdiet, volutpat nunc vitae, ornare erat. Proin interdum aliquet porta. Fusce ut semper ligula.
                    </p>
                </Grid>
            </Grid>

            <Grid container direction="row" className={classes.bgHeader} alignItems="center" justify="center" >
                <Grid item xs={10} style={{ border: '0px solid red', textAlign: 'center', }}>
                    <Grid container direction="row" alignItems="center" style={{ textAlign: 'center', }}>
                        <Grid item xs={1} ></Grid>

                        {menues.map((menuData, index) => <Grid item xs={2} key={index}>
                            <label className={activeMenu == index ? classes.activeMenuStyle : classes.menuTitle}
                                onClick={() => setActiveMenu(index)}
                                style={{ border: '0px solid red' }}>
                                {menuData.menu}
                            </label>
                        </Grid>)}

                        <Grid item xs={1} ></Grid>
                    </Grid>
                </Grid>
            </Grid>




            <Grid container direction="row" alignItems="center" justify="center" >
                <Grid item xs={10}>

                    <Grid container direction="row" alignItems="center" style={{ textAlign: 'center', }}>

                        {activeMenu == 0 && existProgramme.map((data: any) => <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                            <Card variant="outlined" style={{ padding: 20, position: 'relative', }}>
                                <ModalCard data={data?.info} />

                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} justify="center" className={classes.centerItem}>
                                        <Card className={classes.boxShadow}>
                                            <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <h4>{data?.headingName}</h4>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {data?.info}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>)}
                        {activeMenu == 1 && <Grid container direction="row" alignItems="center" style={{ textAlign: 'center', }}>

                                <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                                    <Card variant="outlined" style={{ padding: 20, }}>
                                        <Grid container direction="row" alignItems="center">
                                            <Grid item xs={12} justify="center" className={classes.centerItem}>
                                                <Card className={classes.boxShadow}>
                                                    <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} justify="center">
                                                <h4>Coaching Request Form (External)</h4>
                                            </Grid>
                                            <Grid item xs={12} justify="center">
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.
                    </Typography>
                                            </Grid>
                                            <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    endIcon={<ArrowForward />}
                                                    className={classes.btnComplete}
                                                >
                                                    Complete Form
                    </Button>
                                            </Grid>
                                            <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<Redo />}
                                                    className={classes.btnShare}
                                                >
                                                    Share CRF
                    </Button>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                                <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                                    <Card variant="outlined" style={{ padding: 20, }}>
                                        <Grid container direction="row" alignItems="center">
                                            <Grid item xs={12} justify="center" className={classes.centerItem}>
                                                <Card className={classes.boxShadow}>
                                                    <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} justify="center">
                                                <h4>Coaching Request Form (External)</h4>
                                            </Grid>
                                            <Grid item xs={12} justify="center">
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.
                    </Typography>
                                            </Grid>
                                            <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    endIcon={<ArrowForward />}
                                                    className={classes.btnComplete}
                                                >
                                                    Complete Form
                    </Button>
                                            </Grid>
                                            <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<Redo />}
                                                    className={classes.btnShare}
                                                >
                                                    Share CRF
                    </Button>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                                <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                                    <Card variant="outlined" style={{ padding: 20, }}>
                                        <Grid container direction="row" alignItems="center">
                                            <Grid item xs={12} justify="center" className={classes.centerItem}>
                                                <Card className={classes.boxShadow}>
                                                    <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} justify="center">
                                                <h4>Request Coachs</h4>
                                            </Grid>
                                            <Grid item xs={12} justify="center">
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.
                    </Typography>
                                            </Grid>
                                            <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    endIcon={<ArrowForward />}
                                                    className={classes.btnComplete}
                                                >
                                                    Request Coachs
                    </Button>
                                            </Grid>

                                        </Grid>
                                    </Card>
                                </Grid>

                            </Grid>
                        }
                        {activeMenu == 2 && resourceList.map((e: any) => <Grid container direction="row" alignItems="center" style={{ textAlign: 'center', padding: 15, borderBottom: '1px solid #ece6e6' }}>
                            <Grid item xs={3} justify="center" className={classes.centerItem}>
                                <Card className={classes.boxShadow}>
                                    <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                </Card>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'left' }}>
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

                        {activeMenu == 3 && coachPannel.map((e: any) => <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                            <Card variant="outlined" style={{ padding: 20, }}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} justify="center" className={classes.centerItem}>
                                        <Card className={classes.boxShadow}>
                                            <ContactPhoneOutlined style={{ fontSize: 40, }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <h4>{e.headingtitle}</h4>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu nunc sit amet elit euismod faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis gravida eget neque vel vulputate.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} justify="center" style={{ marginTop: 20, }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            endIcon={<ArrowForward />}
                                            className={classes.btnComplete}
                                        >
                                            View Panel
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Card>
                        </Grid>)}

                        {activeMenu == 4 && <Grid container direction="row" alignItems="center" justify="center" >
                            <Grid item xs={3} justify="center" >
                                <Grid container direction="row" className={classes.cardColor} alignItems="center">
                                    <Grid item xs={12} justify="center" className={classes.centerItem}>
                                        <Card className={classes.boxShadow}>

                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} justify="center" style={{ marginTop: 25 }} >
                                        <p>To discuss new programmes</p>
                                    </Grid>
                                    <Grid item xs={12} justify="center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            endIcon={<ArrowForward />}
                                            className={classes.btnComplete}
                                        >
                                            Complete Form
                                </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={9} justify="center" >
                                <Grid container direction="row" alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                                    <Grid item xs={12} justify="center" >
                                        <h5>
                                            Our team is here to help. Please contact us from the options below:
                                    </h5>
                                    </Grid>
                                    <Grid item xs={12} justify="center" >
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Telephone: +44 (0) 207 1000 121
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} justify="center" >
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Email: coaches@acuitycoaching.com
                                    </Typography>
                                    </Grid>

                                </Grid>

                            </Grid>

                        </Grid>
}

                    </Grid>

                </Grid>
            </Grid>
        </div >
    )
}

export default Home

const useStyles = makeStyles({
    infoCard: {
        border: '1px solid #ccc',
        position: 'absolute',
        zIndex: 9,
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: '19px',
        top: '60px'
    },
    bgImg: {
        border: '0px solid red',
        // backgroundImage:`url(${""})`
        // backgroundColor:'#470000',
        background: 'linear-gradient(45deg, #470000 30%, #960000 90%)',
    },
    welcomeTitle: {
        color: '#fff',
        padding: 20,
    },
    textContent: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 2,
        paddingBottom: 30
    },
    bgHeader: {
        backgroundColor: '#e9f1f1',
        padding: 10,
    },
    menuTitle: {
        padding: 10,
        color: '#077F83',
    },
    activeMenuStyle: {
        backgroundColor: '#077F83',
        padding: 10,
        color: '#fff',
    },

    centerImg: {
        border: '0px solid yellow',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex',
    },
    boxShadow: {
        border: '0px solid red',
        width: 50,
        height: 40,
        padding: 10,

    },
    centerItem: {
        justifyContent: 'center',
        display: 'flex',
        border: '0px solid red',
    },

    btnComplete: {
        backgroundColor: '#981B1E',
        textTransform: 'capitalize',
        fontSize: 12
    },
    btnShare: {
        backgroundColor: '#fff',
        border: '1px solid #981B1E',
        textTransform: 'capitalize',
        fontSize: 12,
        color: '#981B1E',
    },
    cardColor: {
        backgroundColor: '#EEEEEE',
        padding: 20,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 5
    }

});
