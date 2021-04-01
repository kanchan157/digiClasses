import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> PROFILE - CONSTANTS
export const SET_ORGANISATION_PRECONTRACT = "SET_ORGANISATION_PRECONTRACT";
export const UPDATE_ORGANISATION_PRECONTRACT = "UPDATE_ORGANISATION_PRECONTRACT";

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
