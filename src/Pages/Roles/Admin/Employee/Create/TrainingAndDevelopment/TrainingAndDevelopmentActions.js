
// EMPLOYEE CREATE -> WORK INFORMATION - CONSTANTS
export const SET_TRAINING_AND_DEVELOPMENT = "SET_TRAINING_AND_DEVELOPMENT";
export const UPDATE_TRAINING_AND_DEVELOPMENT = "UPDATE_TRAINING_AND_DEVELOPMENT";
export const UPDATE_EMPLOYEE_ID_TRAINING_AND_DEVELOPMENT = "UPDATE_EMPLOYEE_ID_TRAINING_AND_DEVELOPMENT";
export const SET_TRAINING_AND_DEVELOPMENT_ERROR = "SET_TRAINING_AND_DEVELOPMENT_ERROR";
export const UPDATE_TRAINING_AND_DEVELOPMENT_ERROR = "UPDATE_TRAINING_AND_DEVELOPMENT_ERROR";
export const RESET_TRAINING_AND_DEVELOPMENT = "RESET_TRAINING_AND_DEVELOPMENT";

export const SetTrainingAndDevelopment = (item) => {
  return {
    type: SET_TRAINING_AND_DEVELOPMENT,
    payload: item,
  };
};

export function UpdateTrainingAndDevelopment(data) {
  return {
    type: UPDATE_TRAINING_AND_DEVELOPMENT,
    payload: data,
  };
}

export function UpdateEmployeeIdTrainingAndDevelopment(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_TRAINING_AND_DEVELOPMENT,
    payload: data
  }
}

export function SetTrainingAndDevelopmentError(data){
  return{
    type: SET_TRAINING_AND_DEVELOPMENT_ERROR,
    payload: data
  }
}

export function UpdateTrainingAndDevelopmentError(data){
  return{
    type: UPDATE_TRAINING_AND_DEVELOPMENT_ERROR,
    payload: data
  }
}

export function ResetTrainingAndDevelopment() {
  return {
    type: RESET_TRAINING_AND_DEVELOPMENT
  }
};
