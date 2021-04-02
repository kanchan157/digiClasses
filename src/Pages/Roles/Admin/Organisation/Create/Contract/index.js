import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetOrganisationContract, UpdateOrganisationContractError } from "./OrganisationContractActions";


const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function Contract(props) {

  const dispatch = useDispatch();

  const {
    start_date_with_client,
    tenure,
    financial_invoice_status,
    date_of_first_revenue,
    date_of_most_recent_revenue,
    lifetime_income_from_client,
    date_account_closed,
    legal_contracts
  } = useSelector((state) => state.organisationContractReducer.data);

  const errors = useSelector(state => state.organisationContractReducer.errors);

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
        dispatch(SetOrganisationContract(formData));
      }
    });
    dispatch(UpdateOrganisationContractError(updatedForm[index].name));
  }

  const formArray = [
    {
      componentType: "datePicker",
      required: true,
      label: "Start Date With Client*",
      name: "start_date_with_client",
      value: start_date_with_client,
      placeholder: "Start Date",
      helperText: errors.start_date_with_client && "*Please select a date",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Tenure",
      name: "tenure",
      placeholder: "Tenure",
      handleChange: handleInputChange,
      value: tenure
    },
    {
      componentType: "input",
      type: "text",
      label: "Financial Invoice Status",
      name: "financial_invoice_status",
      placeholder: "Financial Invoice Status",
      handleChange: handleInputChange,
      value: financial_invoice_status
    },
    {
      componentType: "datePicker",
      required: true,
      label: "Date of First Revenue",
      name: "date_of_first_revenue",
      value: date_of_first_revenue,
      handleChange: handleInputChange
    },
    {
      componentType: "datePicker",
      required: true,
      label: "Date of Most Recent Revenue",
      name: "date_of_most_recent_revenue",
      value: date_of_most_recent_revenue,
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Lifetime Income From Client",
      name: "lifetime_income_from_client",
      placeholder: "Lifetime Income From Client",
      handleChange: handleInputChange,
      value: lifetime_income_from_client
    },
    {
      componentType: "datePicker",
      required: true,
      label: "Date Account Closed",
      name: "date_account_closed",
      value: date_account_closed,
      helperText: errors.date_account_closed && "*Please select a date",
      handleChange: handleInputChange
    },
    {
      componentType: "uploadFiles",
      name: "legal_contracts",
      label: "Legal Contracts",
      handleChange: handleInputChange,
      value: legal_contracts
    }
  ];

  const [formInput, setFormInput] = useState(formArray);

  useEffect(() => {
    setFormInput(formArray);
  },[errors]);

  return (
    <ThemeProvider theme={theme}>
      <FormGenerator
        children={formInput}
        handleNext={props.handleNext}
        nextIndex={5}
        setId={props.setId}
      />
    </ThemeProvider>
  );
}
