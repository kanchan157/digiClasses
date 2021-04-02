import { SET_ORGANISATION_DETAILS, UPDATE_ORGANISATION_DETAILS, SET_ORGANISATION_DETAILS_ERROR, UPDATE_ORGANISATION_DETAILS_ERROR } from "./OrganisationDetailsActions"

export const INITIAL_STATE = {
    section_id: null,
    data: {},
    errors:{
        organisation_name: false,
        individual_type: false,
        internal_status: false,
        territory: false,
        industry_sector_list_id: false,
    }
};

const OrganisationDetailsReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_DETAILS:    
            return {...state, data: action.payload}
        case UPDATE_ORGANISATION_DETAILS:
            return {section_id: action.payload.id, data: action.payload}
        case SET_ORGANISATION_DETAILS_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_ORGANISATION_DETAILS_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
    }
    return state;
};

export default OrganisationDetailsReducer;