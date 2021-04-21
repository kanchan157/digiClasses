
// EMPLOYEE CREATE -> MENTOR PROFILE - CONSTANTS
export const SET_ACCESSMENT = "SET_ACCESSMENT";
export const UPDATE_ACCESSMENT = "UPDATE_ACCESSMENT";
export const UPDATE_EMPLOYEE_ID_ACCESSMENT = "UPDATE_EMPLOYEE_ID_ACCESSMENT";
export const SET_ACCESSMENT_ERROR = "SET_ACCESSMENT_ERROR";
export const UPDATE_ACCESSMENT_ERROR = "UPDATE_ACCESSMENT_ERROR";

export const SetAccessment = (item) => {
  return {
    type: SET_ACCESSMENT,
    payload: item,
  };
};

export function UpdateAccessment(data) {
  return {
    type: UPDATE_ACCESSMENT,
    payload: data,
  };
}

export function UpdateEmployeeIdAccessment(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_ACCESSMENT,
    payload: data
  }
}

export function SetAccessmentError(data){
  return{
    type: SET_ACCESSMENT_ERROR,
    payload: data
  }
}

export function UpdateAccessmentError(data){
  return{
    type: UPDATE_ACCESSMENT_ERROR,
    payload: data
  }
}
