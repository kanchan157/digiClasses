import 'date-fns';
import React from 'react';
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
    },
  },
  gridRoot: {
    flexGrow: 1,
    // marginBottom: "20px",
  },
//   overrides: {
    MuiFormControl: {
        marginNormal: {
            margin: "0px"
        }
      }
//   }
}));

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            marginNormal: {
                marginTop: "0px",
                marginBottom: "0px",
                marginLeft: "1px"
            }
          }
    },
});

export const DatePicker = (props: any) => {
    const { 
      label,
       id,
       index,
       value,
       handleChange
       } = props.componentObject;

  
    return (
        <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* <Grid container> */}
          <KeyboardDatePicker
          inputVariant="outlined"
          size="small"
            margin="normal"
            // id={id}
            // label={label}
            format="MM/dd/yyyy"
            value={value}
            onChange={(value) => handleChange(value, index)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        {/* </Grid> */}
      </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }

export default function DateComponent(props: any) {
  const classes = useStyles();
  const { label } = props.componentObject;

  return (
    // <form style={{ display: "flex", marginBottom: '20px' }} noValidate autoComplete="off">
    <Grid container className={classes.gridRoot}>
      {/* <div style={{ width: "25%" }}>{label}</div> */}
      <Grid item xs={12} md={4}>
        {label}
      </Grid>
      {/* <div style={{ width: "70%" }}> */}
      <Grid item xs={12} md={7}>
      
        <DatePicker componentObject={props.componentObject} />
    
      </Grid>
    </Grid>
    // </form>
  );
}
