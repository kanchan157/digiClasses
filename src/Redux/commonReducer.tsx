import {DELETE_DATA, GLOBAL_DATA,SET_ORGANISATION_DROPDOWN_VALUES} from './actions';

const intialState = {
  email: '',
  token: '',
  role:"",
  organisationDropdowns: []
};
const commonReducer = (state = intialState, action:any) => {
  switch (action.type) {
    case GLOBAL_DATA:
      return Object.assign({}, state, action.payload);
    case DELETE_DATA:
      return intialState;
    case SET_ORGANISATION_DROPDOWN_VALUES:
      return { ...state, organisationDropdowns: action.payload };
    default:
      return state;
  }
};
export default commonReducer;
