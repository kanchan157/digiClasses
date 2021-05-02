import { Card, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import HomeHeaderMenu from '../AcuityOrganizationHome/HomeHeaderMenu';

const CoachDetail = () => {
  const classes = useStyles();
  const discription = [

    {
      headingTitle: "Overview",
      data: ['Robert Schriek is a coach with deep experience working with senior executives. A former Vice President of Marketing & Communications in IBM, Robert has also held a global M&C role in the French-Italian chip technology giant ST Micro. His international experience has included working and living as a senior executive in London, Paris, Amsterdam, Dubai, Geneva, Madrid and New York. Robert has deep experience in leadership, personal development, improving emotional intelligence and behavior change in the Banking/Investment, IT, and Food and Agriculture industries. He is a certified Executive Coach and holds a degree in Communications. A Dutch national, with family roots in the UK and France. He coaches in, English, French or Dutch. Robert has a sense of humor and is passionate about coaching and tackling issues at root cause level']
    },
    {
      headingTitle: "Coaching Approach",
      data: ['Robert takes a refreshing and pragmatic approach to coaching. In his view, there is no such thing as good or bad thinking, behavior or action. It is about reading a situation and doing what is most effective. Robert is trained and experienced in the main coaching techniques but the key tool remains common sense']
    },
    {
      headingTitle: "Background",
      data: ['Robert takes a refreshing and pragmatic approach to coaching. In his view, there is no such thing as good or Robert decided to focus on coaching after a career in Marketing and Communications. His career had taken him from being a non-managerial local employee to being a global VP at IBM. He worked closely with highly demanding (and colorful) executives at board level. This has enabled him to learn about what it takes to be a leader, to motivate and focus teams and get outstanding results. bad thinking, behavior or action. It is about reading a situation and doing what is most effective. Robert is trained and experienced in the main coaching techniques but the key tool remains common sense.']
    },
    {
      headingTitle: "Coaching Areas of Expertise",
      data: ["Growth from executive from to senior executive",
        "Inspirational and other leadership styles",
        " Develop emotional intelligence ",
        " Interpersonal and executive communications ",
        " Personal development; overcoming personality related issues ", " Changing behavior, body language and non-verbal communications ", " Building strategies and setting priorities ", " Organisational (digital) transformation ", " On-boarding",

      ],
    },

  ]
  const clientDescription = [
    {
      descClient:"In my role as a manager of multiple sales teams in a multinational business, Robert gave me the tools and confidence to improve my effectiveness, communication and decision-making which are crucial to the growth and success of sales organisations in a challenging and competitive marketplace. Robert accompanied me in finding specific and concrete solutions to my problems which could be implemented immediately coming out of the different coaching sessions.",
      clientName:"- VP Sales, France at a large staffing company"
    },
    {
      descClient:"Robert has enabled me to take on my responsibilities as VP Sales for Southern Europe. Notably in strengthening my communications and leadership skills.",
      clientName:"- VP Sales, France at a large staffing company"
    },
    {
      descClient:"Robert helped me strengthen my communication skills and ability to drive for success in the international business that I lead.",
      clientName:"- SVP at an International IT company"
    },
    {
      descClient:"Robert enabled me to make strategic choices and with the practical implementation of our transformation program.",
      clientName:"- Executive leading change programs for a large UK bank"
    }

  ]

  return (
    <div>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={12} >
          <HomeHeaderMenu />
        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" justify="center" className={classes.headerBg} style={{ marginBottom: 100 }}>
        <Grid item xs={10}>
          <Grid container direction="row" alignItems="center" >
            <Grid item xs={2} style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: -36 }}>
                <img src="../../../assets/images/userpic.jpg" className={classes.userImg} />
              </div>
            </Grid>
            <Grid item xs={10}>
              <h2 style={{ marginBottom: 5 }}>Robert Schriek</h2>
              <label className={classes.userTitle}>Coach</label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={10} >

          {discription.map((desData: any) => <Grid container direction="row" justify="center" >
            <Grid item xs={3}>
              <label className={classes.coachTitle}>{desData?.headingTitle}</label>
            </Grid>
            <Grid item xs={9}>
              <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={12}>
                  {desData?.data.map((res: any) => <ul className={classes.listing}>
                    <li>
                      <Typography paragraph>
                        {res}
                      </Typography>
                    </li>
                  </ul>)}
                </Grid>
              </Grid>

            </Grid>
          </Grid>)}

          <Grid container direction="row" justify="center" >
            <Grid item xs={3}>
              <label className={classes.coachTitle}>Client Testimonials</label>
            </Grid>
            <Grid item xs={9}>
              {clientDescription.map((data:any) =><Card variant="outlined" className={classes.cardBorder}>
                <Grid container direction="row" alignItems="center" justify="center">
                  <Grid item xs={12} style={{ marginTop: 20 }}>
                    <Typography paragraph>
                      {data?.descClient}
                      </Typography>
                  </Grid>
                  <Grid item xs={12} >
                    <label className={classes.clientName}>{data?.clientName}</label>
                  </Grid>

                </Grid>
              </Card>)}

            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
}
export default CoachDetail;

const useStyles = makeStyles((theme) => ({

  headerBg: {
    backgroundColor: '#EBEAEA',
    height: 150,
  },
  userTitle: {
    color: '#000000',
    textTransform: 'uppercase',
    fontSize: 16
  },
  userImg: {
    borderRadius: '80px',
    width: 140,
    height: 140
  },
  coachTitle: {
    color: '#981B1E',
    fontWeight: 'bold',
    fontSize: 16,
    marginLef: 30,
    lineHeight: 4
  },
  listing: {
    marginTop: '22px !important',
    marginBottom: '-15px !important'
  },
  cardBorder: {
    padding: 10, marginTop: 25, border: '1px solid #077F83'
  },
  clientName: {
    color: '#000000',
    fontSize: 16,
    float: 'right',
    fontWeight: 'bold',
    marginRight: 60,
    marginBottom:20
  }


}))