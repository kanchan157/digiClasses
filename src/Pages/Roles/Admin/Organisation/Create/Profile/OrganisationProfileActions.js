import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> PROFILE - CONSTANTS
export const SET_ORGANISATION_PROFILE = "SET_ORGANISATION_PROFILE";
export const UPDATE_ORGANISATION_PROFILE = "UPDATE_ORGANISATION_PROFILE";

export const SetOrganisationProfile = (item) => {
  return {
    type: SET_ORGANISATION_PROFILE,
    payload: item,
  };
};

export const CreateOrganisationProfile = (data) => {
  const userDetails = JSON.parse(sessionStorage.getItem('user'));
  console.log(userDetails.data.id, 'dataaa')
  data.organisation_id = `${userDetails && userDetails.data.id}`
  DataService.createData(ObjectToFormdata(data), "organisation_profile")
    .then((res) => {
      return true;
    })
    .catch((error) => {
      return true;
    });
};

export function UpdateOrganisationProfile(item) {
  return {
    type: UPDATE_ORGANISATION_PROFILE,
    payload: item,
  };
}
