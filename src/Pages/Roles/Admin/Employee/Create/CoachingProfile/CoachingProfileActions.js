
// EMPLOYEE CREATE -> WORK INFORMATION - CONSTANTS
export const SET_COACHING_PROFILE = "SET_COACHING_PROFILE";
export const UPDATE_COACHING_PROFILE = "UPDATE_COACHING_PROFILE";
export const UPDATE_EMPLOYEE_ID_COACHING_PROFILE = "UPDATE_EMPLOYEE_ID_COACHING_PROFILE";
export const SET_COACHING_PROFILE_ERROR = "SET_COACHING_PROFILE_ERROR";
export const UPDATE_COACHING_PROFILE_ERROR = "UPDATE_COACHING_PROFILE_ERROR";

export const SetCoachingProfile = (item) => {
  return {
    type: SET_COACHING_PROFILE,
    payload: item,
  };
};

export function UpdateCoachingProfile(data) {
  return {
    type: UPDATE_COACHING_PROFILE,
    payload: data,
  };
}

export function UpdateEmployeeIdCoachingProfile(data) {
  return {
    type: UPDATE_EMPLOYEE_ID_COACHING_PROFILE,
    payload: data
  }
}

export function SetCoachingProfileError(data){
  return{
    type: SET_COACHING_PROFILE_ERROR,
    payload: data
  }
}

export function UpdateCoachingProfileError(data){
  return{
    type: UPDATE_COACHING_PROFILE_ERROR,
    payload: data
  }
}
