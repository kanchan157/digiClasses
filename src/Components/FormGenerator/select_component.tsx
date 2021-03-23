import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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

export const SimpleSelect = (props: any) => {
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
    } = props.componentObject;

    const [selectedValue, setSelectedValue] = React.useState("");

    const handleChange = (event: any) => {
      setSelectedValue(event.target.value);
      // props.parentcall({ index: event.target.value, value: props.itemArr[event.target.value - 1] })
    };  

    return(
        <FormControl
        size="small"
        variant={"outlined"}
        className={classes.formControl}
      >
        <Select style={{color: selectedValue === "" ? '#a9a9a9' : '' }} displayEmpty value={selectedValue} onChange={handleChange}>
          <MenuItem value="" >{placeholder}</MenuItem>
          {selectOptions.map((option: any, index: any) => {
            return <MenuItem key={option.id} value={option.value}>{option.name}</MenuItem>;
          })}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
};

export default function SelectComponent(props: any) {
  const classes = useStyles();
  const { label, componentType } = props.componentObject;

  return (
      <Grid container className={classes.gridRoot}>
        <Grid xs={12} md={4}>
          {label}
        </Grid>
        {
        componentType === "select" &&
        <Grid xs={12} md={7}>
         <SimpleSelect componentObject={props.componentObject} />
        </Grid>
        }
        {
        componentType === "selectWithDatePicker" &&
        <Grid xs={12} md={4}>
         <SimpleSelect componentObject={props.componentObject} />
        </Grid>
        }
        {
            componentType === "selectWithDatePicker" && 
        <Grid xs={12} md={3}>
        <DatePicker componentObject={props.componentObject} />
       </Grid>
        }
      </Grid>
  );
};

