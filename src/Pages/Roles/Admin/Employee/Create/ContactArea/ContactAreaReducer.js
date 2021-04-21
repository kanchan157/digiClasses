import { SET_CONTACT_AREA, UPDATE_CONTACT_AREA, SET_CONTACT_AREA_ERROR, UPDATE_CONTACT_AREA_ERROR } from "./ContactAreaActions"

export const INITIAL_STATE = {
    section_id: null,
    data: {},
    errors:{
        title: false,
        first_name: false,
        middle_name: false,
        last_name: false,
        primary_email: false,
        authorisation_to_access_the_service: false,
        authorisation_provided_by: false,
        nationality_list_id: false,
        bame: false,
        diversity_and_inclusion: false,
        languages_list: false,
        mobile: false,
        phone: false
    }
};

const ContactAreaReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_CONTACT_AREA:
            action.payload.organisation_id = 79;
            return {...state, data: action.payload}
        case UPDATE_CONTACT_AREA:
            return {section_id: action.payload.id, data: action.payload}
        case SET_CONTACT_AREA_ERROR:
            return {...state, errors: action.payload}
        case UPDATE_CONTACT_AREA_ERROR:
            return {...state, errors: {...state.errors, [action.payload] : false}}
    }
    return state;
};

export default ContactAreaReducer;