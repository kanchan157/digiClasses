import { 
    SET_ORGANISATION_LIST, 
} from "./ListActions"


export const INITIAL_STATE = {
    data: []
};

const OrganisationListReducer = (state = INITIAL_STATE, action) => {
      
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_ORGANISATION_LIST:
            action.payload['organisation_id'] = state.organisation_id;     
            return {...state, data: action.payload}
    }
    return state;
};

export default OrganisationListReducer;