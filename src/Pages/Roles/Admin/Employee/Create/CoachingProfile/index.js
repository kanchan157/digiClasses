import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import {
  SetCoachingProfile,
  UpdateCoachingProfileError,
} from "./CoachingProfileActions";

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function CoachingProfile(props) {
  const dispatch = useDispatch();

  const {
    role,
    overview,
    approach,
    background,
    areas_of_expertise,
    client_specific_areas_of_expertise,
    representatitive_clients,
    education_and_qualifications,
    client_testimonials,
    diagnostic_tool_id,
    language_list_id,
    client_type_id,
    picture,
  } = useSelector((state) => state.coachingProfileReducer.data);

  const errors = useSelector((state) => state.coachingProfileReducer.errors);

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
        dispatch(SetCoachingProfile(formData));
      }
    });
    dispatch(UpdateCoachingProfileError(updatedForm[index].name));
  };

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Role*",
      helperText: errors.role && "*Please enter a Role",
      name: "role",
      placeholder: "Role",
      handleChange: handleInputChange,
      value: role,
    },
    {
      componentType: "input",
      type: "text",
      label: "Overview*",
      helperText: errors.overview && "*Please enter a Overview",
      name: "overview",
      placeholder: "Overview",
      handleChange: handleInputChange,
      value: overview,
    },
    {
      componentType: "input",
      type: "text",
      label: "Approach*",
      helperText: errors.approach && "*Please enter a Approach",
      name: "approach",
      placeholder: "Approach",
      handleChange: handleInputChange,
      value: approach,
    },
    {
      componentType: "input",
      type: "text",
      label: "Background*",
      helperText: errors.background && "*Please enter a Background",
      name: "background",
      placeholder: "Background",
      handleChange: handleInputChange,
      value: background,
    },
    {
      componentType: "select",
      label: "Areas of Expertise*",
      helperText: errors.areas_of_expertise && "*Please enter a Areas of Expertise",
      name: "areas_of_expertise",
      placeholder: "Areas of Expertise",
      handleChange: handleInputChange,
      value: areas_of_expertise,
      apiVariable: "diagnostic_tools"
    },
    {
      componentType: "input",
      type: "text",
      label: "Client Specific Areas of Expertise*",
      helperText: errors.client_specific_areas_of_expertise && "*Please enter a Client Specific Areas of Expertise",
      name: "client_specific_areas_of_expertise",
      placeholder: "Client Specific Areas of Expertise",
      handleChange: handleInputChange,
      value: client_specific_areas_of_expertise,
    },
    {
      componentType: "input",
      type: "text",
      label: "Representatitive Clients*",
      helperText: errors.representatitive_clients && "*Please enter a Representatitive Clients",
      name: "representatitive_clients",
      placeholder: "Representatitive Clients",
      handleChange: handleInputChange,
      value: representatitive_clients,
    },
    {
      componentType: "input",
      type: "text",
      label: "Education and Qualifications*",
      helperText: errors.education_and_qualifications && "*Please enter a Education and Qualifications",
      name: "education_and_qualifications",
      placeholder: "Education and Qualifications",
      handleChange: handleInputChange,
      value: education_and_qualifications,
    },
    {
      componentType: "input",
      type: "text",
      label: "Client Testimonials*",
      helperText: errors.client_testimonials && "*Please enter  Client Testimonials",
      name: "client_testimonials",
      placeholder: "Client Testimonials",
      handleChange: handleInputChange,
      value: client_testimonials,
    },
    {
        componentType: "select",
        label: "Diagnostic Tools*",
        name: "diagnostic_tool_id",
        value: diagnostic_tool_id,
        placeholder: "Select Diagnostic Tools",
        apiVariable: "diagnostic_tools",
        handleChange: handleInputChange,
        helperText:
        errors && errors.diagnostic_tool_id && "*Please select a Diagnostic Tools",
      },
      {
        componentType: "select",
        label: "Language List*",
        name: "language_list_id",
        value: language_list_id,
        placeholder: "Select Language List",
        apiVariable: "languages",
        handleChange: handleInputChange,
        helperText:
        errors && errors.language_list_id && "*Please select a Language List",
      },
      {
        componentType: "select",
        label: "Client Type*",
        name: "client_type_id",
        value: client_type_id,
        placeholder: "Select Client Type",
        apiVariable: "client_types",
        handleChange: handleInputChange,
        helperText:
        errors && errors.client_type_id && "*Please select a Client Type",
      },
      {
        componentType: "uploadFiles",
        label: "Picture*",
        name: "picture",
        handleChange: handleInputChange,
        helperText: errors.picture && "*Please upload picture",
      }
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
