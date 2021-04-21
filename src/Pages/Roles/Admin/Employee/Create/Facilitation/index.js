import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetFacilitation, UpdateFacilitationError } from "./FacilitationActions";

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function Facilitation(props) {

  const dispatch = useDispatch();

  const {
    facilitation_areas_of_expertise,
    facilitation_clients
  } = useSelector((state) => state.facilitationReducer.data);

  const errors = useSelector(state => state.facilitationReducer.errors);


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
        dispatch(SetFacilitation(formData));
      }
    });
    dispatch(UpdateFacilitationError(updatedForm[index].name));
  }

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Facilitation Areas of Expertise*",
      helperText: errors.facilitation_areas_of_expertise && "*Please enter Facilitation Areas of Expertise",
      name: "facilitation_areas_of_expertise",
      placeholder: "Facilitation Areas of Expertise",
      handleChange: handleInputChange,
      value: facilitation_areas_of_expertise
    },
    {
        componentType: "input",
        type: "text",
        label: "Facilitation Clients*",
        helperText: errors.facilitation_clients && "*Please enter Facilitation Clients",
        name: "facilitation_clients",
        placeholder: "Facilitation Clients",
        handleChange: handleInputChange,
        value: facilitation_clients
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
