import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import DataService from "../../Service";

import {
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { DatePicker } from "./datepicker_component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: "100%",
    },
    gridRoot: {
      flexGrow: 1,
      marginBottom: "20px",
    },
  })
);

export const DatePickerSelect = (props: any) => {
    const classes = useStyles();
    const {
      label,
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
      index
    } = props.componentObject;

    return(
        <FormControl
        size="small"
        variant={"outlined"}
        className={classes.formControl}
      >
        <Select name={name} style={{color: !value ? '#a9a9a9' : '' }} displayEmpty value={value}>
          <MenuItem>{placeholder}</MenuItem>
          {selectOptions.map((option: any, index: any) => {
            return <MenuItem key={option.id} value={option.value}>{option.name}</MenuItem>;
          })}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
};

export default function DatePickerSelectComponent(props: any) {
  const classes = useStyles();
  const { label, componentType } = props.componentObject;

  return (
      <Grid container className={classes.gridRoot}>
        <Grid xs={12} md={4}>
          {label}
        </Grid>
        {
        componentType === "selectWithDatePicker" &&
        <Grid xs={12} md={4}>
         <DatePickerSelect componentObject={props.componentObject} />
        </Grid>
        }
        {
            componentType === "selectWithDatePicker" && 
        <Grid xs={12} md={3}>
        <DatePicker disabled={props.componentObject.value} componentObject={props.componentObject} />
       </Grid>
        }
      </Grid>
  );
};

