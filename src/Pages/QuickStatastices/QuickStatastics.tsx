import { Avatar, Box, Card, CardContent, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import HomeHeaderMenu from '../AcuityOrganizationHome/HomeHeaderMenu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { AddShoppingCart } from '@material-ui/icons';
import LinearProgress from '@material-ui/core/LinearProgress';

const QucikStatastics = () => {
  const classes = useStyles();


  const statastData = [
    {
      title: "In progress",
      subTitle: "1"
    },
    {
      title: "Completed",
      subTitle: "4"
    },
    {
      title: "To be started",
      subTitle: "2"
    },
    {
      title: "Shortlist",
      subTitle: "4"
    },
    {
      title: "Chemistry",
      subTitle: "2"
    },
    {
      title: "Cancelled",
      subTitle: "1"
    }

  ]

  const [statastics, setStatastics] = useState(statastData);
  
  const menues = [
    { menu: "In progress" },
    { menu: "To be started" },
    { menu: "Completed" },
    { menu: "In progress" },
    { menu: "To be started" },
    { menu: "Completed" },
    { menu: "All" }
  ]
  const [menuu, setMenuu] = useState(menues);

  const [activeMenu, setActiveMenu] = useState(0);


  return (
    <div className={classes.bgGray}>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={12} >
          <HomeHeaderMenu />
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={10} style={{ padding: '20px 0' }}>
          <h3 className={classes.title}>Quick statistics</h3>
          <label className={classes.subTitle}>Assignments</label>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={10} style={{ padding: '20px 0' }}>
          <Grid container direction="row" justify="center">

            {statastics.map((e) => <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Grid container direction="row" >
                  <Grid item xs={6} style={{ textAlign: 'left' }}>
                    <Typography className={classes.cardTitle}>{e.title}</Typography>
                    <h2 className={classes.titleNumber}>{e.subTitle}</h2>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: 'right' }}>
                    <div className={classes.iconBg}>
                      <AddShoppingCart className={classes.cardIcon} />
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>)}

          </Grid>

        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={10} style={{ padding: '20px 0', textAlign: 'center', borderBottom: '1px solid #70707040' }}>
          {menuu.map((e, index) => <label className={activeMenu == index ? classes.activeMenuStyle : classes.menuTitle}
            onClick={() => setActiveMenu(index)}
          >{e.menu}</label>)}

        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={10} style={{ padding: '20px 0', }}>

          <Grid container direction="row" alignItems="center" justify="flex-start">
            <Grid item xs={3} >
              <Card variant="outlined">
                <CardContent>
                  <Grid container direction="row" alignItems="flex-start">
                    <Grid item xs={12} >
                      <label className={classes.modelTitle}>Assignment 1</label>
                      <label className={classes.modelTitleNumber}>25%</label>
                    </Grid>
                    <Grid item xs={12} >
                      <label className={classes.subModelTitle}>Standard executive coaching</label>
                      <label className={classes.subModelTitleNumber}>Complete</label>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 22 }}>
                      <LinearProgress variant="determinate" value={25} />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                      <Grid container direction="row" alignItems="center" justify="center">
                        <Grid item xs={2} >
                          <Avatar src="/broken-image.jpg" />
                        </Grid>
                        <Grid item xs={10} >
                          <Typography className={classes.userName}>Jacob Jaden</Typography>
                          <label className={classes.userDesig}>Coach</label>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}
export default QucikStatastics;

const useStyles = makeStyles((theme) => ({
  bgGray: {
    backgroundColor: '#B4B4B40D'
  },
  title: {
    color: '#360940',
    margin: 0,
    marginBottom: 5
  },
  subTitle: {
    color: '#43425D80',
    fontSize: 16
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    margin: theme.spacing(2)
  },
  cardTitle: {
    color: '#43425D80',
    fontSize: 14
  },
  titleNumber: {
    margin: 0,
    color: '#4D4F5C'
  },
  iconBg: {
    width: 40,
    height: 40,
    float: 'right',
    borderRadius: 5,
    backgroundColor: '#981B1E1A',
    textAlign: 'center',
    padding: 5
  },
  cardIcon: {
    padding: 10,
    color: '#981B1E'
  },
  menuTitle: {
    paddingLeft: 45,
    paddingRight: 45,
    color: '#43425D80',
    fontSize: 15
  },
  modelTitle: {
    color: '#360940',
    fontSize: 18,
    fontWeight: 'bold'
  },
  modelTitleNumber: {
    color: '#981B1E',
    fontSize: 18,
    fontWeight: 'bold',
    float: 'right'
  },
  subModelTitle: {
    color: '#70707080',
    fontSize: 12
  },
  subModelTitleNumber: {
    color: '#360940',
    fontSize: 12,
    float: 'right'
  },
  root1: {
    width: '100%',
  },
  userName: {
    color: '#000000',
    fontSize: 15,
    lineHeight: 1
  },
  userDesig: {
    color: '#70707080',
    fontSize: 12
  },
  activeMenuStyle: {
    padding: 20,
    borderBottom: '1px solid #981B1E',
    color:'#981B1E'
  },
  activeCard:{
    borderLeft:'2px solid #981B1E'
  }
}))