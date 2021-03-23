import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../constants";
import FormGenerator from "../../../../../Components/FormGenerator";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       //   width: "70%",
//     },
//   },
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

const dropDownValues = [
  {
    "id": 0,
    "value": "Full Managed Service - Sole",
    "name": "Full Managed Service - Sole"
  },
  {
    "id": 1,
    "value": "Full Managed Coaching Service - Shared",
    "name": "Full Managed Coaching Service - Shared"
  },
  {
    "id": 2,
    "value": "Full Managed Coaching Service (Sole + Other)",
    "name": "Full Managed Coaching Service (Sole + Other)"
  },
  {
    "id": 3,
    "value": "Full Managed Coaching Service Shared + Other Services",
    "name": "Full Managed Coaching Service Shared + Other Services"
  },
  {
    "id": 4,
    "value": "Adhoc",
    "name": "Adhoc"
  }
]

const formInput = [
  {
    componentType: "select",
    label: "Record Owner",
    placeholder: "Record Owner",
    selectOptions: dropDownValues
  },
  {
    componentType: "select",
    label: "Admin Access",
    placeholder: "Name",
    selectOptions: dropDownValues
  },
];

export default function General(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <FormGenerator
        children={formInput}
        submitURL={api_url.organisation}
        handleNext={props.handleNext}
        nextIndex={2}
        setId={props.setId}
      />
    </ThemeProvider>
  );
}
