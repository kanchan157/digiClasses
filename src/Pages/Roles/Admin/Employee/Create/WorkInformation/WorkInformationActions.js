
// EMPLOYEE CREATE -> WORK INFORMATION - CONSTANTS
export const SET_WORK_INFORMATION = "SET_WORK_INFORMATION";
export const UPDATE_WORK_INFORMATION = "UPDATE_WORK_INFORMATION";
export const UPDATE_EMPLOYEE_ID_WORK_INFORMATION = "UPDATE_EMPLOYEE_ID_WORK_INFORMATION";
export const SET_WORK_INFORMATION_ERROR = "SET_WORK_INFORMATION_ERROR";
export const UPDATE_WORK_INFORMATION_ERROR = "UPDATE_WORK_INFORMATION_ERROR";
export const RESET_WORK_INFORMATION = "RESET_WORK_INFORMATION";

export const SetWorkInformation = (item) => {
  return {
    type: SET_WORK_INFORMATION,
    payload: item,
  };
};

export function UpdateWorkInformation(data) {
  return {
    type: UPDATE_WORK_INFORMATION,
    payload: data,
  };
}

export function UpdateEmployeeIdWorkInformation(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_WORK_INFORMATION,
    payload: data
  }
}

export function SetWorkInformationError(data){
  return{
    type: SET_WORK_INFORMATION_ERROR,
    payload: data
  }
}

export function UpdateWorkInformationError(data){
  return{
    type: UPDATE_WORK_INFORMATION_ERROR,
    payload: data
  }
}

export function ResetWorkInformation() {
  return {
    type: RESET_WORK_INFORMATION
  }
};
