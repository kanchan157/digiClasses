import { 
    SET_MENTORING_CAPACITY, 
    UPDATE_MENTORING_CAPACITY, 
    UPDATE_EMPLOYEE_ID_MENTORING_CAPACITY,
    SET_MENTORING_CAPACITY_ERROR,
    UPDATE_MENTORING_CAPACITY_ERROR 
} from "./MentoringCapatityActions"


export const INITIAL_STATE = {
    section_id: null,
    employee_id: null,
    data: {},
    errors:{
        role: false,
    }
};

const MentoringCapacityReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_MENTORING_CAPACITY:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id;
            action.payload['role'] = 'Mentoring';  
            return {...state, data: action.payload}
        case UPDATE_MENTORING_CAPACITY:
            action.payload['employee_id'] = state.employee_id;
            action.payload['role'] = 'Mentoring';
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_MENTORING_CAPACITY:
            return {...state, employee_id: action.payload.id};
        case SET_MENTORING_CAPACITY_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_MENTORING_CAPACITY_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
    }
    return state;
};

export default MentoringCapacityReducer;