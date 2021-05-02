import { 
    SET_COACHING_CAPACITY, 
    UPDATE_COACHING_CAPACITY, 
    UPDATE_EMPLOYEE_ID_COACHING_CAPACITY,
    SET_COACHING_CAPACITY_ERROR,
    UPDATE_COACHING_CAPACITY_ERROR,
    RESET_COACHING_CAPACITY
} from "./CoachingCapatityActions"


export const INITIAL_STATE = {
    section_id: null,
    employee_id: null,
    data: {},
    errors:{
        role: false,
    }
};

const CoachingCapacityReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_COACHING_CAPACITY:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id; 
            action.payload['role'] = 'Coaching'; 
            return {...state, data: action.payload}
        case UPDATE_COACHING_CAPACITY:
            action.payload['role'] = 'Coaching';
            action.payload['employee_id'] = state.employee_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_COACHING_CAPACITY:
            return {...state, employee_id: action.payload.id, section_id: action.payload.section_id};
        case SET_COACHING_CAPACITY_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_COACHING_CAPACITY_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
        case RESET_COACHING_CAPACITY:
            return INITIAL_STATE
    }
    return state;
};

export default CoachingCapacityReducer;