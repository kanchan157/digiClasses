import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import { ContactPhoneOutlined, Label } from '@material-ui/icons';
import React, { useState } from 'react'
import HomeHeaderMenu from './HomeHeaderMenu';

function Home() {
    const classes = useStyles();
    const [activeMenu, setActiveMenu] = useState(0);
    const menues = [{ menu: "Existing Programme" },
    { menu: "New Enqueries" },
    { menu: "Resources" },
    { menu: "Coach Panel" },
    { menu: "Contact Us" }]

    const data: any = {
        'Existing Programme': [{
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
        ],

        'New Enqueries': [{
            headingName: "Coaching Request Form (External)",
            info: 'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.'
        },
        {
            headingName: "Coaching Request Form (Internal)",
            info: 'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.'
        },
        {
            headingName: "Request Coaches",
            info: 'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.'
        }
        ],

        'Resources': [{
            headingName: "Assessment for Coaching Needs",
            info: 'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.'
        },
        {
            headingName: "Benefits of Coaching",
            info: 'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.'
        },
        {
            headingName: "Executive Diagnostic Checklist",
            info: 'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.'
        },
        {
            headingName: "Is Coaching Right For you",
            info: 'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.'
        },
        {
            headingName: "How to get the best from your coaching",
            info: 'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.'
        }
        ],

        'Coach Panel': [{
            headingName: "External Coaches",
            info: 'Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu nunc sit amet elit euismod faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis gravida eget neque vel vulputate.'
        },
        {
            headingName: "Internal Coaches",
            info: 'Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu nunc sit amet elit euismod faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis gravida eget neque vel vulputate.'
        },
        {
            headingName: "Onboard Coach Request",
            info: 'Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu nunc sit amet elit euismod faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis gravida eget neque vel vulputate.'
        }
        ],
        'Contact Us': [{
            headingName: "",
            info: 'To discuss new programmes'
        }]
    }

    return (
        <div>
            <HomeHeaderMenu />
            <Grid container direction="row" className={classes.bgImg} alignItems="center" justify="center" >
                <Grid item xs={12} style={{ textAlign: 'center',}}>
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

                        {data[`${menues[activeMenu].menu}`].map((data:any) => <Grid item xs={4} justify="center" style={{ padding: 10, }}>
                            <Card variant="outlined" style={{ padding: 20, }}>
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


                    </Grid>

                </Grid>
            </Grid>
        </div >
    )
}

export default Home 

const useStyles = makeStyles({
    bgImg:{
        border:'0px solid red',
        // backgroundImage:`url(${""})`
        // backgroundColor:'#470000',
        background: 'linear-gradient(45deg, #470000 30%, #960000 90%)',
    },
    welcomeTitle:{
        color:'#fff',
        padding:20,
    },
    textContent:{
        color:'#fff',
        fontSize:14,
        lineHeight:2,
        paddingBottom:30
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
    centerItem: {
        justifyContent: 'center',
        display: 'flex',
        border: '0px solid red',
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

});
