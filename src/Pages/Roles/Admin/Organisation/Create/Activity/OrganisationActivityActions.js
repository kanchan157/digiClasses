
// ORGANISATION CREATE -> ACTIVITY - CONSTANTS
export const SET_ORGANISATION_ACTIVITY = "SET_ORGANISATION_ACTIVITY";
export const UPDATE_ORGANISATION_ACTIVITY = "UPDATE_ORGANISATION_ACTIVITY";
export const UPDATE_ORGANISATION_ID_ACTIVITY = "UPDATE_ORGANISATION_ID_ACTIVITY";
export const UPDATE_ORGANISATION_ACTIVITY_ERROR = "UPDATE_ORGANISATION_ACTIVITY_ERROR";
export const SET_ORGANISATION_ACTIVITY_ERROR = "SET_ORGANISATION_ACTIVITY_ERROR";

export const SetOrganisationActivity = (item) => {
  return {
    type: SET_ORGANISATION_ACTIVITY,
    payload: item,
  };
};

export function UpdateOrganisationActivity(data) {
  return {
    type: UPDATE_ORGANISATION_ACTIVITY,
    payload: data,
  };
}

export function UpdateOrganisationIdActivity(data) {
  return {
    type: UPDATE_ORGANISATION_ID_ACTIVITY,
    payload: data
  }
}

export function SetOrganisationActivityError(data){
  return{
    type: SET_ORGANISATION_ACTIVITY_ERROR,
    payload: data
  }
}

export function UpdateOrganisationActivityError(data) {
  return {
    type: UPDATE_ORGANISATION_ACTIVITY_ERROR,
    payload: data
  }
}
