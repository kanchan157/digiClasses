import request from "./api_client";

const updateDataUrl = {
    // training: '/trainings',
}

function updateData(formData,id=null,section){
    return request({
        url: `${updateDataUrl[section]}/${id || ''}`,
        method: 'PUT',
        data: formData
    })
}

export default updateData;
