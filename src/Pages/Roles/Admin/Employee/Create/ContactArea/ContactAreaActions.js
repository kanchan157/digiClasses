
// CONTACT_AREA CREATE -> DETAILS - CONSTANTS
export const SET_CONTACT_AREA = "SET_CONTACT_AREA";
export const UPDATE_CONTACT_AREA = "UPDATE_CONTACT_AREA";
export const SET_CONTACT_AREA_ERROR = "SET_CONTACT_AREA_ERROR";
export const UPDATE_CONTACT_AREA_ERROR = "UPDATE_CONTACT_AREA_ERROR";

export const SetContactArea = (item) => {
  return {
    type: SET_CONTACT_AREA,
    payload: item,
  };
};

export function UpdateContactArea(data) {
  return {
    type: UPDATE_CONTACT_AREA,
    payload: data,
  };
}

export function SetContactAreaError(data){
  return{
    type: SET_CONTACT_AREA_ERROR,
    payload: data
  }
}

export function UpdateContactAreaError(data){
  return{
    type: UPDATE_CONTACT_AREA_ERROR,
    payload: data
  }
}
