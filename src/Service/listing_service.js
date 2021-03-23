import request from "./api_client";

const dataUrl = {
     ownerships: '/ownerships',
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