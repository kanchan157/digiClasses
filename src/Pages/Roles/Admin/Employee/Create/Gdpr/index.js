import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import { SetGdpr, UpdateGdprError } from "./GdprActions";

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function Gdpr(props) {
  const dispatch = useDispatch();

  const {
    consent_status,
    consent_expiry_date,
    consent_terms,
    lawful_bias,
    purposes,
    contact_status
  } = useSelector((state) => state.gdprReducer.data);

  const errors = useSelector((state) => state.gdprReducer.errors);

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
        dispatch(SetGdpr(formData));
      }
    });
    dispatch(UpdateGdprError(updatedForm[index].name));
  };

  const formArray = [
    {
        componentType: "select",
        label: "Consent Status*",
        helperText:
          errors && errors.consent_status && "*Please Yes or No",
        name: "consent_status",
        value: consent_status,
        placeholder: "Select Yes or No",
        selectOptions: [
          { id: 0, value: "Yes", name: "Yes" },
          { id: 1, value: "No", name: "No" },
        ],
        handleChange: handleInputChange,
      },
      {
        componentType: "datePicker",
        required: true,
        label: "Consent Expiry Date*",
        name: "consent_expiry_date",
        value: consent_expiry_date,
        handleChange: handleInputChange,
        helperText: errors.consent_expiry_date && "*Please enter a Date",
      },
      {
        componentType: "input",
        type: "text",
        label: "Consent Terms*",
        helperText: errors.consent_terms && "*Please enter a Consent Terms",
        name: "consent_terms",
        placeholder: "Consent Terms",
        handleChange: handleInputChange,
        value: consent_terms,
      },
      {
        componentType: "select",
        label: "Lawful Bias*",
        helperText:
          errors && errors.lawful_bias && "*Please select Lawful Bias",
        name: "lawful_bias",
        value: lawful_bias,
        placeholder: "Select Lawful Bias",
        selectOptions: [
          { id: 0, value: "Consent", name: "Consent" },
          { id: 1, value: "Contractual necessity", name: "Contractual necessity" },
          { id: 1, value: "Legal Obligation", name: "Legal Obligation" },
          { id: 1, value: "Legitimate interest", name: "Legitimate interest" },
          { id: 1, value: "Public Interest", name: "Public Interest" },
          { id: 1, value: "Vital Interests", name: "Vital Interests" },
        ],
        handleChange: handleInputChange,
      },
      {
        componentType: "select",
        label: "Purposes*",
        name: "purposes",
        value: purposes,
        placeholder: "Select Purposes",
        apiVariable: "purposes",
        handleChange: handleInputChange,
        helperText: errors && errors.purposes && "*Please select a Purposes",
      },
      {
        componentType: "select",
        label: "Contact Status*",
        helperText:
          errors && errors.contact_status && "*Please select Contact Status",
        name: "contact_status",
        value: contact_status,
        placeholder: "Select Contact Status",
        selectOptions: [
          { id: 0, value: "do_not_contact", name: "do_not_contact" },
          { id: 1, value: "do_not_mailshot", name: "do_not_mailshot" },
        ],
        handleChange: handleInputChange,
      },
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
