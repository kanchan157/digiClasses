import { SET_ORGANISATION_PROFILE, UPDATE_ORGANISATION_PROFILE } from "./OrganisationProfileActions"

export const INITIAL_STATE = {
   
};

const OrganisationProfileReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_PROFILE:
            state = action.payload
            break;
        case UPDATE_ORGANISATION_PROFILE:
            state = action.payload
            break;
    }
    return state;
};

export default OrganisationProfileReducer;