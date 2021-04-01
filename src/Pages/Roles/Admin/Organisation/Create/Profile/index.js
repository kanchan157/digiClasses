import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetOrganisationProfile } from "./OrganisationProfileActions";

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

export default function Profile(props) {
  
  const userDetails = JSON.parse(sessionStorage.getItem('user') || '{}');
  const dispatch = useDispatch();

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
  }

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Account Director",
      required: true,
      name: "account_director",
      placeholder: "Name",
      handleChange: handleInputChange
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
      handleSelectChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Company Registration Number",
      name: "company_registration_number",
      required: true,
      placeholder: "Registration Number",
      handleChange: handleInputChange
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
      handleChange: handleInputChange
    },
    {
      componentType: "MultipleSelect",
      label: "Delivery Locations",
      name: "delivery_locations",
      placeholder: "Countries",
      apiVariable: "countries",
      params: {organisation_id: userDetails.data.id},
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Number of Employees",
      placeholder: "Employees",
      selectOptions: [{id: 0, name: '0-50', value: '0-50' }, {id: 1, name: '50-100', value: '50-100'},{id: 2, name: '100-500', value: '100-500'},{id: 3, name: '500-1000', value: '500-1000'},{id: 4, name: '1000-5000', value: '1000-5000'},{id: 5, name: '5000-10000', value: '5000-10000'},{id: 6, name: '10000+', value: '10000+'}],
      handleChange: handleInputChange
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
      handleSelectChange: handleInputChange
    },
    {
      componentType: "uploadFiles",
      name: "general_documents",
      label: "General Documentation",
      handleChange: handleInputChange
    },
    {
      componentType: "uploadFiles",
      name: "accounts_documents",
      label: "Accounts Documentation",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Account Telephone",
      name: "account_telephone",
      required: true,
      placeholder: "Accounts telephone number",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Account Contact",
      name: "account_contact",
      required: true,
      placeholder: "Accounts Contact",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      multiline: true,
      label: "Internal Notes",
      required: true,
      name: "internal_notes",
      placeholder: "Notes",
      handleChange: handleInputChange
    }
  ];

  const [formInput, setFormInput] = useState(formArray);

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
