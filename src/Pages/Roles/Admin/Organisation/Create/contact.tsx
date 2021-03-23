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
    componentType: "input",
    type: "text",
    label: "Website",
    required: true,
    name: "website",
    placeholder: "www.organisation.com",
  },
  {
    componentType: "input",
    type: "text",
    label: "Primary Telephone",
    required: true,
    name: "primary_telephone",
    placeholder: "Primary Telephone",
  },
  {
    componentType: "input",
    type: "text",
    label: "Primary Fax",
    required: true,
    name: "primary_fax",
    placeholder: "Primary Fax",
  },
  {
    componentType: "input",
    type: "text",
    label: "Primary Email",
    required: true,
    name: "primary_email",
    placeholder: "Primary Email",
  },
  {
    componentType: "input",
    type: "text",
    label: "Facebook",
    required: true,
    name: "facebook",
    placeholder: "facebook.com/organisation",
  },
  {
    componentType: "input",
    type: "text",
    label: "Twitter",
    required: true,
    name: "twitter",
    placeholder: "twitter.com/organisation",
  },
  {
    componentType: "input",
    type: "text",
    label: "LinkedIn",
    required: true,
    name: "twitter",
    placeholder: "linkedin.com/company/organisation",
  },
  {
    componentType: "select",
    label: "Parent Organisation",
    placeholder: "Dropdown",
    selectOptions: dropDownValues
  },
  {
    componentType: "select",
    label: "Departments ",
    placeholder: "Departments",
    selectOptions: dropDownValues
  },
  {
    componentType: "select",
    label: "Busniess Unit",
    placeholder: "Unit",
    selectOptions: dropDownValues
  },
  {
    componentType: "select",
    label: "Office",
    placeholder: "Office",
    selectOptions: dropDownValues
  },
  {
    componentType: "select",
    label: "Functions",
    placeholder: "Functions",
    selectOptions: dropDownValues
  },
];

export default function Contact(props: any) {
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
