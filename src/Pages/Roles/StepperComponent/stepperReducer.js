import { DELETE_STEPPER_DATA, GLOBAL_STEPPER_DATA } from '../../../Redux/actions';

const intialState = {
    partner_profile:"",
    due_diligence_id:"",
    work_info_id:"5",
    partner_extra_question_id:"",
    ranking_id:"",
    review_id:"",
    questionnaire_id:"",
    partner_reference_ques_id:"",
    contractdocumentition_id:"",
    coaching_profile_field_id:"",
    Commision_info_admin_id:"",
    assessment_profile_id:"",
    associate_coaches_id:"",
    facilitation_profile_id:"",
    mentoring_profile_id:"",
    facilitation_flag:false,
    mentoring_flag:true,
    extraQuestion_id:"",
    quality_assurance_id:"",
    referenceDetail:[]
};
const stepperReducer = (state = intialState, action) => {
    switch (action.type) {
        case GLOBAL_STEPPER_DATA:
            return Object.assign({}, state, action.payload);
        case DELETE_STEPPER_DATA:
            return intialState;
        default:
            return state;
    }
};
export default stepperReducer;
