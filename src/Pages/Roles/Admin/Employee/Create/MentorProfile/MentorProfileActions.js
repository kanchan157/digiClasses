
// EMPLOYEE CREATE -> MENTOR PROFILE - CONSTANTS
export const SET_MENTOR_PROFILE = "SET_MENTOR_PROFILE";
export const UPDATE_MENTOR_PROFILE = "UPDATE_MENTOR_PROFILE";
export const UPDATE_EMPLOYEE_ID_MENTOR_PROFILE = "UPDATE_EMPLOYEE_ID_MENTOR_PROFILE";
export const SET_MENTOR_PROFILE_ERROR = "SET_MENTOR_PROFILE_ERROR";
export const UPDATE_MENTOR_PROFILE_ERROR = "UPDATE_MENTOR_PROFILE_ERROR";

export const SetMentorProfile = (item) => {
  return {
    type: SET_MENTOR_PROFILE,
    payload: item,
  };
};

export function UpdateMentorProfile(data) {
  return {
    type: UPDATE_MENTOR_PROFILE,
    payload: data,
  };
}

export function UpdateEmployeeIdMentorProfile(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_MENTOR_PROFILE,
    payload: data
  }
}

export function SetMentorProfileError(data){
  return{
    type: SET_MENTOR_PROFILE_ERROR,
    payload: data
  }
}

export function UpdateMentorProfileError(data){
  return{
    type: UPDATE_MENTOR_PROFILE_ERROR,
    payload: data
  }
}
