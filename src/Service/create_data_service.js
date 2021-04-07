import request from "./api_client";

const creationUrl = {
    // Organisation Create
    organisation_details: "/organisations",
    organisation_profile: "/organisation_profiles",
    organisation_contact: "/organisation_contact_infos",
    organisation_pre_contract: "/organisation_pre_contracts",
    organisation_general: "/organisation_general_details",
    organisation_contract: "/organisation_contract_phases",
    organisation_activity: "/organisation_activity_fields",
    // Employee - Create
    employee_contact_area: "/employees"
}

function createData(formData, section) {
    return request({
        url: creationUrl[section],
        method: 'POST',
        data: formData
    })
}

export default createData;
