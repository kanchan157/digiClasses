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
    label: "Account Director",
    required: true,
    name: "account_director",
    placeholder: "Name",
  },
  {
    componentType: "select",
    label: "Market Cap",
    placeholder: "$00,000,000",
    selectOptions: dropDownValues
  },
  {
    componentType: "input",
    type: "text",
    label: "Company Registration Number",
    required: true,
    name: "company_registration_number",
    placeholder: "Registration Number",
  },
  {
    componentType: "select",
    label: "Key Stakeholders",
    placeholder: "Multi select Dropdown",
    selectOptions: dropDownValues
  },
  {
    componentType: "select",
    label: "Number of Employees",
    placeholder: "Employees",
    selectOptions: dropDownValues
  },
  {
    componentType: "select",
    label: "Revenue",
    placeholder: "$00,000,000",
    selectOptions: dropDownValues
  },
  {
    componentType: "uploadButton",
    label: "General Documentation",
  },
  {
    componentType: "uploadButton",
    label: "Accounts Documentation",
  },
  {
    componentType: "input",
    type: "text",
    label: "Account Telephone",
    required: true,
    name: "account_telephone_number",
    placeholder: "Accounts telephone number",
  },
  {
    componentType: "input",
    type: "text",
    label: "Account Contact",
    required: true,
    name: "accounts_contact",
    placeholder: "Accounts Contact",
  },
  {
    componentType: "input",
    type: "text",
    multiline: true,
    label: "Internal Notes",
    required: true,
    name: "internal_notes",
    placeholder: "Notes",
  }
];

export default function Profile(props: any) {
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
