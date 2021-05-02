import { 
    SET_WORK_INFORMATION, 
    UPDATE_WORK_INFORMATION, 
    UPDATE_EMPLOYEE_ID_WORK_INFORMATION,
    SET_WORK_INFORMATION_ERROR,
    UPDATE_WORK_INFORMATION_ERROR,
    RESET_WORK_INFORMATION
} from "./WorkInformationActions"


export const INITIAL_STATE = {
    section_id: null,
    employee_id: null,
    data: {},
     errors : {
        job_title: false,
        employee_status: false,
        current_role_history_notes: false,
        date_follow_up_contact_made: false,
        organisation_moved_to: false,
        level:false,
        line_manager_name: false,
        line_manager_contact_details: false,
        hr_sponsor_title: false,
        hr_sponsor_contact_details: false,
        department_list_id: false,
        office_list_id: false,
        function_list_id: false,
        address_line1: false,
        city: false,
        county: false,
        country_list_id: false,
        zipcode: false,
        mobile: false,
        phone: false,
        job_role_lists: false,
        left_organisation_follow_up_action: false,
        past_organisation: false
      }
};

const EmployeeWorkInformationReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_WORK_INFORMATION:
            // action.payload['id'] = state.id;
            action.payload['employee_id'] = state.employee_id;     
            return {...state, data: action.payload}
        case UPDATE_WORK_INFORMATION:
            action.payload['employee_id'] = state.employee_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_EMPLOYEE_ID_WORK_INFORMATION:
            return {...state, employee_id: action.payload.id, section_id: action.payload.section_id};
        case SET_WORK_INFORMATION_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_WORK_INFORMATION_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
        case RESET_WORK_INFORMATION:
            return INITIAL_STATE
    }
    return state;
};

export default EmployeeWorkInformationReducer;