import { 
    SET_TRAINING_AND_DEVELOPMENT, 
    UPDATE_TRAINING_AND_DEVELOPMENT, 
    UPDATE_EMPLOYEE_ID_TRAINING_AND_DEVELOPMENT,
    SET_TRAINING_AND_DEVELOPMENT_ERROR,
    UPDATE_TRAINING_AND_DEVELOPMENT_ERROR,
    RESET_TRAINING_AND_DEVELOPMENT
} from "./TrainingAndDevelopmentActions"


export const INITIAL_STATE = {
    section_id: null,
    employee_id: null,
    data: {},
    errors:{

    }
};

const EmployeeTrainingAndDevelopmentReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_TRAINING_AND_DEVELOPMENT:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id;     
            return {...state, data: action.payload}
        case UPDATE_TRAINING_AND_DEVELOPMENT:
            action.payload['employee_id'] = state.employee_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_TRAINING_AND_DEVELOPMENT:
            return {...state, employee_id: action.payload.id, section_id: action.payload.section_id};
        case SET_TRAINING_AND_DEVELOPMENT_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_TRAINING_AND_DEVELOPMENT_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
        case RESET_TRAINING_AND_DEVELOPMENT:
            return INITIAL_STATE
    }
    return state;
};

export default EmployeeTrainingAndDevelopmentReducer;