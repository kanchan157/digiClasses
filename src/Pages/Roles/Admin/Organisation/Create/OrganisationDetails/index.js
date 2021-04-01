import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import DataService from "../../../../../../Service";
import { useDispatch } from "react-redux";
import { SetOrganisationDetails } from "./OrganisationDetailsActions";


const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});


export default function OrganisationDetails(props) {

  const dispatch = useDispatch();

  const handleInputChange = (value, index) => {
    const updatedForm = formInput;
    updatedForm[index]['value'] = value;
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if(item.value) {
        formData[item.name] = item.value;
        dispatch(SetOrganisationDetails(formData));
      }
    });
  }
  
  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Organisation Name",
      required: true,
      name: "organisation_name",
      placeholder: "Organisation Name",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Ownership",
      name: "ownership",
      placeholder: "Select Ownership",
      apiVariable: "ownerships",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Individual Type",
      name: "individual_type",
      placeholder: "Individual Type",
      selectOptions: [{id: 0, value: 'Client', name: 'Client'},{id: 1, value: 'Partner', name: 'Partner'},{id: 2, value: 'Supplier', name: 'Supplier'},{id: 3, value: 'Internal Suppliers', name:'Internal Suppliers'},{id: 4, value: 'Competitor', name: 'Competitor'}],
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Type of Organisation",
      name: "type_of_organisation",
      placeholder: "Type of Organisation",
      apiVariable: "type_of_organisation",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Type of Service",
      name: "type_of_service",
      placeholder: "Type of Service",
      apiVariable: "type_of_services",
      handleChange: handleInputChange
    },
    {
      componentType: "MultipleSelect",
      label: "Service Offered",
      name: "services_offered",
      placeholder: "Service Offered",
      apiVariable: "services_offered",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Internal Status",
      name: "internal_status",
      placeholder: "Internal Status",
      apiVariable: "internal_status",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Territory",
      name: "territory",
      placeholder: "Territory",
      apiVariable: "territories",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Industry Sector",
      name: "industry_sector_list_id",
      placeholder: "Industry Sector",
      apiVariable: "industry_sectors",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Source 1",
      name: "source_referral1_id",
      placeholder: "Source 1",
      select: true,
      defaultValue: "Select Ownership",
      apiVariable: "source_referral1",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Source 2 Referral",
      name: "source_referral2_id",
      placeholder: "Source 2 Referral",
      apiVariable: "source_referral2",
      handleChange: handleInputChange
    },
    {
      componentType: "selectWithDatePicker",
      label: "Attend Acuity Events",
      name: "attended_acuity_event_date",
      placeholder: "Acuity Events",
      selectOptions: [{id: 0, value: 'Yes', name: 'Yes'},{id: 1, value: 'No', name: 'No'}],
      handleChange: handleInputChange
    },
    {
      componentType: "uploadFiles",
      label: "Organisation Picture",
      name: "picture",
      handleChange: handleInputChange
    },
    // {
    //     componentType: "imageUpload",
    //     label: "Organisation Logo",
    //     name: 'picture',
    // },
  ];


  const [formInput, setFormInput] = useState(formArray);

  // useEffect(() => {
  //   setFormInput(formObject);
  // },[]);
  
  return (
    <ThemeProvider theme={theme}>
      <FormGenerator
        children={formInput}
        submitURL={api_url.organisation}
        submitUrl={"organisation_details"}
        nextIndex={1}
        setId={props.setId}
      />
    </ThemeProvider>
  );
}
