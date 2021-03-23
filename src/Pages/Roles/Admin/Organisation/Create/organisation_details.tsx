import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../constants";
import FormGenerator from "../../../../../Components/FormGenerator";
import DataService from "../../../../../Service";

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

const getDropdownData = (field: any) => {
  DataService.getData('',field).then((res: any) => { 
    console.log(res);
    return res
  });
}


export default function OrganisationDetails(props: any) {


  const handleInputChange = (event: any, index: any) => {
    console.log(index, event, "=========");
    const updatedForm = formInput;
    updatedForm[index].value = event.target.value;
    setFormInput(updatedForm);
  }
  
  const formObject = [
    {
      componentType: "input",
      type: "text",
      label: "Organisation Name",
      required: true,
      name: "organisation_name",
      placeholder: "Organisation Name",
      value: '',
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Ownership",
      name: "ownership",
      placeholder: "Select Ownership",
      // selectOptions: getDropdownData('ownerships')
      selectOptions: dropDownValues
    },
    {
      componentType: "select",
      label: "Type of Organisation",
      placeholder: "Type of Organisation",
      selectOptions: dropDownValues
    },
    {
      componentType: "select",
      label: "Type of Service",
      placeholder: "Type of Service",
      selectOptions: dropDownValues
    },
    {
      componentType: "select",
      label: "Service Offered",
      placeholder: "Service Offered",
      selectOptions: dropDownValues,
      multiple: true
    },
    {
      componentType: "select",
      label: "Internal Status",
      placeholder: "Internal Status",
      selectOptions: dropDownValues
    },
    {
      componentType: "select",
      label: "Territory",
      placeholder: "Territory",
      selectOptions: dropDownValues
    },
    {
      componentType: "select",
      label: "Industry Sector",
      placeholder: "Industry Sector",
      selectOptions: dropDownValues
    },
    {
      componentType: "select",
      label: "Source 1",
      placeholder: "Source 1",
      name: "ownership",
      select: true,
      defaultValue: "Select Ownership",
      selectOptions: dropDownValues
    },
    {
      componentType: "select",
      label: "Source 2 Referral",
      placeholder: "Source 2 Referral",
      selectOptions: dropDownValues
    },
    {
      componentType: "selectWithDatePicker",
      label: "Source 2 Referral",
      placeholder: "Source 2 Referral",
      selectOptions: dropDownValues
    },
    {
      componentType: "uploadButton",
      label: "Organisation Picture",
    },
    // {
    //     componentType: "imageUpload",
    //     label: "Organisation Logo",
    //     name: 'picture',
    // },
  ];

  const [formInput, setFormInput] = useState(formObject);

  
  return (
    <ThemeProvider theme={theme}>
      <FormGenerator
        children={formInput}
        submitURL={api_url.organisation}
        handleNext={props.handleNext}
        nextIndex={1}
        setId={props.setId}
      />
    </ThemeProvider>
  );
}
