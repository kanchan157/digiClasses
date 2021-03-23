import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";

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

export const Input = (props: any) => {
  const {
    // label,
    type,
    name,
    placeholder,
    required,
    defaultValue,
    disabled,
    readOnly,
    error,
    helperText,
    autoComplete,
    autoFocus,
    classNames,
    rows,
    rowsMax,
    color,
    value,
    multiline,
    index,
    handleChange
  } = props.componentObject;

  return (
    <TextField
      classes={classNames}
      id="outlined-basic"
      name={name}
      placeholder={placeholder}
      variant="outlined"
      required={required ? required : false}
      disabled={disabled}
      error={error ? error : false}
      type={type}
      size="small"
      defaultValue={defaultValue}
      helperText={helperText}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        readOnly: readOnly ? readOnly : false,
      }}
      autoComplete={autoComplete ? autoComplete : false}
      autoFocus={autoFocus}
      multiline={multiline}
      rows={4}
      //   onChange={() => handleChange()}
      rowsMax={rowsMax}
      color={color}
      FormHelperTextProps={{}}
      fullWidth
      value={value}
      onChange={(e) => handleChange(e, index)}
    />
  );
};

export default function InputComponent(props: any) {
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
        <Input componentObject={props.componentObject} />
      </Grid>
    </Grid>
    // </form>
  );
}
