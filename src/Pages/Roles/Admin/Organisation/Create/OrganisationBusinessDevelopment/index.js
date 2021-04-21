import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetOrganisationBusinessDev, UpdateOrganisationBusinessDevError } from "./OrganisationBusinessDevelopmentActions";


const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function OrganisationBusinessDevelopment(props) {

  const dispatch = useDispatch();

  const {
    date_project_received,
    account_manager,
    coaching_coordinator,
    initial_activity,
    type_of_work,
    date_of_initial_call,
    task_list,
    urgent,
    activity_bd_status,
    follow_up_date,
    next_step,
    history,
    cam_status,
    cam_call_date
  } = useSelector((state) => state.organisationBusinessDevelopmentReducer.data);

  const errors = useSelector(state => state.organisationBusinessDevelopmentReducer.errors)
  

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
        dispatch(SetOrganisationBusinessDev(formData));
      }
      dispatch(UpdateOrganisationBusinessDevError(updatedForm[index].name));
    });
  }

  const formArray = [
    {
      componentType: "datePicker",
      label: "Date Project Received",
      name: "date_project_received",
      value: date_project_received,
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Account Manager",
      name: "account_manager",
      value: account_manager,
      placeholder: "Account Manager",
      selectOptions: [{id: 1, value: 'Karen Blake', name: 'Karen Blake'},{id: 2, value: 'Sally Johansson', name: 'Sally Johansson'},],
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Coaching Coordinator",
      name: "coaching_coordinator",
      value: coaching_coordinator,
      placeholder: "Coaching Coordinator",
      selectOptions: [{id: 1, value: 'Andrea Jackson', name: 'Andrea Jackson'},{id: 2, value: 'Cal Rodgers', name: 'Cal Rodgers'},{id: 3, value: 'Cal Rodgers', name: 'Cal Rodgers'},{id: 4, value: 'Lindsay Dunn', name: 'Lindsay Dunn'},],
      handleChange: handleInputChange
    },
    {
      componentType: "datePicker",
      label: "Initial Activity",
      name: "initial_activity",
      value: initial_activity,
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Type of Work",
      name: "type_of_work",
      value: type_of_work,
      placeholder: "Type of Work",
      selectOptions: [{id: 1, value: 'Assignment', name: 'Assignment'},{id: 2, value: 'General enquiry', name: 'General enquiry'},{id: 3, value: 'Proposal', name: 'Proposal'}],
      handleChange: handleInputChange
    },
    {
      componentType: "datePicker",
      label: "Date of Initial Call",
      name: "date_of_initial_call",
      value: date_of_initial_call,
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Task List",
      name: "task_list",
      placeholder: "Task List",
      handleChange: handleInputChange,
      value: task_list
    },
    {
      componentType: "select",
      label: "Urgent",
      name: "urgent",
      value: urgent,
      placeholder: "Select Yes or No",
      selectOptions: [
        { id: 0, value: "Yes", name: "Yes" },
        { id: 1, value: "No", name: "No" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Activity Bd Status",
      name: "activity_bd_status",
      value: activity_bd_status,
      placeholder: "Activity Bd Status",
      selectOptions: [{id: 1, value: 'Action needed', name: 'Action needed'},{id: 2, value: 'Completed', name: 'Completed'},{id: 3, value: 'Follow-up', name: 'Follow-up'},{id: 4, value: 'No further action', name: 'No further action'},{id: 5, value: 'Setting up a call', name: 'Setting up a call'}],
      handleChange: handleInputChange
    },
    {
      componentType: "datePicker",
      label: "Follow up Date",
      name: "follow_up_date",
      value: follow_up_date,
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Next Step",
      name: "next_step",
      handleChange: handleInputChange,
      placeholder: "Next Step",
      value: next_step
    },
    {
      componentType: "input",
      type: "text",
      label: "History",
      name: "history",
      handleChange: handleInputChange,
      placeholder: "History",
      value: history
    },
    {
      componentType: "select",
      label: "Cam Status",
      name: "cam_status",
      value: cam_status,
      placeholder: "Cam Status",
      selectOptions: [{id: 1, value: 'Completed', name: 'Completed'},{id: 2, value: 'In process', name: 'In process'},{id: 3, value: 'No further action', name: 'No further action'},{id: 4, value: 'On hold', name: 'On hold'},{id: 5, value: 'Sent information', name: 'Sent information'}],
      handleChange: handleInputChange
    },
    {
      componentType: "datePicker",
      label: "Cam Call Date",
      name: "cam_call_date",
      value: cam_call_date,
      handleChange: handleInputChange
    },
    // {
    //   componentType: "input",
    //   type: "text",
    //   label: "History",
    //   name: "history",
    //   placeholder: "History",
    //   handleChange: handleInputChange,
    //   value: history
    // },
    // {
    //   componentType: "datePicker",
    //   label: "Next Meeting Date",
    //   name: "next_meeting_date",
    //   value: next_meeting_date,
    //   placeholder: "Next Meeting Date",
    //   handleChange: handleInputChange
    // },
    // {
    //   componentType: "input",
    //   type: "text",
    //   label: "Who*",
    //   helperText: errors.who && "Please enter who",
    //   name: "who",
    //   placeholder: "Who",
    //   handleChange: handleInputChange,
    //   value: who
    // },
    // {
    //   componentType: "select",
    //   label: "Priority*",
    //   helperText: errors.priority && "Please select a priority",
    //   name: "priority",
    //   value: priority,
    //   placeholder: "Priority",
    //   selectOptions: [{id: 1, value: '1', name: '1'},{id: 2, value: '2', name: '2'},{id: 3, value: '3', name: '3'},{id: 4, value: '4', name: '4'}],
    //   handleChange: handleInputChange
    // }
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
