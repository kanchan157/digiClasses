import { 
    SET_ORGANISATION_ACTIVITY, 
    UPDATE_ORGANISATION_ACTIVITY, 
    UPDATE_ORGANISATION_ID_ACTIVITY,
    UPDATE_ORGANISATION_ACTIVITY_ERROR,
    SET_ORGANISATION_ACTIVITY_ERROR,
    SET_ORGANISATION_ACTIVITY_SECTION_AND_ORG_IDS,
    RESET_BUSINESS_DEVELOPMENT
} from "./OrganisationBusinessDevelopmentActions"


export const INITIAL_STATE = {
    section_id: null,
    organisation_id: null,
    data: {},
    errors: {
        review_date: false,
        meeting_date: false,
        who: false,
        priority: false,
    }
};

const OrganisationActivityReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_ACTIVITY:
            action.payload['organisation_id'] = state.organisation_id;     
            return {...state, data: action.payload}
        case UPDATE_ORGANISATION_ACTIVITY:
            action.payload['organisation_id'] = state.organisation_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_ORGANISATION_ID_ACTIVITY:
            return {...state, organisation_id: action.payload.id};
        case SET_ORGANISATION_ACTIVITY_ERROR:
            return {...state, errors: action.payload};
        case UPDATE_ORGANISATION_ACTIVITY_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}};
        case SET_ORGANISATION_ACTIVITY_SECTION_AND_ORG_IDS:
            return {section_id: action.payload.sectionId, organisation_id: action.payload.organisationId};
        case RESET_BUSINESS_DEVELOPMENT:
            return INITIAL_STATE;
    }
    return state;
};

export default OrganisationActivityReducer;