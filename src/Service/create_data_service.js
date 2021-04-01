import request from "./api_client";

const creationUrl = {
    organisation_details: "/organisations",
    organisation_profile: "/organisation_profiles",
    organisation_contact: "/organisation_contact_infos",
    organisation_pre_contract: "/organisation_pre_contracts",
    organisation_general: "/organisation_general_details"
}

function createData(formData, section) {
    return request({
        url: creationUrl[section],
        method: 'POST',
        data: formData
    })
}

export default createData;
