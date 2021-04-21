export const SET_ORGANISATION_LIST = "SET_ORGANISATION_LIST";

export const SetOrganisationActivity = (item) => {
    return {
      type: SET_ORGANISATION_LIST,
      payload: item,
    };
  };