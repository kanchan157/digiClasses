import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetOrganisationGeneral } from "./OrganisationGeneralActions";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       //   width: "70%",
//     },
//   },
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

const dropDownValues = [
  {
    "id": 0,
    "value": "Full Managed Service - Sole",
    "name": "Full Managed Service - Sole"
  },
  {
    "id": 1,
    "value": "Full Managed Coaching Service - Shared",
    "name": "Full Managed Coaching Service - Shared"
  },
  {
    "id": 2,
    "value": "Full Managed Coaching Service (Sole + Other)",
    "name": "Full Managed Coaching Service (Sole + Other)"
  },
  {
    "id": 3,
    "value": "Full Managed Coaching Service Shared + Other Services",
    "name": "Full Managed Coaching Service Shared + Other Services"
  },
  {
    "id": 4,
    "value": "Adhoc",
    "name": "Adhoc"
  }
]



export default function General(props) {

  const dispatch = useDispatch();

  const { 
    record_owner_id, 
    has_admin_access,
    do_not_contact,
    do_not_mailshot,
    main_access_people_names,
    total_no_of_assignments,
    client_panel_area
  } = useSelector((state) => state.organisationGeneralReducer.data);

  const { record_owners } = useSelector((state) => state.commonReducer.organisationDropdowns);

  const handleInputChange = (value, index) => {
    const updatedForm = formInput;
    updatedForm[index]['value'] = value;
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if(item.value) {
        formData[item.name] = item.value;
        dispatch(SetOrganisationGeneral(formData));
      }
    });
  }

  const formArray = [
    {
      componentType: "select",
      label: "Record Owner",
      name: "record_owner_id",
      placeholder: "Record Owner",
      selectOptions: record_owners,
      // selectOptions: [{id: 0, value: 'KB', name: 'KB'},{id: 1, value: 'SJ', name: 'SJ'},{id: 2, value: 'LD', name: 'LD'},{id: 3, value: 'CP', name:'CP'},{id: 4, value: 'AS', name: 'AS'},{id: 5, value: 'SC', name: 'SC'}],
      value: record_owner_id,
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Admin Access",
      name: "has_admin_access",
      placeholder: "Select Admin Access",
      selectOptions: [{id: 0, value: 'True', name: 'True'},{id: 1, value: 'False', name: 'False'}],
      value: has_admin_access,
      apiVariable: "has_admin_access_values",
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      label: "Do Not Contact",
      name: "do_not_contact",
      placeholder: "Do Not Contact",
      handleChange: handleInputChange,
      value: do_not_contact
    },
    {
      componentType: "input",
      type: "text",
      label: "Do Not Mailshot",
      name: "do_not_mailshot",
      placeholder: "Do Not Mailshot",
      handleChange: handleInputChange,
      value: do_not_mailshot
    },
    {
      componentType: "input",
      type: "text",
      label: "Main Access People Names",
      name: "main_access_people_names",
      placeholder: "Main Access People Names",
      handleChange: handleInputChange,
      value: main_access_people_names
    },
    {
      componentType: "input",
      type: "text",
      label: "Total No of Assignments",
      name: "total_no_of_assignments",
      placeholder: "Total No of Assignments",
      handleChange: handleInputChange,
      value: total_no_of_assignments
    },
    {
      componentType: "input",
      type: "text",
      label: "Client Panel Area",
      name: "client_panel_area",
      placeholder: "Client Panel Area",
      handleChange: handleInputChange,
      value: client_panel_area
    },
  ];

  const [formInput, setFormInput] = useState(formArray);

  return (
    <ThemeProvider theme={theme}>
      <FormGenerator
        children={formInput}
        handleNext={props.handleNext}
        nextIndex={7}
        setId={props.setId}
      />
    </ThemeProvider>
  );
}
