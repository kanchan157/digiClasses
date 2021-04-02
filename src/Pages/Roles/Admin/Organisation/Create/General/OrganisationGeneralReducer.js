import { SET_ORGANISATION_GENERAL,UPDATE_ORGANISATION_GENERAL, UPDATE_ORGANISATION_ID_GENERAL } from "./OrganisationGeneralActions"

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
        }
    return state;
};

export default OrganisationGeneralReducer;