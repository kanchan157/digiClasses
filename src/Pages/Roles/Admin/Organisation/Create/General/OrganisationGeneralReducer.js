import { SET_ORGANISATION_GENERAL,SET_GENERAL_SECTION_AND_ORG_IDS,UPDATE_ORGANISATION_GENERAL, UPDATE_ORGANISATION_ID_GENERAL, RESET_GENERAL } from "./OrganisationGeneralActions"

export const INITIAL_STATE = {
    section_id: null,
    organisation_id: null,
    data: {}
};

const OrganisationGeneralReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_GENERAL:
            action.payload['organisation_id'] = state.organisation_id;     
            return {...state, data: action.payload}
        case UPDATE_ORGANISATION_GENERAL:
            action.payload['organisation_id'] = state.organisation_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_ORGANISATION_ID_GENERAL:
            return {...state, organisation_id: action.payload.id};
        case SET_GENERAL_SECTION_AND_ORG_IDS:
            return {...state, section_id: action.payload.sectionId, organisation_id: action.payload.organisationId};
        case RESET_GENERAL:
            return INITIAL_STATE;
        }
    return state;
};

export default OrganisationGeneralReducer;