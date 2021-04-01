import { SET_ORGANISATION_GENERAL,UPDATE_ORGANISATION_GENERAL } from "./OrganisationGeneralActions"

export const INITIAL_STATE = {
   
};

const OrganisationGeneralReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_GENERAL:
            state = action.payload
            break;
        case UPDATE_ORGANISATION_GENERAL:
            state = action.payload
            break;
    }
    return state;
};

export default OrganisationGeneralReducer;