import request from "./api_client";

function getDirectData(url) {
    return request({
        url: url,
        method: 'GET',
    });
}




export default getDirectData;