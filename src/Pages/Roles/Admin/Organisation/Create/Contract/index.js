import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import FormGenerator from "../../../../../../Components/FormGenerator";
import DataService from "../../../../../../Service";
import { SetOrganisationContract, UpdateOrganisationContractError } from "./OrganisationContractActions";
import {
  useParams
} from "react-router-dom";


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
    legal_contracts,
    time_from_start_date,
    time_to_end_date,
    total_time,
    tenure_api
  } = useSelector((state) => state.organisationContractReducer.data);

  const errors = useSelector(state => state.organisationContractReducer.errors);

  const [loading, setLoading] = useState(false);
  const [apiStartData, setApiStartData] = useState('');
  const [apiEndData, setApiEndData] = useState('');
  const [apiTotalTimeData, setApiTotalTimeData] = useState('');
  const [apiTenureData, setApiTenureData] = useState('');
  let { id } = useParams();

  useEffect(() => {
     setLoading(true);
     DataService.getDirectData(`/organisation_contract_phases/3`)
     .then((response) => {
       let listData=response["data"];
       setApiStartData(listData.time_from_start_date);
       setApiEndData(listData.time_to_end_date);  
       setApiTotalTimeData(listData.total_time);
       setApiTenureData(listData.tenure);
       setLoading(false);
     })
     .catch((err) => {});
  }, []);

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
      label: "Date Account Closed*",
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
    },
    {
      componentType: "input",
      type: "text",
      label: "Time from Start Date",
      name: "time_from_start_date",
      handleChange: handleInputChange,
      value: apiStartData,
      disabled:true
    },
    {
      componentType: "input",
      type: "text",
      label: "Time to End Date",
      name: "time_to_end_date",
      handleChange: handleInputChange,
      value: apiEndData,
      disabled:true
    },
    {
      componentType: "input",
      type: "text",
      label: "Total Time",
      name: "total_time",
      handleChange: handleInputChange,
      value: apiTotalTimeData,
      disabled:true
    },
    {
      componentType: "input",
      type: "text",
      label: "Tenure",
      name: "tenure_api",
      handleChange: handleInputChange,
      value: apiTenureData,
      disabled:true
    },
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
