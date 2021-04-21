import { 
    SET_EMPLOYEE_LIST, 
} from "./ListActions"


export const INITIAL_STATE = {
    data: []
};

const EmployeeListReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_EMPLOYEE_LIST:
            action.payload['organisation_id'] = state.organisation_id;     
            return {...state, data: action.payload}
    }
    return state;
};

export default EmployeeListReducer;