import { SET_ORGANISATION_PRECONTRACT,SET_PRE_CONTRACT_SECTION_AND_ORG_IDS, UPDATE_ORGANISATION_PRECONTRACT, UPDATE_ORGANISATION_ID_PRECONTRACT, RESET_PRE_CONTRACT } from "./OrganisationPreContractActions"

export const INITIAL_STATE = {
    section_id: null,
    organisation_id: null,
    data: {}
};

const OrganisationPreContractReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_PRECONTRACT:
            action.payload['organisation_id'] = state.organisation_id;     
            return {...state, data: action.payload}
        case UPDATE_ORGANISATION_PRECONTRACT:
            action.payload['organisation_id'] = state.organisation_id
            return {...state, section_id: action.payload.id, data: action.payload};
        case UPDATE_ORGANISATION_ID_PRECONTRACT:
            return {...state, organisation_id: action.payload.id};
        case SET_PRE_CONTRACT_SECTION_AND_ORG_IDS:
            return {...state, section_id: action.payload.sectionId, organisation_id: action.payload.organisationId};
        case RESET_PRE_CONTRACT:
            return INITIAL_STATE;
    }
    return state;
};

export default OrganisationPreContractReducer;