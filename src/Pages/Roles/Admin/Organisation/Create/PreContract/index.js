import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { SetOrganisationPreContract } from "./OrganisationPreContractActions";
import DataService from "../../../../../../Service";

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

export default function PreContract(props) {
  const dispatch = useDispatch();

  // const {  } = useSelector((state) => state.commonReducer.organisationDropdowns);

  const handleInputChange = (value, index) => {
    const updatedForm = formInput;
    updatedForm[index]["value"] = value;
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if (item.value) {
        formData[item.name] = item.value;
        dispatch(SetOrganisationPreContract(formData));
      }
    });
  };

  const formArray = [
    {
      componentType: "select",
      label: "Commercial",
      name: "commercial",
      placeholder: "Multi select Dropdown",
      // apiVariable: "employee_list", - Commercials list to be displayed here (Needs clarification from Maha)
      handleChange: handleInputChange
    },
    {
      componentType: "input",
      type: "text",
      multiline: true,
      label: "Internal Notes",
      required: true,
      name: "internal_notes",
      placeholder: "Notes",
      handleChange: handleInputChange,
    },
    {
      componentType: "datePicker",
      type: "text",
      label: "Meeting Date",
      name: "meeting_date",
      placeholder: "Meeting Date",
      handleChange: handleInputChange,
    },
  ];
  const [formInput, setFormInput] = useState(formArray);
  const [response, setResponse] = useState(false);

  useEffect(() => {
    loopAllValues();
  }, []);

  const loopAllValues = async () => {
    await DataService.getData("", "org_profile_document_types")
      .then((res) => {
        res.data.attributes.drop_down_values.forEach((item, index) => {
          formArray.unshift({
            componentType: "uploadFiles",
            label: item.id,
            name: item.id,
            handleChange: handleInputChange,
          });
        });
        setFormInput(formArray);
        setResponse(true);
      })
      .catch((error) => {});
  };

  return (
    <ThemeProvider theme={theme}>
      {response && (
        <FormGenerator
          children={formInput}
          submitURL={api_url.organisation}
          handleNext={props.handleNext}
          nextIndex={4}
          setId={props.setId}
        />
      )}
    </ThemeProvider>
  );
}
