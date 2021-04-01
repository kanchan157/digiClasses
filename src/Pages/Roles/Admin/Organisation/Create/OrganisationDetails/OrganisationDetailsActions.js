import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> DETAILS - CONSTANTS
export const SET_ORGANISATION_DETAILS = "SET_ORGANISATION_DETAILS";
export const UPDATE_ORGANISATION_DETAILS = "UPDATE_ORGANISATION_DETAILS";

export const SetOrganisationDetails = (item) => {
  return {
    type: SET_ORGANISATION_DETAILS,
    payload: item,
  };
};

export const CreateOrganisationDetails = (data) => {
  // data.individual_type = 'Client';
  // data.services_offered = [1,2];
  console.log(data, 'dataaa')
  DataService.createData(ObjectToFormdata(data), "organisation_details")
    .then((res) => {
      return true;
    })
    .catch((error) => {
      return true;
    });
};

export function UpdateOrganisationDetails(item) {
  return {
    type: UPDATE_ORGANISATION_DETAILS,
    payload: item,
  };
}
