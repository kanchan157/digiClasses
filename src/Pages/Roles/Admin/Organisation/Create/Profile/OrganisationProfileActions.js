import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> PROFILE - CONSTANTS
export const SET_ORGANISATION_PROFILE = "SET_ORGANISATION_PROFILE";
export const UPDATE_ORGANISATION_PROFILE = "UPDATE_ORGANISATION_PROFILE";
export const UPDATE_ORGANISATION_ID_PROFILE = "UPDATE_ORGANISATION_ID_PROFILE";
export const SET_ORGANISATION_PROFILE_ERROR = "SET_ORGANISATION_PROFILE_ERROR";
export const UPDATE_ORGANISATION_PROFILE_ERROR = "UPDATE_ORGANISATION_PROFILE_ERROR";

export const SetOrganisationProfile = (item) => {
  return {
    type: SET_ORGANISATION_PROFILE,
    payload: item,
  };
};

// export const CreateOrganisationProfile = (data) => {
  // const userDetails = JSON.parse(sessionStorage.getItem('user'));
  // console.log(userDetails.data.id, 'dataaa')
  // data.organisation_id = `${userDetails && userDetails.data.id}`
  // DataService.createData(ObjectToFormdata(data), "organisation_profile")
  //   .then((res) => {
  //     return true;
  //   })
  //   .catch((error) => {
  //     return true;
  //   });
// };

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
