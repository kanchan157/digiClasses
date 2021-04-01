import { SET_ORGANISATION_PRECONTRACT, UPDATE_ORGANISATION_PRECONTRACT } from "./OrganisationPreContractActions"

export const INITIAL_STATE = {
   
};

const OrganisationPreContractReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_PRECONTRACT:
            state = action.payload
            break;
        case UPDATE_ORGANISATION_PRECONTRACT:
            state = action.payload
            break;
    }
    return state;
};

export default OrganisationPreContractReducer;