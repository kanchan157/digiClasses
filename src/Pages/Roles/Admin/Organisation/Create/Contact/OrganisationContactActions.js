import DataService from "../../../../../../Service";
import { ObjectToFormdata } from "../../../../../../Common/Utils/common_utils";

// ORGANISATION CREATE -> PROFILE - CONSTANTS
export const SET_ORGANISATION_CONTACT = "SET_ORGANISATION_CONTACT";
export const UPDATE_ORGANISATION_CONTACT = "UPDATE_ORGANISATION_CONTACT";
export const UPDATE_ORGANISATION_ID_CONTACT = "UPDATE_ORGANISATION_ID_CONTACT";
export const SET_ORGANISATION_CONTACT_ERROR = "SET_ORGANISATION_CONTACT_ERROR";
export const UPDATE_ORGANISATION_CONTACT_ERROR = "UPDATE_ORGANISATION_CONTACT_ERROR";

export const SetOrganisationContact = (item) => {
  return {
    type: SET_ORGANISATION_CONTACT,
    payload: item,
  };
};

// export const CreateOrganisationContact = (data) => {
//   DataService.createData(ObjectToFormdata(data), "organisation_contact")
//     .then((res) => {
//       return true;
//     })
//     .catch((error) => {
//       return true;
//     });
// };

export function UpdateOrganisationContact(item) {
  return {
    type: UPDATE_ORGANISATION_CONTACT,
    payload: item,
  };
};

export function UpdateOrganisationIdContact(data) {
  return {
    type: UPDATE_ORGANISATION_ID_CONTACT,
    payload: data
  }
}

export function SetOrganisationContactError(data){
  return{
    type: SET_ORGANISATION_CONTACT_ERROR,
    payload: data
  }
}

export function UpdateOrganisationContactError(data){
  return{
    type: UPDATE_ORGANISATION_CONTACT_ERROR,
    payload: data
  }
}
