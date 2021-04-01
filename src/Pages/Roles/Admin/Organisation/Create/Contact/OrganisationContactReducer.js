import { SET_ORGANISATION_CONTACT, UPDATE_ORGANISATION_CONTACT } from "./OrganisationContactActions"

export const INITIAL_STATE = {
   
};

const OrganisationContactReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_CONTACT:
            state = action.payload
            break;
        case UPDATE_ORGANISATION_CONTACT:
            state = action.payload
            break;
    }
    return state;
};

export default OrganisationContactReducer;