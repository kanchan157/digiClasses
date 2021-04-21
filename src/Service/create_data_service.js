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
    organisation_business_developments:'/organisation_business_developments',
    // Employee - Create
    employee_contact_area: "/employees",
    employee_work_information: "/employee_work_infos",
    employee_coaching_capacity: "/employee_coaching_mentoring_capacities",
    employee_training_and_development: "/employee_training_developments",
    employee_mentoring_capacity: "/employee_coaching_mentoring_capacities",
    employee_coaching_profile: "/employee_coaching_mentoring_profiles",
    employee_facilitations: "/employee_facilitations",
    employee_assessments: "/employee_assessments",
    employee_gdprs: "/employee_gdprs",
}

function createData(formData, section) {
    return request({
        url: creationUrl[section],
        method: 'POST',
        data: formData
    })
}

export default createData;
