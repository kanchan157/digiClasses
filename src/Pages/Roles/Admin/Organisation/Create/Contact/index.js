import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetOrganisationContact } from "./OrganisationContactActions";

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

export default function Contact(props) {

  const userDetails = JSON.parse(sessionStorage.getItem('user') || '{}');
  const dispatch = useDispatch();

  const handleInputChange = (value, index) => {
    const updatedForm = formInput;
    updatedForm[index]['value'] = value;
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if(item.value) {
        formData[item.name] = item.value;
        dispatch(SetOrganisationContact(formData));
      }
    });
  }

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Website",
      name: "website",
      placeholder: "www.organisation.com",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Primary Telephone",
      name: "primary_telephone",
      placeholder: "Primary Telephone",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Primary Fax",
      name: "primary_fax",
      placeholder: "Primary Fax",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Primary Email",
      name: "primary_email",
      required: true,
      placeholder: "Primary Email",
      handleChange: handleInputChange
    },
    // {
      // componentType: "address"
      // Address component to go here
    // },
    {
      componentType: "input",
      type: "text",
      label: "Facebook",
      name: "facebook",
      placeholder: "facebook.com/organisation",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Twitter",
      name: "twitter",
      placeholder: "twitter.com/organisation",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "LinkedIn",
      name: "linkedin",
      placeholder: "linkedin.com/company/organisation",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Parent Organisation",
      name: "parent_organisation",
      placeholder: "Dropdown",
      apiVariable: "parent_organisations",
      params: `organisation_id=${userDetails && userDetails.data.id}`,
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Departments ",
      placeholder: "Departments",
      apiVariable: "departments",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Busniess Unit",
      name: "business_units",
      placeholder: "Unit",
      apiVariable: "business_units",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Office",
      name: "offices",
      placeholder: "Office",
      apiVariable: "offices",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Functions",
      name: "functions",
      placeholder: "Functions",
      apiVariable: "functions",
      handleChange: handleInputChange
    },
  ];

  const [formInput, setFormInput] = useState(formArray);

  return (
    <ThemeProvider theme={theme}>
      <FormGenerator
        children={formInput}
        nextIndex={2}
        setId={props.setId}
      />
    </ThemeProvider>
  );
}
