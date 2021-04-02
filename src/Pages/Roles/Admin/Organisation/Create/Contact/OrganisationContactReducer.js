import {
  SET_ORGANISATION_CONTACT,
  UPDATE_ORGANISATION_CONTACT,
  UPDATE_ORGANISATION_ID_CONTACT,
  SET_ORGANISATION_CONTACT_ERROR,
  UPDATE_ORGANISATION_CONTACT_ERROR,
} from "./OrganisationContactActions";

export const INITIAL_STATE = {
  section_id: null,
  organisation_id: null,
  data: {
    branches: [
      {
        // address_line1: "",
        // address_line2: "",
        // business_telephone: "",
        // business_fax: "",
        // business_email: "",
        // city: "Manchester",
        // country_list_id: 1,
        // county: "",
        // zipcode: null
      },
    ],
  },
  errors: {
    primary_email: false,
    address_line1: false,
    city: false,
    country_list_id: false,
    county: false,
    zipcode: false,
  },
};

const OrganisationContactReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_ORGANISATION_CONTACT:
      // action.payload['id'] = state.id;
      action.payload["organisation_id"] = state.organisation_id;
      action.payload["branches"] = state.data.branches;
      return { ...state, data: action.payload };
    case UPDATE_ORGANISATION_CONTACT:
      action.payload["organisation_id"] = state.organisation_id;
      return { ...state, section_id: action.payload.id, data: action.payload };
    case UPDATE_ORGANISATION_ID_CONTACT:
      return { ...state, organisation_id: action.payload.id };
    case SET_ORGANISATION_CONTACT_ERROR:
      return { ...state, errors: action.payload };
    case UPDATE_ORGANISATION_CONTACT_ERROR:
      return { ...state, errors: { ...state.errors, [action.payload]: false } };
  }
  return state;
};

export default OrganisationContactReducer;
