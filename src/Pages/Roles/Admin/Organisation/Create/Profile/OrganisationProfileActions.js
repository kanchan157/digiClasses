import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> PROFILE - CONSTANTS
export const SET_ORGANISATION_PROFILE = "SET_ORGANISATION_PROFILE";
export const UPDATE_ORGANISATION_PROFILE = "UPDATE_ORGANISATION_PROFILE";
export const UPDATE_ORGANISATION_ID_PROFILE = "UPDATE_ORGANISATION_ID_PROFILE";
export const SET_ORGANISATION_PROFILE_ERROR = "SET_ORGANISATION_PROFILE_ERROR";
export const UPDATE_ORGANISATION_PROFILE_ERROR = "UPDATE_ORGANISATION_PROFILE_ERROR";
export const SET_PROFILE_SECTION_AND_ORG_IDS = "SET_PROFILE_SECTION_AND_ORG_IDS";
export const RESET_PROFILE = "RESET_PROFILE";

export const SetOrganisationProfile = (item) => {
  return {
    type: SET_ORGANISATION_PROFILE,
    payload: item,
  };
};

export function UpdateOrganisationProfile(data) {
  return {
    type: UPDATE_ORGANISATION_PROFILE,
    payload: data,
  };
}

export function UpdateOrganisationIdProfile(data) {
  return {
    type: UPDATE_ORGANISATION_ID_PROFILE,
    payload: data
  }
}

export function SetOrganisationProfileError(data){
  return{
    type: SET_ORGANISATION_PROFILE_ERROR,
    payload: data
  }
}

export function UpdateOrganisationProfileError(data){
  return{
    type: UPDATE_ORGANISATION_PROFILE_ERROR,
    payload: data
  }
}

export function SetProfileSectionAndOrgIds(data) {
  return {
    type: SET_PROFILE_SECTION_AND_ORG_IDS,
    payload: data,
  };
};

export function ResetProfile() {
  return {
    type: RESET_PROFILE
  }
};