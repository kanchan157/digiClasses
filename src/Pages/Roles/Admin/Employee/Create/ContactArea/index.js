import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { SetContactArea, UpdateContactAreaError } from "./ContactAreaActions";
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

export default function ContactArea(props) {
  const dispatch = useDispatch();

  const {
    title,
    first_name,
    middle_name,
    last_name,
    authorisation_to_access_the_service,
    authorisation_provided_by,
    suffix,
    gender,
    dob,
    nationality_list_id,
    bame,
    diversity_and_inclusion,
    languages_list,
    address_line1,
    address_line2,
    country_list_id,
    city,
    county,
    zipcode,
    primary_email,
    secondary_email,
    mobile,
    phone,
    linkedin,
    skype,
    twitter,
    facebook,
    website1,
    website2,
    picture,
  } = useSelector((state) => state.contactAreaReducer.data);

  const errors = useSelector((state) => state.contactAreaReducer.errors);

  const handleInputChange = (value, index) => {
    const updatedForm = formInput;
    updatedForm[index]["value"] = value;
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if (item.value) {
        formData[item.name] = item.value;
        dispatch(SetContactArea(formData));
      }
    });
    dispatch(UpdateContactAreaError(updatedForm[index].name));
  };

  const formArray = [
    {
      componentType: "select",
      label: "Title*",
      helperText: errors && errors.title && "*Please select a title",
      name: "title",
      value: title,
      placeholder: "Title",
      selectOptions: [
        { id: 0, value: "Miss", name: "Miss" },
        { id: 1, value: "Mr", name: "Mr" },
        { id: 2, value: "Mrs", name: "Mrs" },
        { id: 3, value: "Ms", name: "Ms" },
        { id: 4, value: "Dr", name: "Dr" },
        { id: 5, value: "Professor", name: "Professor" },
        { id: 6, value: "Rev", name: "Rev" },
        { id: 7, value: "Capt", name: "Capt" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "First Name*",
      helperText: errors && errors.first_name && "*Please enter first name",
      name: "first_name",
      value: first_name,
      placeholder: "First Name",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Middle Name*",
      helperText: errors && errors.middle_name && "*Please enter middle name",
      name: "middle_name",
      value: middle_name,
      placeholder: "Middle Name",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Last Name*",
      helperText: errors && errors.last_name && "*Please enter last name",
      name: "last_name",
      value: last_name,
      placeholder: "Last Name",
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Authorised to Access the Service*",
      helperText:
        errors &&
        errors.authorisation_to_access_the_service &&
        "*Please Yes or No",
      name: "authorisation_to_access_the_service",
      value: authorisation_to_access_the_service,
      placeholder: "Select Yes or No",
      selectOptions: [
        { id: 0, value: "Yes", name: "Yes" },
        { id: 1, value: "No", name: "No" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Authorisation Provided By*",
      helperText:
        errors && errors.authorisation_provided_by && "*Please Yes or No",
      name: "authorisation_provided_by",
      value: authorisation_provided_by,
      placeholder: "Select Yes or No",
      selectOptions: [
        { id: 0, value: "Yes", name: "Yes" },
        { id: 1, value: "No", name: "No" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Suffix",
      name: "suffix",
      value: suffix,
      placeholder: "Select a suffix",
      selectOptions: [
        { id: 0, value: "ACC", name: "ACC" },
        { id: 1, value: "PCC", name: "PCC" },
        { id: 2, value: "MCC", name: "MCC" },
        { id: 3, value: "MAC", name: "MAC" },
        { id: 4, value: "PhD", name: "PhD" },
        { id: 5, value: "MSc", name: "MSc" },
        { id: 6, value: "BSc", name: "BSc" },
        { id: 7, value: "OBE", name: "OBE" },
        { id: 8, value: "MBE", name: "MBE" },
        { id: 9, value: "MCIM", name: "MCIM" },
        { id: 10, value: "Ceng", name: "Ceng" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Gender",
      name: "gender",
      value: gender,
      placeholder: "Select a suffix",
      selectOptions: [
        { id: 0, value: "Male", name: "Male" },
        { id: 1, value: "Female", name: "Female" },
        { id: 2, value: "Other", name: "Other" }
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "datePicker",
      required: true,
      label: "Date of Birth",
      name: "dob",
      value: dob,
      handleChange: handleInputChange
    },
    // {
    //   componentType: "select",
    //   label: "Nationality*",
    //   name: "nationality_list_id",
    //   value: nationality_list_id,
    //   placeholder: "Select Nationality",
    //   apiVariable: "countries",
    //   handleChange: handleInputChange,
    //   helperText: errors && errors.type_of_service && "*Please select a nationality",
    // },
    {
      componentType: "select",
      type: "text",
      label: "Nationality*",
      helperText: errors && errors.nationality_list_id && "*Please enter Nationality",
      name: "nationality_list_id",
      placeholder: "Select Country",
      apiVariable: "countries",
      value: nationality_list_id,
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Bame*",
      helperText:
        errors && errors.bame && "*Please Yes or No",
      name: "bame",
      value: bame,
      placeholder: "Select Yes or No",
      selectOptions: [
        { id: 0, value: "Yes", name: "Yes" },
        { id: 1, value: "No", name: "No" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Diversity and Inclusion*",
      helperText:
        errors && errors.diversity_and_inclusion && "*Please Yes or No",
      name: "diversity_and_inclusion",
      value: diversity_and_inclusion,
      placeholder: "Select Yes or No",
      selectOptions: [
        { id: 0, value: "Yes", name: "Yes" },
        { id: 1, value: "No", name: "No" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "MultipleSelect",
      label: "Languages*",
      name: "languages_list",
      value: languages_list,
      placeholder: "Select Languages",
      apiVariable: "languages",
      handleChange: handleInputChange,
      helperText:
      errors && errors.languages_list && "*Please select a language",
    },
    {
      componentType: "input",
      type: "text",
      label: "Address Line 1",
      name: "address_line1",
      value: address_line1,
      placeholder: "Line 1",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Address Line 2",
      name: "address_line2",
      value: address_line2,
      placeholder: "Line 2",
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "Country",
      name: "country_list_id",
      value: country_list_id,
      placeholder: "Select Country",
      apiVariable: "countries",
      handleChange: handleInputChange,
    },
    {
      componentType: "select",
      label: "City",
      name: "city",
      value: city,
      placeholder: "Select City",
      selectOptions: [
        { id: 0, value: "Manchester", name: "Manchester" },
        { id: 1, value: "London", name: "London" },
      ],
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "County",
      name: "county",
      value: county,
      placeholder: "County",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Zipcode",
      name: "zipcode",
      value: zipcode,
      placeholder: "Zipcode",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Primary Email*",
      name: "primary_email",
      value: primary_email,
      placeholder: "Primary Email",
      handleChange: handleInputChange,
      helperText:
      errors && errors.primary_email && "*Please enter a valid email",
    },
    {
      componentType: "input",
      type: "number",
      label: "Mobile*",
      name: "mobile",
      value: mobile,
      placeholder: "Mobile",
      handleChange: handleInputChange,
      helperText:
      errors && errors.mobile && "*Please enter a mobile number",
    },
    {
      componentType: "input",
      type: "number",
      label: "Phone*",
      name: "phone",
      value: phone,
      placeholder: "Phone",
      handleChange: handleInputChange,
      helperText:
      errors && errors.phone && "*Please enter a Phone number",
    },
    {
      componentType: "input",
      type: "text",
      label: "Skype",
      name: "skype",
      value: skype,
      placeholder: "Skype URL",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Twitter",
      name: "twitter",
      value: twitter,
      placeholder: "Twitter URL",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Facebook",
      name: "facebook",
      value: facebook,
      placeholder: "Facebook URL",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Website 1",
      name: "website1",
      value: website1,
      placeholder: "Website URL",
      handleChange: handleInputChange,
    },
    {
      componentType: "input",
      type: "text",
      label: "Website 2",
      name: "website2",
      value: website1,
      placeholder: "Website URL",
      handleChange: handleInputChange,
    },
        {
      componentType: "uploadFiles",
      label: "Picture",
      name: "picture",
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
        nextIndex={1}
        // setId={props.setId}
      />
    </ThemeProvider>
  );
}
