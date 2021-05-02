
// EMPLOYEE CREATE -> WORK INFORMATION - CONSTANTS
export const SET_COACHING_CAPACITY = "SET_COACHING_CAPACITY";
export const UPDATE_COACHING_CAPACITY = "UPDATE_COACHING_CAPACITY";
export const UPDATE_EMPLOYEE_ID_COACHING_CAPACITY = "UPDATE_EMPLOYEE_ID_COACHING_CAPACITY";
export const SET_COACHING_CAPACITY_ERROR = "SET_COACHING_CAPACITY_ERROR";
export const UPDATE_COACHING_CAPACITY_ERROR = "UPDATE_COACHING_CAPACITY_ERROR";
export const RESET_COACHING_CAPACITY = "RESET_COACHING_CAPACITY";

export const SetCoachingCapacity = (item) => {
  return {
    type: SET_COACHING_CAPACITY,
    payload: item,
  };
};

export function UpdateCoachingCapacity(data) {
  return {
    type: UPDATE_COACHING_CAPACITY,
    payload: data,
  };
}

export function UpdateEmployeeIdCoachingCapacity(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_COACHING_CAPACITY,
    payload: data
  }
}

export function SetCoachingCapacityError(data){
  return{
    type: SET_COACHING_CAPACITY_ERROR,
    payload: data
  }
}

export function UpdateCoachingCapacityError(data){
  return{
    type: UPDATE_COACHING_CAPACITY_ERROR,
    payload: data
  }
}

export function ResetCoachingCapacity() {
  return {
    type: RESET_COACHING_CAPACITY
  }
};
