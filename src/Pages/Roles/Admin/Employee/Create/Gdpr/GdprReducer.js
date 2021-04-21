import { 
    SET_GDPR, 
    UPDATE_GDPR, 
    UPDATE_EMPLOYEE_ID_GDPR,
    SET_GDPR_ERROR,
    UPDATE_GDPR_ERROR 
} from "./GdprActions"


export const INITIAL_STATE = {
    section_id: null,
    employee_id: null,
    data: {},
    errors:{
        consent_status : false,
        consent_expiry_date : false,
        consent_terms : false,
        lawful_bias : false,
        purposes : false,
        contact_status : false
    }
};

const GdprReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_GDPR:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id;     
            return {...state, data: action.payload}
        case UPDATE_GDPR:
            action.payload['employee_id'] = state.employee_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_GDPR:
            return {...state, employee_id: action.payload.id};
        case SET_GDPR_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_GDPR_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
    }
    return state;
};

export default GdprReducer;