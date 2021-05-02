import { 
    SET_MENTOR_PROFILE, 
    UPDATE_MENTOR_PROFILE, 
    UPDATE_EMPLOYEE_ID_MENTOR_PROFILE,
    SET_MENTOR_PROFILE_ERROR,
    UPDATE_MENTOR_PROFILE_ERROR,
    RESET_MENTOR_PROFILE
} from "./MentorProfileActions"


export const INITIAL_STATE = {
    section_id: null,
    employee_id: null,
    data: {},
    errors:{
        role : false,
        overview : false,
        approach : false,
        background : false,
        areas_of_expertise : false,
        client_specific_areas_of_expertise : false,
        representatitive_clients : false,
        education_and_qualifications : false,
        client_testimonials : false,
        diagnostic_tool_id : false,
        language_list_id : false,
        client_type_id : false,
        picture : false,
    }
};

const MentorProfileReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_MENTOR_PROFILE:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id;   
            action.payload['role'] = 'Mentoring';  
            return {...state, data: action.payload}
        case UPDATE_MENTOR_PROFILE:
            action.payload['employee_id'] = state.employee_id
            action.payload['role'] = 'Mentoring';
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_MENTOR_PROFILE:
            return {...state, employee_id: action.payload.id, section_id: action.payload.section_id};
        case SET_MENTOR_PROFILE_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_MENTOR_PROFILE_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
        case RESET_MENTOR_PROFILE:
            return INITIAL_STATE
    }
    return state;
};

export default MentorProfileReducer;