
// ORGANISATION CREATE -> ACTIVITY - CONSTANTS
export const SET_ORGANISATION_ACTIVITY = "SET_ORGANISATION_ACTIVITY";
export const UPDATE_ORGANISATION_ACTIVITY = "UPDATE_ORGANISATION_ACTIVITY";
export const UPDATE_ORGANISATION_ID_ACTIVITY = "UPDATE_ORGANISATION_ID_ACTIVITY";
export const UPDATE_ORGANISATION_ACTIVITY_ERROR = "UPDATE_ORGANISATION_ACTIVITY_ERROR";
export const SET_ORGANISATION_ACTIVITY_ERROR = "SET_ORGANISATION_ACTIVITY_ERROR";
export const SET_ORGANISATION_ACTIVITY_SECTION_AND_ORG_IDS = "SET_ORGANISATION_ACTIVITY_SECTION_AND_ORG_IDS";
export const RESET_BUSINESS_DEVELOPMENT = "RESET_BUSINESS_DEVELOPMENT";

export const SetOrganisationBusinessDev = (item) => {
  return {
    type: SET_ORGANISATION_ACTIVITY,
    payload: item,
  };
};

export function UpdateOrganisationBusinessDev(data) {
  return {
    type: UPDATE_ORGANISATION_ACTIVITY,
    payload: data,
  };
}

export function UpdateOrganisationIdBusinessDev(data) {
  return {
    type: UPDATE_ORGANISATION_ID_ACTIVITY,
    payload: data
  }
}

export function SetOrganisationBusinessDevError(data){
  return{
    type: SET_ORGANISATION_ACTIVITY_ERROR,
    payload: data
  }
}

export function UpdateOrganisationBusinessDevError(data) {
  return {
    type: UPDATE_ORGANISATION_ACTIVITY_ERROR,
    payload: data
  }
}

export function SetOrganisationBusinessDevSectionAndOrgIds(data) {
  return {
    type: SET_ORGANISATION_ACTIVITY_SECTION_AND_ORG_IDS,
    payload: data,
  };
};

export function ResetBusinessDevelopment() {
  return {
    type: RESET_BUSINESS_DEVELOPMENT
  }
};
