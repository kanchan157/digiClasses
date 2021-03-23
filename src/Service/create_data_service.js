import request from "./api_client";

const creationUrl = {
    // training: '/trainings',
}

function createData(formData, section) {
    return request({
        url: creationUrl[section],
        method: 'POST',
        data: formData
    })
}

export default createData;
