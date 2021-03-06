// ORGANISATION CREATE -> CONTRACT - CONSTANTS
export const SET_ORGANISATION_CONTRACT = "SET_ORGANISATION_CONTRACT";
export const UPDATE_ORGANISATION_CONTRACT = "UPDATE_ORGANISATION_CONTRACT";
export const SET_CONTRACT_SECTION_AND_ORG_IDS = "SET_CONTRACT_SECTION_AND_ORG_IDS";
export const UPDATE_ORGANISATION_ID_CONTRACT =
  "UPDATE_ORGANISATION_ID_CONTRACT";
export const SET_ORGANISATION_CONTRACT_ERROR =
  "SET_ORGANISATION_CONTRACT_ERROR";
export const UPDATE_ORGANISATION_CONTRACT_ERROR =
  "UPDATE_ORGANISATION_CONTRACT_ERROR";
export const RESET_CONTRACT = "RESET_CONTRACT"

export const SetOrganisationContract = (item) => {
  return {
    type: SET_ORGANISATION_CONTRACT,
    payload: item,
  };
};

export function UpdateOrganisationContract(data) {
  return {
    type: UPDATE_ORGANISATION_CONTRACT,
    payload: data,
  };
}

export function UpdateOrganisationIdContract(data) {
  return {
    type: UPDATE_ORGANISATION_ID_CONTRACT,
    payload: data,
  };
}

export function SetOrganisationContractError(data) {
  return {
    type: SET_ORGANISATION_CONTRACT_ERROR,
    payload: data,
  };
}

export function UpdateOrganisationContractError(data) {
  return {
    type: UPDATE_ORGANISATION_CONTRACT_ERROR,
    payload: data,
  };
};

export function SetOrganisationContractSectionAndOrgIds(data) {
  return {
    type: SET_CONTRACT_SECTION_AND_ORG_IDS,
    payload: data,
  };
};

export function ResetContract() {
  return {
    type: RESET_CONTRACT
  }
};