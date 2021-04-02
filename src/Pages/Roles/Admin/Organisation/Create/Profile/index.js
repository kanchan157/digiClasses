import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetOrganisationProfile, UpdateOrganisationProfileError } from "./OrganisationProfileActions";

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function Profile(props) {

  const dispatch = useDispatch();

  const {
    account_director,
    market_cap,
    market_cap_currency,
    company_registration_number,
    key_stakeholders,
    delivery_locations,
    number_of_employees,
    revenue,
    revenue_currency,
    general_documents,
    accounts_documents,
    account_telephone,
    account_contact,
    internal_notes
  } = useSelector((state) => state.organisationProfileReducer.data);

  const errors = useSelector(state => state.organisationProfileReducer.errors);
  
  const userDetails = JSON.parse(sessionStorage.getItem('user') || '{}');

  const handleInputChange = (value, index, type) => {
    const updatedForm = formInput;
    if (!type) {
      updatedForm[index]['value'] = value;
    } else {
      updatedForm[index][type] = value;
    }
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if(item.value || item.inputValue || item.selectValue) {
        item.value && (formData[item.name] = item.value);
        item.inputValue && (formData[item.inputName] = item.inputValue)
        item.selectValue && (formData[item.selectName] = item.selectValue)
        dispatch(SetOrganisationProfile(formData));
      }
    });
    dispatch(UpdateOrganisationProfileError(updatedForm[index].name));
  }

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Account Director*",
      helperText: errors.account_director && "*Please enter account director name",
      name: "account_director",
      placeholder: "Name",
      handleChange: handleInputChange,
      value: account_director
    },
    {
      componentType: "inputWithDropdown",
      label: "Market Cap",
      inputName: "market_cap",
      selectName: "market_cap_currency",
      inputPlaceholder: "$00,000,000",
      selectPlaceholder: "USD",
      apiVariable: "currencies",
      handleInputChange: handleInputChange,
      handleSelectChange: handleInputChange,
      inputValue: market_cap,
      selectValue: market_cap_currency
    },
    {
      componentType: "input",
      type: "text",
      label: "Company Registration Number",
      name: "company_registration_number",
      required: true,
      placeholder: "Registration Number",
      handleChange: handleInputChange,
      value: company_registration_number
    },
    // {
    //   componentType: "MultipleSelect",
    //   label: "Service Offered",
    //   name: "services_offered",
    //   placeholder: "Service Offered",
    //   apiVariable: "services_offered",
    //   handleChange: handleInputChange
    // },
    {
      componentType: "MultipleSelect",
      label: "Key Stakeholders",
      name: "key_stakeholders",
      placeholder: "Multi select Dropdown",
      apiVariable: "employee_list",
      params: {organisation_id: userDetails.data.id},
      handleChange: handleInputChange,
      value: key_stakeholders,
    },
    {
      componentType: "MultipleSelect",
      label: "Delivery Locations",
      name: "delivery_locations",
      placeholder: "Countries",
      apiVariable: "countries",
      params: {organisation_id: userDetails.data.id},
      handleChange: handleInputChange,
      value: delivery_locations,
    },
    {
      componentType: "select",
      label: "Number of Employees",
      name: "number_of_employees",
      placeholder: "Employees",
      selectOptions: [{id: 0, name: '0-50', value: 'Range 0-50' }, {id: 1, name: 'Range 50-100', value: 'Range 50-100'},{id: 2, name: '100-500', value: 'Range 100-500'},{id: 3, name: '500-1000', value: 'Range 500-1000'},{id: 4, name: '1000-5000', value: 'Range 1000-5000'},{id: 5, name: '5000-10000', value: 'Range 5000-10000'},{id: 6, name: '10000+', value: 'Range 10000+'}],
      handleChange: handleInputChange,
      value: number_of_employees
    },
    {
      componentType: "inputWithDropdown",
      label: "Revenue",
      inputName: "revenue",
      selectName: "revenue_currency",
      inputPlaceholder: "$00,000,000",
      selectPlaceholder: "USD",
      apiVariable: "currencies",
      handleInputChange: handleInputChange,
      handleSelectChange: handleInputChange,
      inputValue: revenue,
      selectValue: revenue_currency
    },
    {
      componentType: "uploadFiles",
      name: "general_documents",
      label: "General Documentation",
      handleChange: handleInputChange,
      value: general_documents
    },
    {
      componentType: "uploadFiles",
      name: "accounts_documents",
      label: "Accounts Documentation",
      handleChange: handleInputChange,
      value: accounts_documents
    },
    {
      componentType: "input",
      type: "text",
      label: "Account Telephone",
      name: "account_telephone",
      required: true,
      placeholder: "Accounts telephone number",
      handleChange: handleInputChange,
      value: account_telephone
    },
    {
      componentType: "input",
      type: "text",
      label: "Account Contact*",
      name: "account_contact",
      helperText: errors.account_contact && "*Please enter account contact",
      required: true,
      placeholder: "Accounts Contact",
      handleChange: handleInputChange,
      value: account_contact
    },
    {
      componentType: "input",
      type: "text",
      multiline: true,
      label: "Internal Notes",
      required: true,
      name: "internal_notes",
      placeholder: "Notes",
      handleChange: handleInputChange,
      value: internal_notes,
    }
  ];

  const [formInput, setFormInput] = useState(formArray);

  useEffect(() => {
    setFormInput(formArray)
  })

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
