import { 
    SET_FACILITATION, 
    UPDATE_FACILITATION, 
    UPDATE_EMPLOYEE_ID_FACILITATION,
    SET_FACILITATION_ERROR,
    UPDATE_FACILITATION_ERROR 
} from "./FacilitationActions"


export const INITIAL_STATE = {
    section_id: null,
    employee_id: null,
    data: {},
    errors:{
        role: false,
    }
};

const FacilitationReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_FACILITATION:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id;     
            return {...state, data: action.payload}
        case UPDATE_FACILITATION:
            action.payload['employee_id'] = state.employee_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_FACILITATION:
            return {...state, employee_id: action.payload.id};
        case SET_FACILITATION_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_FACILITATION_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
    }
    return state;
};

export default FacilitationReducer;