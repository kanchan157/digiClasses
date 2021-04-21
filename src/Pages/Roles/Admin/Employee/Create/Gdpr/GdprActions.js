
// EMPLOYEE CREATE -> MENTOR PROFILE - CONSTANTS
export const SET_GDPR = "SET_GDPR";
export const UPDATE_GDPR = "UPDATE_GDPR";
export const UPDATE_EMPLOYEE_ID_GDPR = "UPDATE_EMPLOYEE_ID_GDPR";
export const SET_GDPR_ERROR = "SET_GDPR_ERROR";
export const UPDATE_GDPR_ERROR = "UPDATE_GDPR_ERROR";

export const SetGdpr = (item) => {
  return {
    type: SET_GDPR,
    payload: item,
  };
};

export function UpdateGdpr(data) {
  return {
    type: UPDATE_GDPR,
    payload: data,
  };
}

export function UpdateEmployeeIdGdpr(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_GDPR,
    payload: data
  }
}

export function SetGdprError(data){
  return{
    type: SET_GDPR_ERROR,
    payload: data
  }
}

export function UpdateGdprError(data){
  return{
    type: UPDATE_GDPR_ERROR,
    payload: data
  }
}
