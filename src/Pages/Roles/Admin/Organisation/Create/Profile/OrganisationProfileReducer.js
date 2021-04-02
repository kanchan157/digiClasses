import { 
    SET_ORGANISATION_PROFILE, 
    UPDATE_ORGANISATION_PROFILE, 
    UPDATE_ORGANISATION_ID_PROFILE,
    SET_ORGANISATION_PROFILE_ERROR,
    UPDATE_ORGANISATION_PROFILE_ERROR 
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
    }
    return state;
};

export default OrganisationProfileReducer;