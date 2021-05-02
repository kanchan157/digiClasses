
// EMPLOYEE CREATE -> WORK INFORMATION - CONSTANTS
export const SET_MENTORING_CAPACITY = "SET_MENTORING_CAPACITY";
export const UPDATE_MENTORING_CAPACITY = "UPDATE_MENTORING_CAPACITY";
export const UPDATE_EMPLOYEE_ID_MENTORING_CAPACITY = "UPDATE_EMPLOYEE_ID_MENTORING_CAPACITY";
export const SET_MENTORING_CAPACITY_ERROR = "SET_MENTORING_CAPACITY_ERROR";
export const UPDATE_MENTORING_CAPACITY_ERROR = "UPDATE_MENTORING_CAPACITY_ERROR";
export const RESET_MENTORING_CAPACITY = "RESET_MENTORING_CAPACITY";

export const SetMentoringCapacity = (item) => {
  return {
    type: SET_MENTORING_CAPACITY,
    payload: item,
  };
};

export function UpdateMentoringCapacity(data) {
  return {
    type: UPDATE_MENTORING_CAPACITY,
    payload: data,
  };
}

export function UpdateEmployeeIdMentoringCapacity(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_MENTORING_CAPACITY,
    payload: data
  }
}

export function SetMentoringCapacityError(data){
  return{
    type: SET_MENTORING_CAPACITY_ERROR,
    payload: data
  }
}

export function UpdateMentoringCapacityError(data){
  return{
    type: UPDATE_MENTORING_CAPACITY_ERROR,
    payload: data
  }
}

export function ResetMentoringCapacity() {
  return {
    type: RESET_MENTORING_CAPACITY
  }
};