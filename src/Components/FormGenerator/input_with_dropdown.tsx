import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DataService from "../../Service";

import {
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  Grid,
  TextField,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";
// import classes from "*.module.css";

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
  formControl: {
    width: "100%",
  },
  selectArea: {
    background: '#e8e8e8',
    borderRadius: '0px 4px 4px 0px'
  },
}));

export const Input = (props: any) => {
  const classes = useStyles();
  const theme = createMuiTheme({
    overrides: {
      MuiOutlinedInput: {
        notchedOutline: {
          borderRadius: '4px 0px 0px 4px'
        },
      },
    },
  });
  const {
    // label,
    type,
    inputName,
    inputPlaceholder,
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
    inputValue,
    multiline,
    index,
    handleInputChange
  } = props.componentObject;

  return (
    <ThemeProvider theme={theme}>
      <TextField
        classes={classNames}
        id="outlined-basic"
        name={inputName}
        placeholder={inputPlaceholder}
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
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value, index, 'inputValue')}
      />
    </ThemeProvider>
  );
};

export const SimpleSelect = (props: any) => {
  const classes = useStyles();
  const {
    label,
    type,
    selectOptions,
    selectName,
    selectPlaceholder,
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
    selectValue,
    apiVariable,
    params,
    handleSelectChange,
    index
  } = props.componentObject;

  // const [selectedValue, setSelectedValue] = useState("");
  const [listOptions, setListoptions] = useState([]);

  useEffect(() => {
    apiVariable &&
      DataService.getData(params ? params : "", apiVariable).then((res) => {
        console.log(res.data.attributes.drop_down_values, 'test');
        setListoptions(res.data.attributes.drop_down_values);
      });
  }, [apiVariable])



  return (
    <FormControl
      size="small"
      variant={"outlined"}
      className={classes.formControl}
    >
      <Select name={selectName} style={{ color: !selectValue ? '#a9a9a9' : '' }} className={classes.selectArea} displayEmpty value={selectValue} onChange={(e) => handleSelectChange(e.target.value, index, 'selectValue')}>
        <MenuItem>{selectPlaceholder}</MenuItem>
        {(selectOptions || listOptions).map((option: any, index: any) => {
          return <MenuItem key={option.id} value={option.value}>{option.name}</MenuItem>;
        })}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default function InputWithDropdownComponent(props: any) {
  console.log(props)
  const classes = useStyles();
  const { label } = props.componentObject;

  return (
    <Grid container className={classes.gridRoot}>
      {
        label != "" &&
        <Grid item xs={12} md={4}>
          {label}
        </Grid>
      }
      <Grid item xs={12} md={label == "" ? 12 : 7} container>
        <Grid item xs={12} md={10} >
          <Input componentObject={props.componentObject} />
        </Grid>
        <Grid item xs={12} md={2} >
          <SimpleSelect componentObject={props.componentObject} />
        </Grid>
      </Grid>
    </Grid>
  );
}
