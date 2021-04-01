import request from "./api_client";

const dataUrl = {
    //  ORGANISATION CREATE - ORGANISATION DETAILS
     ownerships: '/ownerships',
     type_of_organisation: '/type_of_organisations',
     type_of_services: '/type_of_services',
     internal_status: '/internal_status',
     territories: '/territories',
     industry_sectors: '/industry_sectors',
     source_referral1: '/source_referral1',
     source_referral2: '/source_referral2',
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
    document_types: '/document_types'
}

export function getData(params, section) {
    return request({
        url: dataUrl[section],
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