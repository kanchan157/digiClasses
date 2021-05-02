import request from "./api_client";

const dataUrl = {
    // GET ALL DROP DOWN VALUES OF ORGANISATION STEPPER
    all_organisation_dropdowns: '/organisations/listing_dropdowns',

    // ORGANISATION LISTING
    organisations: '/organisations',
    employees:'/employees',

    // EMPLOYEE LISTING
    employee: '/organisations/fetch_general_detail',

    //  ORGANISATION CREATE - ORGANISATION DETAILS
     ownerships: '/ownerships',
     type_of_organisation: '/type_of_organisations',
     type_of_services: '/type_of_services',
     internal_status: '/internal_status',
     territories: '/territories',
     industry_sectors: '/industry_sectors',
     level_dropdown_values:'/level_dropdown_values',
     source_referral1: '/source_referral1',
     source_referral2: '/source_referral2',
     source_referral3:'/source_referral3',
     services_offered: '/services_offered',

    //  ORGANISATION CREATE - PROFILE
     currencies: '/currencies',
     employee_list: '/employee_list',
     countries: '/countries',

    //  ORGANISATION - CONTACT
    parent_organisations: '/parent_organisations',
    business_units: '/business_units',
    offices: '/offices',
    departments: '/departments',
    functions: '/functions',

    // ORGANISATION - PRECONTRACT
    org_profile_document_types: '/org_profile_document_types',


    // EMPLOYEE - CONTACT AREA
    languages: '/languages',

    // EMPLOYEE - WORK INFORMATION
    job_role_list:'/job_role_list',
    organisation_list:'/organisation_list',

    // EMPLOYEE - COACHING PROFILE
    diagnostic_tools:'/diagnostic_tools',
    client_types:'/client_types', 
     areas_of_expertise:'/areas_of_expertise',

    // EMPLOYEE - GDPR
    purposes:'/purposes',

}

export function getData(params, section, url) {
    return request({
        url: url || dataUrl[section],
        method: 'GET',
        params: params,
        paramsSerializer: (params) => {
            // Sample implementation of query string building
            let result = '';
            Object.keys(params).forEach(key => {
                if (params[key] != null) {
                    result += `${key}=${encodeURIComponent(params[key])}&`;
                }
            });
            return result.substr(0, result.length - 1);
        }
    })
}


const ListingService = {
    getData
}


export default ListingService;