import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> DETAILS - CONSTANTS
export const SET_ORGANISATION_DETAILS = "SET_ORGANISATION_DETAILS";
export const UPDATE_ORGANISATION_DETAILS = "UPDATE_ORGANISATION_DETAILS";
export const SET_ORGANISATION_DETAILS_ERROR = "SET_ORGANISATION_DETAILS_ERROR";
export const UPDATE_ORGANISATION_DETAILS_ERROR =
  "UPDATE_ORGANISATION_DETAILS_ERROR";
export const UPDATE_ORGANISATION_DETAILS_SECTION_ID =
  "UPDATE_ORGANISATION_DETAILS_SECTION_ID";
export const RESET_ORGANISATION_DETAILS = "RESET_ORGANISATION_DETAILS";

export const SetOrganisationDetails = (item) => {
  return {
    type: SET_ORGANISATION_DETAILS,
    payload: item,
  };
};

export function UpdateOrganisationDetails(data) {
  return {
    type: UPDATE_ORGANISATION_DETAILS,
    payload: data,
  };
}

export function SetOrganisationDetailsError(data) {
  return {
    type: SET_ORGANISATION_DETAILS_ERROR,
    payload: data,
  };
}

export function UpdateOrganisationDetailsError(data) {
  return {
    type: UPDATE_ORGANISATION_DETAILS_ERROR,
    payload: data,
  };
}

export function UpdateOrganisationDetailsSectionId(data) {
  return {
    type: UPDATE_ORGANISATION_DETAILS_SECTION_ID,
    payload: data,
  };
}

export function ResetOrganisationDetails() {
  return {
    type: RESET_ORGANISATION_DETAILS
  }
};
