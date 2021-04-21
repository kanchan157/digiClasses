import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> DETAILS - CONSTANTS
export const SET_ORGANISATION_GENERAL = "SET_ORGANISATION_GENERAL";
export const UPDATE_ORGANISATION_GENERAL = "UPDATE_ORGANISATION_GENERAL";
export const UPDATE_ORGANISATION_ID_GENERAL = "UPDATE_ORGANISATION_ID_GENERAL";
export const SET_GENERAL_SECTION_AND_ORG_IDS = "SET_GENERAL_SECTION_AND_ORG_IDS";
export const RESET_GENERAL = "RESET_GENERAL";

export const SetOrganisationGeneral = (item) => {
  return {
    type: SET_ORGANISATION_GENERAL,
    payload: item,
  };
};

export const CreateOrganisationGeneral = (data) => {
  const userDetails = JSON.parse(sessionStorage.getItem('user'));
  data.organisation_id = `${userDetails && userDetails.data.id}`
  DataService.createData(ObjectToFormdata(data), "organisation_general")
    .then((res) => {
      return true;
    })
    .catch((error) => {
      return true;
    });
};

export function UpdateOrganisationGeneral(item) {
  return {
    type: UPDATE_ORGANISATION_GENERAL,
    payload: item,
  };
}

export function UpdateOrganisationIdGeneral(item) {
  return {
    type: UPDATE_ORGANISATION_ID_GENERAL,
    payload: item,
  };
};

export function SetGeneralSectionAndOrgIds(data) {
  return {
    type: SET_GENERAL_SECTION_AND_ORG_IDS,
    payload: data,
  };
};

export function ResetGeneral() {
  return {
    type: RESET_GENERAL
  }
};