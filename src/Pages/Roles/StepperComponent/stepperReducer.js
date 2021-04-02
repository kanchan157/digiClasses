import { DELETE_STEPPER_DATA, GLOBAL_STEPPER_DATA } from '../../../Redux/actions';

const intialState = {
    partner_profile:""
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
