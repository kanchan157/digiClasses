import {
  SET_ORGANISATION_CONTRACT,
  UPDATE_ORGANISATION_CONTRACT,
  UPDATE_ORGANISATION_ID_CONTRACT,
  SET_ORGANISATION_CONTRACT_ERROR,
  UPDATE_ORGANISATION_CONTRACT_ERROR,
} from "./OrganisationContractActions";

export const INITIAL_STATE = {
  section_id: null,
  organisation_id: null,
  data: {},
  errors: {
    start_date_with_client: false,
    date_account_closed: false,
  },
};

const OrganisationContractReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_ORGANISATION_CONTRACT:
      action.payload["organisation_id"] = state.organisation_id;
      return { ...state, data: action.payload };
    case UPDATE_ORGANISATION_CONTRACT:
      action.payload["organisation_id"] = state.organisation_id;
      return { ...state, section_id: action.payload.id, data: action.payload };
    case UPDATE_ORGANISATION_ID_CONTRACT:
      return { ...state, organisation_id: action.payload.id };
    case SET_ORGANISATION_CONTRACT_ERROR:
      return { ...state, errors: action.payload };
    case UPDATE_ORGANISATION_CONTRACT_ERROR:
      return { ...state, errors: { ...state.errors, [action.payload]: false } };
  }
  return state;
};

export default OrganisationContractReducer;
