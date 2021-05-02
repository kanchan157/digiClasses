import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Select,
  TextField,
  FormControl,
  FormHelperText,
  MenuItem,
  Grid,
  Switch,
} from "@material-ui/core";
import DataService from "../../Service";

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
  helperText: {
    color: "red"
  }
}));

export const Input = (props) => {
  const classes = useStyles();

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
    handleChange,
  } = props.componentObject;

  return (
    <Grid className={classes.gridRoot}>
      <TextField
        classes={classNames}
        id="outlined-basic"
        name={name}
        placeholder={placeholder}
        variant="outlined"
        required={required ? required : false}
        disabled={disabled}
        type={type}
        size="small"
        defaultValue={defaultValue}
        error={helperText ? true : false}
        helperText={helperText}
        FormHelperTextProps={{
          className: classes.helperText
        }}
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
        fullWidth
        value={value}
        onChange={(e) => handleChange(e.target.value, index)}
      />
    </Grid>
  );
};

export const SimpleSelect = (props) => {
  const classes = useStyles();
  const {
    type,
    selectOptions,
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
    apiVariable,
    params,
    handleChange,
    index,
  } = props.componentObject;

  // const [selectedValue, setSelectedValue] = useState("");
  const [listOptions, setListoptions] = useState([]);

  useEffect(() => {
    apiVariable &&
      DataService.getData(params ? params : "", apiVariable).then((res) => {
        setListoptions(res.data.attributes.drop_down_values);
      });
  }, [apiVariable]);

  return (
    <FormControl
      size="small"
      variant={"outlined"}
      className={classes.formControl}
      error={helperText ? true : false}
    >
      <Select
        name={name}
        style={{ color: !value ? "#a9a9a9" : "" }}
        displayEmpty
        value={value}
        onChange={(e) => handleChange(e.target.value, index)}
      >
        <span style={{ paddingLeft: "10px", color: "gray" }}>
          {placeholder}
        </span>
        {(selectOptions || listOptions).map((option, index) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.value}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function AddressComponent(props) {
  const { label } = props.componentObject;

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        {label}
      </Grid>
      <Grid item xs={12} md={7}>
        <Input componentObject={props.componentObject.addressLine1} />
        <Input componentObject={props.componentObject.addressLine2} />
        <Input componentObject={props.componentObject.businessTelephone} />
        <Grid container xs={12} md={12}>
          <Grid item style={{ paddingRight: "5px" }} xs={12} md={6}>
            <SimpleSelect componentObject={props.componentObject.city} />
          </Grid>
          <Grid item style={{ paddingLeft: "5px" }} xs={12} md={6}>
            <Input componentObject={props.componentObject.county} />
          </Grid>
          <Grid item style={{ paddingRight: "5px" }} xs={12} md={6}>
            <SimpleSelect componentObject={props.componentObject.country} />
          </Grid>
          <Grid item style={{ paddingLeft: "5px" }} xs={12} md={6}>
            <Input componentObject={props.componentObject.zipcode} />
          </Grid>
        </Grid>
        <Input componentObject={props.componentObject.businessFax} />
        <Input componentObject={props.componentObject.businessEmail} />
      </Grid>
      {/* <Grid style={{paddingLeft: '5px'}} item md={1}>
      <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <AntSwitch checked={true} name="checkedC" />
          </Grid>
          <Grid item style={{fontSize: '12px'}}>Headquarters</Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
}
