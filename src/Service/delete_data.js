import request from "./api_client";

const deletionUrl = {
    // training: '/trainings/destroy_training',
}

function deleteDataWithParams(id, section, data, params) {
    let url = params ? `${deletionUrl[section]}${params ? '?id=' + id : id || ''}`
        : `${deletionUrl[section]}/${id || ''}`
    return request({
        url: url,
        method: 'DELETE',
        data: id ? '' : data
    })
}
function deleteData(section) {
    let url = deletionUrl[section];
    return request({
        url: url,
        method: 'DELETE',
    })
}

export default deleteData;
export { deleteDataWithParams };
