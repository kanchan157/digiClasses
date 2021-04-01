import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import {
    Select,
    FormControl,
    FormHelperText,
    MenuItem,
    Grid,
  } from "@material-ui/core";
  import DataService from "../../Service";

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      width: "100%"
    },
    gridRoot: {
      flexGrow: 1,
      marginBottom: "20px"
    }
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export const MultipleSelect = ({componentObject}) => {

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
      } = componentObject;

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [listOptions, setListoptions] = useState([]);

  useEffect(() => {
    apiVariable &&
    DataService.getData(params ? params : "",apiVariable).then((res) => { 
      console.log(res.data.attributes.drop_down_values, 'test');
      setListoptions(res.data.attributes.drop_down_values);
    });
  },[apiVariable])

//   const handleMultiselectChange = (event) => {
//     setPersonName(event.target.value);
//   };

  return (
    <div>
      <FormControl
        size="small"
        // className={clsx(classes.formControl, classes.noLabel)}
      >
        <Select
          variant={"outlined"}
          multiple
          displayEmpty
          value={value ? value : []}
          onChange={(e) => handleChange(e.target.value, index)}
        //   input={<Input />}
        //   renderValue={(selected) => {
        //     if (selected.length === 0) {
        //       return <em>Placeholder</em>;
        //     }

        //     return selected.join(", ");
        //   }}
          MenuProps={MenuProps}
        //   inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem>
            {placeholder}
          </MenuItem>
          {(selectOptions || listOptions).map((option) => (
            <MenuItem
            key={option.id} 
            value={option.value}
              style={getStyles(name, personName, theme)}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default function SelectComponent(props) {
    const classes = useStyles();
    const { label } = props.componentObject;
  
    return (
        <Grid container className={classes.gridRoot}>
          <Grid xs={12} md={4}>
            {label}
          </Grid>
          <Grid xs={12} md={7}>
           <MultipleSelect componentObject={props.componentObject} />
          </Grid>
        </Grid>
    );
  };
  