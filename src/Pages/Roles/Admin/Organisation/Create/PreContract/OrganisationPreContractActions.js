import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> PROFILE - CONSTANTS
export const SET_ORGANISATION_PRECONTRACT = "SET_ORGANISATION_PRECONTRACT";
export const UPDATE_ORGANISATION_PRECONTRACT = "UPDATE_ORGANISATION_PRECONTRACT";
export const UPDATE_ORGANISATION_ID_PRECONTRACT = "UPDATE_ORGANISATION_ID_PRECONTRACT";
export const SET_PRE_CONTRACT_SECTION_AND_ORG_IDS = "SET_PRE_CONTRACT_SECTION_AND_ORG_IDS";
export const RESET_PRE_CONTRACT = "RESET_PRE_CONTRACT";

export const SetOrganisationPreContract = (item) => {
  return {
    type: SET_ORGANISATION_PRECONTRACT,
    payload: item,
  };
};

export const CreateOrganisationPreContract = (data) => {
  const userDetails = JSON.parse(sessionStorage.getItem('user'));
  data.organisation_id = `${userDetails && userDetails.data.id}`
  DataService.createData(ObjectToFormdata(data), "organisation_pre_contract")
    .then((res) => {
      console.log(`res`, res)
      return true;
    })
    .catch((error) => {
      return true;
    });
};

export function UpdateOrganisationPreContract(item) {
  return {
    type: UPDATE_ORGANISATION_PRECONTRACT,
    payload: item,
  };
}

export function UpdateOrganisationIdPreContract(data) {
  return {
    type: UPDATE_ORGANISATION_ID_PRECONTRACT,
    payload: data
  }
}

export function SetPreContractSectionAndOrgIds(data) {
  return {
    type: SET_PRE_CONTRACT_SECTION_AND_ORG_IDS,
    payload: data,
  };
};

export function ResetPreContract() {
  return {
    type: RESET_PRE_CONTRACT
  }
};