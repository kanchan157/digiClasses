import { SET_ORGANISATION_DETAILS,UPDATE_ORGANISATION_DETAILS } from "./OrganisationDetailsActions"

export const INITIAL_STATE = {
   
};

const OrganisationDetailsReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_DETAILS:
            state = action.payload
            break;
        case UPDATE_ORGANISATION_DETAILS:
            state = action.payload
            break;
    }
    return state;
};

export default OrganisationDetailsReducer;