import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import {
  SetOrganisationContact,
  UpdateOrganisationContactError,
} from "./OrganisationContactActions";

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

export default function Contact(props) {
  const userDetails = JSON.parse(sessionStorage.getItem("user") || "{}");
  const dispatch = useDispatch();

  const {
    website,
    primary_telephone,
    primary_fax,
    primary_email,
    facebook,
    twitter,
    linkedIn,
    parent_organisation,
    departments,
    business_units,
    offices,
    functions,
    branches,
  } = useSelector((state) => state.organisationContactReducer.data);

  const errors = useSelector(
    (state) => state.organisationContactReducer.errors
  );

  const handleInputChange = (value, index) => {
    const updatedForm = formInput;
    updatedForm[index]["value"] = value;
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if (item.value) {
        formData[item.name] = item.value;
        console.log(formData, 'formData')
        dispatch(SetOrganisationContact(formData));
      }
    });
    if (updatedForm[index].name !== "branches") {
      dispatch(UpdateOrganisationContactError(updatedForm[index].name));
    }
  };

  const [addressObject, setAddressObject] = useState({});
  const handleAddressChange = (value, index) => {
    console.log(value, index);
    const arrayIndex = index.split("-")[0];
    const itemName = index.split("-")[1];
    const updatedAddress = addressObject;
    updatedAddress[itemName] = value;
    setAddressObject(updatedAddress);
    handleInputChange([addressObject], Number(arrayIndex));
    dispatch(UpdateOrganisationContactError(itemName));
  };

  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Website",
      name: "website",
      placeholder: "www.organisation.com",
      handleChange: handleInputChange,
      value: website,
    },
    {
      componentType: "input",
      type: "text",
      label: "Primary Telephone",
      name: "primary_telephone",
      placeholder: "Primary Telephone",
      handleChange: handleInputChange,
      value: primary_telephone,
    },
    {
      componentType: "input",
      type: "text",
      label: "Primary Fax",
      name: "primary_fax",
      placeholder: "Primary Fax",
      handleChange: handleInputChange,
      value: primary_fax,
    },
    {
      componentType: "input",
      type: "text",
      label: "Primary Email*",
      name: "primary_email",
      required: true,
      placeholder: "Primary Email",
      handleChange: handleInputChange,
      helperText: errors.primary_email && "*Please enter primary email",
      value: primary_email,
    },
    {
      componentType: "address",
      name: "branches",
      addressLine1: {
        placeholder: "Address Line 1*",
        type: "text",
        name: "address_line1",
        index: "4-address_line1",
        handleChange: handleAddressChange,
        helperText: errors.address_line1 && "*Please enter address line 1",
        value: branches[0].address_line1,
      },
      addressLine2: {
        placeholder: "Address Line 2",
        type: "text",
        name: "address_line2",
        index: "4-address_line2",
        handleChange: handleAddressChange,
        value: branches[0].address_line2,
      },
      businessTelephone: {
        placeholder: "Business Telephone*",
        type: "text",
        name: "business_telephone",
        index: "4-business_telephone",
        handleChange: handleAddressChange,
        value: branches[0].business_telephone,
        helperText:
          errors.business_telephone && "*Please enter a business telephone",
      },
      businessFax: {
        placeholder: "Business Fax",
        type: "text",
        name: "business_fax",
        index: "4-business_fax",
        handleChange: handleAddressChange,
        value: branches[0].business_fax,
      },
      businessEmail: {
        placeholder: "Business Email",
        type: "text",
        name: "business_email",
        index: "4-business_email",
        handleChange: handleAddressChange,
        value: branches[0].business_email,
      },
      city: {
        name: "city",
        // index: "4-city",
        // handleChange: handleAddressChange,
        placeholder: "City*",
        select: true,
        defaultValue: "City",
        selectOptions: [{ id: 0, name: "Manchester", value: "Manchester" }],
        // apiVariable: "source_referral1",
        index: "4-city",
        handleChange: handleAddressChange,
        value: branches[0].city,
        helperText: errors.city && "*Please select a city",
      },
      county: {
        name: "county",
        type: "text",
        placeholder: "County*",
        index: "4-county",
        handleChange: handleAddressChange,
        value: branches[0].county,
        helperText: errors.county && "*Please enter a county name",
      },
      country: {
        // componentType: "select",
        name: "country_list_id",
        // value: source_referral1_id,
        placeholder: "Country*",
        select: true,
        defaultValue: "Country",
        apiVariable: "countries",
        index: "4-country_list_id",
        handleChange: handleAddressChange,
        value: branches[0].country_list_id,
        helperText: errors.country_list_id && "*Please select a country",
      },
      zipcode: {
        name: "zipcode",
        type: "text",
        placeholder: "Zipcode*",
        index: "4-zipcode",
        handleChange: handleAddressChange,
        value: branches[0].zipcode,
        helperText: errors.zipcode && "*Please enter a zipcode",
      },
      label: "Business Address*",

      // Address component to go here
    },
    {
      componentType: "input",
      type: "text",
      label: "Facebook",
      name: "facebook",
      placeholder: "facebook.com/organisation",
      handleChange: handleInputChange,
      value: facebook,
    },
    {
      componentType: "input",
      type: "text",
      label: "Twitter",
      name: "twitter",
      placeholder: "twitter.com/organisation",
      handleChange: handleInputChange,
      value: twitter,
    },
    {
      componentType: "input",
      type: "text",
      label: "LinkedIn",
      name: "linkedin",
      placeholder: "linkedin.com/company/organisation",
      handleChange: handleInputChange,
      value: linkedIn,
    },
    {
      componentType: "select",
      label: "Parent Organisation",
      name: "parent_organisation",
      placeholder: "Dropdown",
      apiVariable: "parent_organisations",
      params: `organisation_id=${userDetails && userDetails.data.id}`,
      handleChange: handleInputChange,
      value: parent_organisation,
    },
    {
      componentType: "MultipleSelect",
      label: "Departments ",
      name: "departments",
      placeholder: "Departments",
      apiVariable: "departments",
      handleChange: handleInputChange,
      value: departments,
    },
    {
      componentType: "MultipleSelect",
      label: "Busniess Unit",
      name: "business_units",
      placeholder: "Unit",
      apiVariable: "business_units",
      handleChange: handleInputChange,
      value: business_units,
    },
    {
      componentType: "MultipleSelect",
      label: "Office",
      name: "offices",
      placeholder: "Office",
      apiVariable: "offices",
      handleChange: handleInputChange,
      value: offices,
    },
    {
      componentType: "MultipleSelect",
      label: "Functions",
      name: "functions",
      placeholder: "Functions",
      apiVariable: "functions",
      handleChange: handleInputChange,
      value: functions,
    },
  ];

  const [formInput, setFormInput] = useState(formArray);

  useEffect(() => {
    setFormInput(formArray);
  }, [errors]);

  return (
    <ThemeProvider theme={theme}>
      <FormGenerator children={formInput} nextIndex={3} setId={props.setId} />
    </ThemeProvider>
  );
}
