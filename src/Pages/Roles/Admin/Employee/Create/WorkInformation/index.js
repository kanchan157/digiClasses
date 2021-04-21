import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetWorkInformation, UpdateWorkInformationError } from "./WorkInformationActions";
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

export default function Profile(props) {

  const dispatch = useDispatch();

  const {
    job_title,
    employee_status,
    current_role_history_notes,
    date_follow_up_contact_made,
    organisation_moved_to,
    level,
    pa_name,
    pa_contact_details,
    line_manager_title,
    line_manager_name,
    line_manager_contact_details,
    lm_pa_name,
    lm_pa_contact_details,
    lob_leader_name,
    hr_sponsor_title,
    hr_sponsor_name,
    hr_sponsor_contact_details,
    group,
    department_list_id,
    office_list_id,
    function_list_id,
    address_line1,
    address_line2,
    city,
    county,
    country_list_id,
    zipcode,
    mobile,
    phone,
    job_role_lists,
    left_organisation_follow_up_action,
    past_organisation  

  } = useSelector((state) => state.workInformationReducer.data);

  const errors = useSelector(state => state.workInformationReducer.errors);
  let { id } = useParams();

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
        dispatch(SetWorkInformation(formData));
      }
    });
    dispatch(UpdateWorkInformationError(updatedForm[index].name));
  }

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Job Title*",
      helperText: errors.job_title && "*Please enter a job role",
      name: "job_title",
      placeholder: "Job Role",
      handleChange: handleInputChange,
      value: job_title,
    },
    {
      componentType: "select",
      label: "Employee Status*",
      helperText:
        errors && errors.employee_status && "*Please select employee status",
      name: "employee_status",
      value: employee_status,
      placeholder: "Select Employee Status",
      selectOptions: [
        { id: 0, value: "Current", name: "Current" },
        { id: 1, value: "Left", name: "Left" },
        { id: 1, value: "Other", name: "Other" },
        { id: 1, value: "Retired", name: "Retired" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Current Role History Notes*",
      helperText: errors.current_role_history_notes && "*Please enter a Current Role History Notes",
      name: "current_role_history_notes",
      placeholder: "Current Role History Notes",
      multiline:true,
      handleChange: handleInputChange,
      value: current_role_history_notes
    },
    {
      componentType: "datePicker",
      required: true,
      label: "Date Follow Up Contact Made*",
      name: "date_follow_up_contact_made",
      value: date_follow_up_contact_made,
      handleChange: handleInputChange,
      helperText: errors.date_follow_up_contact_made && "*Please enter a Date",
    },
    {
      componentType: "input",
      type: "text",
      label: "Organisation Moved to*",
      helperText: errors.organisation_moved_to && "*Please enter a Organisation Moved to",
      name: "organisation_moved_to",
      placeholder: "Organisation Moved to",
      handleChange: handleInputChange,
      value: organisation_moved_to
    },
    {
      componentType: "select",
      type: "text",
      label: "Level*",
      helperText: errors.level && "*Please enter a Level",
      name: "level",
      placeholder: "Level",
      apiVariable: "level_dropdown_values",
      params: {organisation_id: id},
      handleChange: handleInputChange,
      value: level
    },
    {
      componentType: "input",
      type: "text",
      label: "PA Name",
      helperText: errors.pa_name && "Please enter the PA Name",
      name: "pa_name",
      placeholder: "PA Name",
      handleChange: handleInputChange,
      value: pa_name
    },
    {
      componentType: "input",
      type: "text",
      label: "PA Contact Details",
      helperText: errors.pa_contact_details && "Please enter a PA Contact Details",
      name: "pa_contact_details",
      placeholder: "PA Contact Details",
      handleChange: handleInputChange,
      value: pa_contact_details
    },
    {
      componentType: "input",
      type: "text",
      label: "Line Manager Title",
      helperText: errors.line_manager_title && "Please enter the Line Manager Title",
      name: "line_manager_title",
      placeholder: "Line Manager Title",
      handleChange: handleInputChange,
      value: line_manager_title
    },
    {
      componentType: "input",
      type: "text",
      label: "Line Manager Name*",
      helperText: errors.line_manager_name && "*Please enter the Line Manager Name",
      name: "line_manager_name",
      placeholder: "Line Manager Name",
      handleChange: handleInputChange,
      value: line_manager_name
    },
    {
      componentType: "input",
      type: "text",
      label: "Line Manager Contact Details*",
      helperText: errors.line_manager_contact_details && "*Please enter the Line Manager Contact Details",
      name: "line_manager_contact_details",
      placeholder: "Line Manager Contact Details",
      handleChange: handleInputChange,
      value: line_manager_contact_details
    },
    {
      componentType: "input",
      type: "text",
      label: "Lm Pa Name",
      helperText: errors.lm_pa_name && "Please enter the Lm Pa Name",
      name: "lm_pa_name",
      placeholder: "Lm Pa Name",
      handleChange: handleInputChange,
      value: lm_pa_name
    },
    {
      componentType: "input",
      type: "text",
      label: "Lm Pa Contact Details",
      helperText: errors.lm_pa_contact_details && "Please enter the Lm Pa Contact Details",
      name: "lm_pa_contact_details",
      placeholder: "Lm Pa Contact Details",
      handleChange: handleInputChange,
      value: lm_pa_contact_details
    },
    {
      componentType: "input",
      type: "text",
      label: "Lob Leader Name",
      helperText: errors.lob_leader_name && "Please enter the Lob Leader Name",
      name: "lob_leader_name",
      placeholder: "Lob Leader Name",
      handleChange: handleInputChange,
      value: lob_leader_name
    },
    {
      componentType: "input",
      type: "text",
      label: "HR Sponsor Title*",
      helperText: errors.hr_sponsor_title && "*Please enter the HR Sponsor Title",
      name: "hr_sponsor_title",
      placeholder: "HR Sponsor Title",
      handleChange: handleInputChange,
      value: hr_sponsor_title
    },
    {
      componentType: "input",
      type: "text",
      label: "HR Sponsor Name*",
      helperText: errors.hr_sponsor_name && "*Please enter the HR Sponsor Name",
      name: "hr_sponsor_name",
      placeholder: "HR Sponsor Name",
      handleChange: handleInputChange,
      value: hr_sponsor_name
    },
    {
      componentType: "input",
      type: "text",
      label: "HR Sponsor Contact Details*",
      helperText: errors.hr_sponsor_contact_details && "*Please enter the HR Sponsor Contact Details",
      name: "hr_sponsor_contact_details",
      placeholder: "HR Sponsor Contact Details",
      handleChange: handleInputChange,
      value: hr_sponsor_contact_details
    },
    {
      componentType: "select",
      label: "Group*",
      helperText:
        errors && errors.group && "*Please enter Group",
      name: "group",
      value: group,
      placeholder: "Group",
      selectOptions: [
        { id: 0, value: "yes", name: "Yes" },
        { id: 1, value: "no", name: "No" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Departments*",
      name: "department_list_id",
      value: department_list_id,
      placeholder: "Select Departments",
      apiVariable: "departments",
      handleChange: handleInputChange,
      helperText:
      errors && errors.department_list_id && "*Please select a Department",
    },
    {
      componentType: "select",
      label: "Office*",
      name: "office_list_id",
      value: office_list_id,
      placeholder: "Select Office",
      apiVariable: "offices",
      handleChange: handleInputChange,
      helperText:
      errors && errors.office_list_id && "*Please select a Office",
    },
    {
      componentType: "select",
      label: "Function*",
      name: "function_list_id",
      value: function_list_id,
      placeholder: "Select Function",
      apiVariable: "functions",
      handleChange: handleInputChange,
      helperText:
      errors && errors.function_list_id && "*Please select a Function",
    },
    {
      componentType: "input",
      type: "text",
      label: "Address Line 1*",
      helperText: errors.address_line1 && "*Please enter the Address Line 1",
      name: "address_line1",
      placeholder: "Address Line 1",
      handleChange: handleInputChange,
      value: address_line1
    },
    {
      componentType: "input",
      type: "text",
      label: "Address Line 2",
      helperText: errors.address_line2 && "Please enter the Address Line 2",
      name: "address_line2",
      placeholder: "Address Line 2",
      handleChange: handleInputChange,
      value: address_line2
    },
    {
      componentType: "input",
      type: "text",
      label: "City*",
      helperText: errors.city && "*Please enter the City",
      name: "city",
      placeholder: "City",
      handleChange: handleInputChange,
      value: city
    },
    {
      componentType: "input",
      type: "text",
      label: "County*",
      helperText: errors.county && "*Please enter the County",
      name: "county",
      placeholder: "County",
      handleChange: handleInputChange,
      value: county
    },
    {
      componentType: "select",
      label: "Country*",
      name: "country_list_id",
      value: country_list_id,
      placeholder: "Select Country",
      apiVariable: "countries",
      handleChange: handleInputChange,
      helperText:
      errors && errors.country_list_id && "*Please select the Country",
    },
    {
      componentType: "input",
      type: "text",
      label: "Zipcode*",
      helperText: errors.zipcode && "*Please enter the Zipcode",
      name: "zipcode",
      placeholder: "Zipcode",
      handleChange: handleInputChange,
      value: zipcode
    },
    {
      componentType: "input",
      type: "number",
      label: "Mobile*",
      helperText: errors.mobile && "*Please enter the Mobile",
      name: "mobile",
      placeholder: "Mobile",
      handleChange: handleInputChange,
      value: mobile
    },
    {
      componentType: "input",
      type: "number",
      label: "Phone*",
      helperText: errors.phone && "*Please enter the Phone",
      name: "phone",
      placeholder: "Phone",
      handleChange: handleInputChange,
      value: phone
    },
    {
      componentType: "select",
      label: "Job Role*",
      name: "job_role_lists",
      value: job_role_lists,
      placeholder: "Select Job Role",
      apiVariable: "job_role_list",
      handleChange: handleInputChange,
      helperText:
      errors && errors.job_role_lists && "*Please select the Job Role",
    },
    {
      componentType: "select",
      label: "Past Organisation*",
      name: "past_organisation",
      value: past_organisation,
      placeholder: "Select Past Organisation",
      apiVariable: "organisation_list",
      handleChange: handleInputChange,
      helperText:
      errors && errors.past_organisation && "*Please select Past Organisation",
    },  
    {
      componentType: "input",
      type: "text",
      label: "Left Organisation Follow up Action",
      name: "left_organisation_follow_up_action",
      placeholder: "Left Organisation Follow up Action",
      handleChange: handleInputChange,
      value: left_organisation_follow_up_action,
      helperText:
      errors && errors.left_organisation_follow_up_action && "*Please enter Left Organisation Follow up Action",
    },
  ];

  const [formInput, setFormInput] = useState(formArray);

  useEffect(() => {
    setFormInput(formArray)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[errors]);

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
