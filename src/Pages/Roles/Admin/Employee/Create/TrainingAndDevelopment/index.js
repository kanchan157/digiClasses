import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import {
  SetTrainingAndDevelopment,
  SetTrainingAndDevelopmentError,
} from "./TrainingAndDevelopmentActions";
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

export default function TrainingAndDevelopment(props) {
  const dispatch = useDispatch();

  const {
    courses_undertaken,
    cpd_hrs_undertaken_by_calendar_year,
    assignments_and_development_to_date,
    future_assignment_options,
    qualified_as_a_coach,
    ambition,
    facilitation_skills_needed,
    facilitation_skills_topics,
    acuity_admin_field,
    candidate_status,
    internal_notes,
    role_experience,
    last_job_title,
    levels_coach_at,
    thumbnail_bio,
    industry_sector_lists,
    disciplines,
    client_levels_available_for
  } = useSelector((state) => state.trainingAndDevelopmentReducer.data);

  const errors = useSelector(
    (state) => state.trainingAndDevelopmentReducer.errors
  );
  let { id } = useParams();
  const handleInputChange = (value, index, type) => {
    const updatedForm = formInput;
    if (!type) {
      updatedForm[index]["value"] = value;
    } else {
      updatedForm[index][type] = value;
    }
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if (item.value || item.inputValue || item.selectValue) {
        item.value && (formData[item.name] = item.value);
        item.inputValue && (formData[item.inputName] = item.inputValue);
        item.selectValue && (formData[item.selectName] = item.selectValue);
        dispatch(SetTrainingAndDevelopment(formData));
      }
    });
    dispatch(SetTrainingAndDevelopmentError(updatedForm[index].name));
  };

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Courses Undertaken",
      helperText:
        errors.courses_undertaken && "Please enter Courses Undertaken",
      name: "courses_undertaken",
      placeholder: "Courses Undertaken",
      handleChange: handleInputChange,
      value: courses_undertaken,
    },
    {
      componentType: "input",
      type: "text",
      label: "CPD Hrs Undertaken by Calendar Year",
      helperText:
        errors.cpd_hrs_undertaken_by_calendar_year &&
        "Please enter CPD Hrs Undertaken by Calendar Year",
      name: "cpd_hrs_undertaken_by_calendar_year",
      placeholder: "CPD Hrs Undertaken by Calendar Year",
      handleChange: handleInputChange,
      value: cpd_hrs_undertaken_by_calendar_year,
    },
    {
        componentType: "select",
        label: "Assignment and Development to Date",
        helperText:
          errors && errors.assignments_and_development_to_date && "*Please Yes or No",
        name: "assignments_and_development_to_date",
        value: assignments_and_development_to_date,
        placeholder: "Select Yes or No",
        selectOptions: [
          { id: 0, value: "Yes", name: "yes" },
          { id: 1, value: "No", name: "No" },
        ],
        handleChange: handleInputChange,
      },
      {
        componentType: "input",
        type: "text",
        label: "Future Assignment Options",
        helperText:
          errors.future_assignment_options && "Please enter Future Assignment Options",
        name: "future_assignment_options",
        placeholder: "Future Assignment Options",
        handleChange: handleInputChange,
        value: future_assignment_options,
      },
      {
        componentType: "select",
        label: "Qualified as a Coach",
        helperText:
          errors && errors.qualified_as_a_coach && "*Please Yes or No",
        name: "qualified_as_a_coach",
        value: qualified_as_a_coach,
        placeholder: "Select Yes or No",
        selectOptions: [
          { id: 0, value: "Yes", name: "yes" },
          { id: 1, value: "No", name: "No" },
        ],
        handleChange: handleInputChange,
      },
      {
        componentType: "input",
        type: "text",
        label: "Ambition",
        helperText:
          errors.ambition && "Please enter Ambition",
        name: "ambition",
        placeholder: "Ambition",
        handleChange: handleInputChange,
        value: ambition,
      },
      {
        componentType: "select",
        label: "Facilitation Skills Needed",
        helperText:
          errors && errors.facilitation_skills_needed && "*Please Yes or No",
        name: "facilitation_skills_needed",
        value: facilitation_skills_needed,
        placeholder: "Select Yes or No",
        selectOptions: [
          { id: 0, value: "Yes", name: "yes" },
          { id: 1, value: "No", name: "No" },
        ],
        handleChange: handleInputChange,
      },
      {
        componentType: "input",
        type: "text",
        label: "Facilitation Skills Topics",
        helperText:
          errors.facilitation_skills_topics && "Please enter Facilitation Skills Topics",
        name: "facilitation_skills_topics",
        placeholder: "Facilitation Skills Topics",
        handleChange: handleInputChange,
        value: facilitation_skills_topics,
      }, 
      {
        componentType: "input",
        type: "text",
        label: "Acuity Admin Field",
        helperText:
          errors.acuity_admin_field && "Please enter Acuity Admin Field",
        name: "acuity_admin_field",
        placeholder: "Acuity Admin Field",
        handleChange: handleInputChange,
        value: acuity_admin_field,
      }, 
      {
        componentType: "input",
        type: "text",
        label: "Candidate Status",
        helperText:
          errors.candidate_status && "Please enter Candidate Status",
        name: "candidate_status",
        placeholder: "Candidate Status",
        handleChange: handleInputChange,
        value: candidate_status,
      }, 
      {
        componentType: "input",
        type: "text",
        multiline:true,
        label: "Internal Notes",
        helperText:
          errors.internal_notes && "Please enter Internal Notes",
        name: "internal_notes",
        placeholder: "Internal Notes",
        handleChange: handleInputChange,
        value: internal_notes,
      }, 
      {
        componentType: "input",
        type: "text",
        label: "Role Experience",
        helperText:
          errors.role_experience && "Please enter Role Experience",
        name: "role_experience",
        placeholder: "Role Experience",
        handleChange: handleInputChange,
        value: role_experience,
      }, 
      {
        componentType: "input",
        type: "text",
        label: "Last Job Title",
        helperText:
          errors.last_job_title && "Please enter Last Job Title",
        name: "last_job_title",
        placeholder: "Last Job Title",
        handleChange: handleInputChange,
        value: last_job_title,
      }, 

      {
        componentType: "select",
        apiVariable: "level_dropdown_values",
        params: {organisation_id: id},
        label: "Levels Coach at",
        helperText:
          errors.levels_coach_at && "Please enter Levels Coach at",
        name: "levels_coach_at",
        placeholder: "Levels Coach at",
        handleChange: handleInputChange,
        value: levels_coach_at,
      }, 
      {
        componentType: "input",
        type: "text",
        label: "Thumbnail Bio",
        helperText:
          errors.thumbnail_bio && "Please enter Thumbnail Bio",
        name: "thumbnail_bio",
        placeholder: "Thumbnail Bio",
        handleChange: handleInputChange,
        value: thumbnail_bio,
      }, 
      {
        componentType: "select",
        label: "Industry Sector",
        name: "industry_sector_lists",
        value: industry_sector_lists,
        placeholder: "Select Industry Sector",
        apiVariable: "industry_sectors",
        handleChange: handleInputChange,
        helperText:
        errors && errors.industry_sector_lists && "*Please select a Industry Sector",
      },
      {
        componentType: "select",
        label: "Disciplines",
        helperText:
          errors && errors.disciplines && "*Please select Disciplines",
        name: "disciplines",
        value: disciplines,
        placeholder: "Select Disciplines",
        selectOptions: [
          { id: 0, value: "Business Development", name: "Business Development" },
          { id: 1, value: "Change Management", name: "Change Management" },
          { id: 1, value: "Consulting", name: "Consulting" },
          { id: 1, value: "Finance", name: "Finance" },
          { id: 1, value: "HR/People", name: "HR/People" },
          { id: 1, value: "IT", name: "IT" },
          { id: 1, value: "Marketing", name: "Marketing" },
          { id: 1, value: "Networking & Communications", name: "Networking & Communications" },
          { id: 1, value: "Operations", name: "Operations" },
          { id: 1, value: "P&L Management", name: "P&L Management" },
          { id: 1, value: "Project or Programme Management", name: "Project or Programme Management" },
          { id: 1, value: "Research & Development", name: "Research & Development" },
          { id: 1, value: "Risk & Compliance", name: "Risk & Compliance" },
          { id: 1, value: "Sales", name: "Sales" },
        ],
        handleChange: handleInputChange,
      },
      {
        componentType: "select",
        name: "client_levels_available_for",
        value: client_levels_available_for,
        placeholder: "Client Levels Available for",
        apiVariable: "level_dropdown_values",
        params: {organisation_id: id},
        handleChange: handleInputChange,   
         label: "Client Levels Available for",
        helperText:
          errors.client_levels_available_for && "Please enter Client Levels Available for",
      }, 
  ];

  const [formInput, setFormInput] = useState(formArray);
  
  useEffect(() => {
    setFormInput(formArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

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
