import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetAccessment, UpdateAccessmentError } from "./AccessmentActions";

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function Assessment(props) {

  const dispatch = useDispatch();

  const {
    types_of_assessment,
    assessment_clients
  } = useSelector((state) => state.accessmentReducer.data);

  const errors = useSelector(state => state.accessmentReducer.errors);


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
        dispatch(SetAccessment(formData));
      }
    });
    dispatch(UpdateAccessmentError(updatedForm[index].name));
  }

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Types of Assessment",
      helperText: errors.types_of_assessment && "Please enter Facilitation Areas of Expertise",
      name: "types_of_assessment",
      placeholder: "Types of Assessment",
      handleChange: handleInputChange,
      value: types_of_assessment
    },
    {
        componentType: "input",
        type: "text",
        label: "Assessment Clients",
        helperText: errors.assessment_clients && "Please enter Assessment Clients",
        name: "assessment_clients",
        placeholder: "Assessment Clients",
        handleChange: handleInputChange,
        value: assessment_clients
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
