import { 
    SET_ORGANISATION_PROFILE, 
    UPDATE_ORGANISATION_PROFILE, 
    UPDATE_ORGANISATION_ID_PROFILE,
    SET_ORGANISATION_PROFILE_ERROR,
    UPDATE_ORGANISATION_PROFILE_ERROR ,
    SET_PROFILE_SECTION_AND_ORG_IDS,
    RESET_PROFILE
} from "./OrganisationProfileActions"


export const INITIAL_STATE = {
    section_id: null,
    organisation_id: null,
    data: {},
    errors:{
        account_director: false,
        account_contact: false
    }
};

const OrganisationProfileReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_PROFILE:
            // action.payload['id'] = state.id;
            action.payload['organisation_id'] = state.organisation_id;     
            return {...state, data: action.payload}
        case UPDATE_ORGANISATION_PROFILE:
            action.payload['organisation_id'] = state.organisation_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_ORGANISATION_ID_PROFILE:
            return {...state, organisation_id: action.payload.id};
        case SET_ORGANISATION_PROFILE_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_ORGANISATION_PROFILE_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
        case SET_PROFILE_SECTION_AND_ORG_IDS:
            return {...state, section_id: action.payload.sectionId, organisation_id: action.payload.organisationId};
        case RESET_PROFILE:
            return INITIAL_STATE;
    }
    return state;
};

export default OrganisationProfileReducer;