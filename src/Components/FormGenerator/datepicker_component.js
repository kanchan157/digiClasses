import 'date-fns';
import React, { useEffect } from 'react';
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
    marginBottom: "20px",
  },
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

export const DatePicker = (props) => {

  const classes = useStyles();
  const {
    label,
    id,
    index,
    value,
    handleChange,
    helperText
  } = props.componentObject;


  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.gridRoot}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {/* <Grid container> */}
          <KeyboardDatePicker
            fullWidth
            inputVariant="outlined"
            size="small"
            margin="normal"
            // id={id}
            // label={label}
            // "dd/mm/yyyy"
            format="dd/MM/yyyy"  
            value={value}
            error={helperText ? true : false}
            helperText={helperText}
            // InputProps={{ error: helperText ? true : false, helperText: 'helperText' }}
            onChange={(val) => handleChange(val, index)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          {/* </Grid> */}
        </MuiPickersUtilsProvider>
      </Grid>
    </ThemeProvider>
  );
}

export default function DateComponent(props) {
  console.log(props.componentObject)
  const { label } = props.componentObject;
  useEffect(() => {
}, [props])
  return (
    <Grid container >
      {
        label &&
        <Grid item xs={12} md={4}>
          {label}
        </Grid>
      }
      <Grid item xs={12} md={label ? 7 : 12}>
        <DatePicker componentObject={props.componentObject} />
      </Grid>
    </Grid>
    // </form>
  );
}
