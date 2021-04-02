import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetOrganisationActivity, UpdateOrganisationActivityError } from "./OrganisationActivityActions";


const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function Activity(props) {

  const dispatch = useDispatch();

  const {
    acuity_objective,
    internal_notes,
    review_date,
    current_area_being_reviewed,
    outcome_of_review_meeting_notes,
    meeting_date,
    history,
    next_meeting_date,
    action_required,
    who,
    priority
  } = useSelector((state) => state.organisationContractReducer.data);

  const errors = useSelector(state => state.organisationActivityReducer.errors)
  

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
        dispatch(SetOrganisationActivity(formData));
      }
      dispatch(UpdateOrganisationActivityError(updatedForm[index].name));
    });
  }

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Objective",
      name: "objective",
      placeholder: "Objective",
      handleChange: handleInputChange,
      value: acuity_objective
    },
    {
      componentType: "input",
      type: "text",
      multiline: true,
      label: "Internal Notes",
      name: "internal_notes",
      placeholder: "Internal Notes",
      handleChange: handleInputChange,
      value: internal_notes
    },
    {
      componentType: "datePicker",
      required: true,
      label: "Review Date*",
      name: "review_date",
      value: review_date,
      placeholder: "Review Date",
      helperText: errors.review_date && "*Please select a date",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Current Area Being Reviewed",
      name: "current_area_being_reviewed",
      placeholder: "Current Area Being Reviewed",
      handleChange: handleInputChange,
      value: current_area_being_reviewed
    },
    {
      componentType: "input",
      type: "text",
      multiline: true,
      label: "Outcome of Review Meeting Notes",
      name: "outcome_of_review_meeting_notes",
      placeholder: "Outcome of Review Meeting Notes",
      handleChange: handleInputChange,
      value: outcome_of_review_meeting_notes
    },
    {
      componentType: "datePicker",
      required: true,
      label: "Meeting Date*",
      name: "meeting_date",
      value: meeting_date,
      helperText: errors.meeting_date && "*Please select a date",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "History",
      name: "history",
      placeholder: "History",
      handleChange: handleInputChange,
      value: history
    },
    {
      componentType: "datePicker",
      label: "Next Meeting Date",
      name: "next_meeting_date",
      value: next_meeting_date,
      placeholder: "Next Meeting Date",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Who*",
      helperText: errors.who && "Please enter who",
      name: "who",
      placeholder: "Who",
      handleChange: handleInputChange,
      value: who
    },
    {
      componentType: "select",
      label: "Priority*",
      helperText: errors.priority && "Please select a priority",
      name: "priority",
      value: priority,
      placeholder: "Priority",
      selectOptions: [{id: 1, value: '1', name: '1'},{id: 2, value: '2', name: '2'},{id: 3, value: '3', name: '3'},{id: 4, value: '4', name: '4'}],
      handleChange: handleInputChange
    }
  ];

  const [formInput, setFormInput] = useState(formArray);

  useEffect(() => {
    setFormInput(formArray);
  }, [errors]);

  return (
    <ThemeProvider theme={theme}>
      <FormGenerator
        children={formInput}
        handleNext={props.handleNext}
        nextIndex={6}
        setId={props.setId}
      />
    </ThemeProvider>
  );
}
