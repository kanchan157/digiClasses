import {
  SET_ORGANISATION_DETAILS,
  UPDATE_ORGANISATION_DETAILS,
  SET_ORGANISATION_DETAILS_ERROR,
  UPDATE_ORGANISATION_DETAILS_ERROR,
  UPDATE_ORGANISATION_DETAILS_SECTION_ID,
  RESET_ORGANISATION_DETAILS
} from "./OrganisationDetailsActions";

export const INITIAL_STATE = {
  section_id: null,
  data: {},
  errors: {
    organisation_name: false,
    individual_type_id: false,
    internal_status_id: false,
    territory_id: false,
    industry_sector_list_id: false,
    type_of_service_id: false,
    type_of_organisation_id: false,
    level_structure: false
  },
};

const OrganisationDetailsReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_ORGANISATION_DETAILS:
      return { ...state, data: action.payload };
    case UPDATE_ORGANISATION_DETAILS:
      return { section_id: action.payload.id, data: action.payload };
    case SET_ORGANISATION_DETAILS_ERROR:
      return { ...state, errors: action.payload };
    case UPDATE_ORGANISATION_DETAILS_ERROR:
      return { ...state, errors: { ...state.errors, [action.payload]: false } };
    case UPDATE_ORGANISATION_DETAILS_SECTION_ID:
      return { ...state, section_id: action.payload };
    case RESET_ORGANISATION_DETAILS:
      return INITIAL_STATE;
  }
  return state;
};

export default OrganisationDetailsReducer;
