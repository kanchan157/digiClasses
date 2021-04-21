import { 
    SET_COACHING_PROFILE, 
    UPDATE_COACHING_PROFILE, 
    UPDATE_EMPLOYEE_ID_COACHING_PROFILE,
    SET_COACHING_PROFILE_ERROR,
    UPDATE_COACHING_PROFILE_ERROR 
} from "./CoachingProfileActions"


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

const CoachingProfileReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_COACHING_PROFILE:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id;
            action.payload['role'] = 'Coaching';    
            return {...state, data: action.payload}
        case UPDATE_COACHING_PROFILE:
            action.payload['employee_id'] = state.employee_id;
            action.payload['role'] = 'Coaching';
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_COACHING_PROFILE:
            return {...state, employee_id: action.payload.id};
        case SET_COACHING_PROFILE_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_COACHING_PROFILE_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
    }
    return state;
};

export default CoachingProfileReducer;