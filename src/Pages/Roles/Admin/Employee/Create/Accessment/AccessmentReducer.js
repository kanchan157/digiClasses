import { 
    SET_ACCESSMENT, 
    UPDATE_ACCESSMENT, 
    UPDATE_EMPLOYEE_ID_ACCESSMENT,
    SET_ACCESSMENT_ERROR,
    UPDATE_ACCESSMENT_ERROR 
} from "./AccessmentActions"


export const INITIAL_STATE = {
    section_id: null,
    employee_id: null,
    data: {},
    errors:{
        role: false,
    }
};

const AccessmentReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ACCESSMENT:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id;     
            return {...state, data: action.payload}
        case UPDATE_ACCESSMENT:
            action.payload['employee_id'] = state.employee_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_ACCESSMENT:
            return {...state, employee_id: action.payload.id};
        case SET_ACCESSMENT_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_ACCESSMENT_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
    }
    return state;
};

export default AccessmentReducer;