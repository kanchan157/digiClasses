import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'

const FooterCoachSearch = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center" style={{}}>
        <Grid item xs={12} alignItems="center" >

          <Grid container direction="row" alignItems="center">
            <Grid item xs={12} >
              <label >Powered by</label>
            </Grid>
            <Grid item xs={12} >
              <img src="../../../assets/images/logo.png" className={classes.logoImg} />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
}
export default FooterCoachSearch;

const useStyles = makeStyles((theme) => ({
  poweredByTitle: {
    fontSize: 14,
    color: '#575756'
},
logoImg: {
    width: 100, float: 'left', marginTop: 10, borderRadius: 0
}

}))