import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetMentoringCapacity, UpdateMentoringCapacityError } from "./MentoringCapatityActions";

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function MentoringCapacity(props) {

  const dispatch = useDispatch();

  const {
    role,
    overall_number_of_coaching_assignments,
    current_number_of_assignments,
    current_capacity,
    available_to_take_new_assignments,
    date_available_from,
    date_available_until
  } = useSelector((state) => state.mentoringCapacityReducer.data);

  const errors = useSelector(state => state.mentoringCapacityReducer.errors);


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
        dispatch(SetMentoringCapacity(formData));
      }
    });
    dispatch(UpdateMentoringCapacityError(updatedForm[index].name));
  }

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Role*",
      helperText: errors.role && "*Please enter a Role",
      name: "role",
      placeholder: "Role",
      handleChange: handleInputChange,
      value: role
    },
    {
        componentType: "input",
        type: "text",
        label: "Overall Number of Coaching Assignments",
        helperText: errors.overall_number_of_coaching_assignments && "Please enter  Overall Number of Coaching Assignments",
        name: "overall_number_of_coaching_assignments",
        placeholder: "Overall Number of Coaching Assignments",
        handleChange: handleInputChange,
        value: overall_number_of_coaching_assignments
      },
      {
        componentType: "input",
        type: "text",
        label: "Current Number of Assignments",
        helperText: errors.current_number_of_assignments && "Please enter Current Number of Assignments",
        name: "current_number_of_assignments",
        placeholder: "Current Number of Assignments",
        handleChange: handleInputChange,
        value: current_number_of_assignments
      },
      {
        componentType: "input",
        type: "text",
        label: "Current Capacity",
        helperText: errors.current_capacity && "Please enter Current Capacity",
        name: "current_capacity",
        placeholder: "Current Capacity",
        handleChange: handleInputChange,
        value: current_capacity
      },
      {
        componentType: "select",
        label: "Available to Take New Assignments",
        helperText:
          errors && errors.available_to_take_new_assignments && "Please Yes or No",
        name: "available_to_take_new_assignments",
        value: available_to_take_new_assignments,
        placeholder: "Select Yes or No",
        selectOptions: [
          { id: 0, value: "Yes", name: "yes" },
          { id: 1, value: "No", name: "No" },
        ],
        handleChange: handleInputChange,
      },
      {
        componentType: "datePicker",
        required: true,
        label: "Date Available From",
        name: "date_available_from",
        value: date_available_from,
        handleChange: handleInputChange,
        helperText: errors.date_available_from && "Please enter a Date",
      },
      {
        componentType: "datePicker",
        required: true,
        label: "Date Available Until",
        name: "date_available_until",
        value: date_available_until,
        handleChange: handleInputChange,
        helperText: errors.date_available_until && "Please enter a Date",
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
