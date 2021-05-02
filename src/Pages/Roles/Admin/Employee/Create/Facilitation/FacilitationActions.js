
// EMPLOYEE CREATE -> MENTOR PROFILE - CONSTANTS
export const SET_FACILITATION = "SET_FACILITATION";
export const UPDATE_FACILITATION = "UPDATE_FACILITATION";
export const UPDATE_EMPLOYEE_ID_FACILITATION = "UPDATE_EMPLOYEE_ID_FACILITATION";
export const SET_FACILITATION_ERROR = "SET_FACILITATION_ERROR";
export const UPDATE_FACILITATION_ERROR = "UPDATE_FACILITATION_ERROR";
export const RESET_FACILITATION_AREA = "RESET_FACILITATION_AREA";

export const SetFacilitation = (item) => {
  return {
    type: SET_FACILITATION,
    payload: item,
  };
};

export function UpdateFacilitation(data) {
  return {
    type: UPDATE_FACILITATION,
    payload: data,
  };
}

export function UpdateEmployeeIdFacilitation(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_FACILITATION,
    payload: data
  }
}

export function SetFacilitationError(data){
  return{
    type: SET_FACILITATION_ERROR,
    payload: data
  }
}

export function UpdateFacilitationError(data){
  return{
    type: UPDATE_FACILITATION_ERROR,
    payload: data
  }
}

export function ResetFacilitation() {
  return {
    type: RESET_FACILITATION_AREA
  }
};
