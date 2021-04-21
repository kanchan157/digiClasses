import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { api_url } from "../../../../../../constants";
import FormGenerator from "../../../../../../Components/FormGenerator";
import DataService from "../../../../../../Service";
import { useDispatch, useSelector } from "react-redux";
import { SetOrganisationDetails, UpdateOrganisationDetailsError, UpdateOrganisationDetailsSectionId } from "./OrganisationDetailsActions";
import { SetOrganisationActivitySectionAndOrgIds } from "../Activity/OrganisationActivityActions";
import { SetContactSectionAndOrgIds } from "../Contact/OrganisationContactActions";
import { SetOrganisationContractSectionAndOrgIds } from "../Contract/OrganisationContractActions";
import { SetGeneralSectionAndOrgIds } from "../General/OrganisationGeneralActions";
import { SetPreContractSectionAndOrgIds } from "../PreContract/OrganisationPreContractActions";
import { SetProfileSectionAndOrgIds } from "../Profile/OrganisationProfileActions";

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


export default function OrganisationDetails(props) {
  
  const dispatch = useDispatch();

  const {
    // id_1,
    organisation_id,
    organisation_name,
    ownership,
    individual_type,
    type_of_organisation,
    type_of_service,
    services_offered,
    internal_status,
    territory,
    created_at,
    picture,
    industry_sector_list_id,
    source_referral1_id,
    source_referral2_id,
    source_referral3_id,
    attended_acuity_event_date,
    level_structure
  } = useSelector((state) => state.organisationDetailsReducer.data);

  const errors = useSelector(state => state.organisationDetailsReducer.errors);

  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
     setLoading(true);
     DataService.getDirectData(`/organisations/${id}`)
     .then((response) => {
       dispatch(UpdateOrganisationDetailsSectionId(id));
       dispatch(SetOrganisationDetails(response.data));
       dispatch(SetContactSectionAndOrgIds({sectionId: response.organisation_contact_info_id, organisationId: id}));
       dispatch(SetProfileSectionAndOrgIds({sectionId: response.organisation_profile_id, organisationId: id}));
       dispatch(SetGeneralSectionAndOrgIds({sectionId: response.organisation_general_detail_id, organisationId: id}));
       dispatch(SetPreContractSectionAndOrgIds({sectionId: response.organisation_pre_contract_id, organisationId: id}));
       dispatch(SetOrganisationContractSectionAndOrgIds({sectionId: response.organisation_contract_phase_id, organisationId: id}));
       dispatch(SetOrganisationActivitySectionAndOrgIds({sectionId: response.organisation_activity_field_id, organisationId: id}));
       setLoading(false);
     })
     .catch((err) => {});
  }, [errors]);

  const handleInputChange = (value, index) => {
    const updatedForm = formInput;
    updatedForm[index]['value'] = value;
    setFormInput(updatedForm);
    const formData = {};
    formInput.forEach((item) => {
      if(item.value) {
        formData[item.name] = item.value;
        dispatch(SetOrganisationDetails(formData));
      }
    });
    dispatch(UpdateOrganisationDetailsError(updatedForm[index].name));
  }
  
  const formArray = [
    {
      componentType: "input",
      type: "text",
      label: "Organisation Name*",
      helperText: errors && errors.organisation_name && "*Please enter organisation name",
      name: "organisation_name",
      value: organisation_name,
      placeholder: "Organisation Name",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Ownership",
      name: "ownership",
      value: ownership,
      placeholder: "Select Ownership",
      apiVariable: "ownerships",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Individual Type*",
      helperText: errors && errors.individual_type && "*Please select an individual type",
      name: "individual_type",
      value: individual_type,
      placeholder: "Individual Type",
      selectOptions: [{id: 0, value: 'Client', name: 'Client'},{id: 1, value: 'Partner', name: 'Partner'},{id: 2, value: 'Supplier', name: 'Supplier'},{id: 3, value: 'Internal Suppliers', name:'Internal Suppliers'},{id: 4, value: 'Competitor', name: 'Competitor'}],
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Type of Organisation*",
      name: "type_of_organisation",
      value: type_of_organisation,
      placeholder: "Type of Organisation",
      apiVariable: "type_of_organisation",
      handleChange: handleInputChange,
      helperText: errors && errors.type_of_organisation && "*Please select the type of organisation",
    },
    {
      componentType: "select",
      label: "Type of Service*",
      name: "type_of_service",
      value: type_of_service,
      placeholder: "Type of Service",
      apiVariable: "type_of_services",
      handleChange: handleInputChange,
      helperText: errors && errors.type_of_service && "*Please select the type of service",
    },
    {
      componentType: "MultipleSelect",
      label: "Service Offered",
      name: "services_offered",
      value: services_offered,
      placeholder: "Service Offered",
      apiVariable: "services_offered",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Internal Status*",
      name: "internal_status",
      helperText: errors && errors.internal_status && "*Please select the internal status",
      value: internal_status,
      placeholder: "Internal Status",
      apiVariable: "internal_status",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Territory*",
      name: "territory",
      helperText: errors && errors.territory && "*Please select the territory",
      value: territory,
      placeholder: "Territory",
      apiVariable: "territories",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Industry Sector*",
      name: "industry_sector_list_id",
      helperText: errors && errors.industry_sector_list_id && "*Please select an industry sector",
      value: industry_sector_list_id,
      placeholder: "Industry Sector",
      apiVariable: "industry_sectors",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Source 1",
      name: "source_referral1_id",
      value: source_referral1_id,
      placeholder: "Source 1",
      select: true,
      defaultValue: "Select Ownership",
      apiVariable: "source_referral1",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Source 2 Referral",
      name: "source_referral2_id",
      value: source_referral2_id,
      placeholder: "Source 2 Referral",
      apiVariable: "source_referral2",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Source 3 Referral",
      name: "source_referral3_id",
      value: source_referral3_id,
      placeholder: "Source 3 Referral",
      apiVariable: "source_referral3",
      handleChange: handleInputChange
    },
    {
      componentType: "selectWithDatePicker",
      label: "Attend Acuity Events",
      name: "attended_acuity_event_date",
      value: attended_acuity_event_date,
      placeholder: "Acuity Events",
      selectOptions: [{id: 0, value: 'Yes', name: 'Yes'},{id: 1, value: 'No', name: 'No'}],
      handleChange: handleInputChange
    },
    {
      componentType: "uploadFiles",
      label: "Organisation Picture",
      name: "picture",
      handleChange: handleInputChange
    },
    {
      componentType: "select",
      label: "Level Structure*",
      helperText:
        errors && errors.level_structure && "*Please enter Level Structure",
      name: "level_structure",
      value: level_structure,
      placeholder: "Select Level Structure",
      selectOptions: [
        { id: 0, value: "Level", name: "Level" },
        { id: 1, value: "Grade", name: "Grade" },
        { id: 1, value: "Band", name: "Band" },
      ],
      handleChange: handleInputChange,
    },
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
