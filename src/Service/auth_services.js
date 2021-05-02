import request from "./api_client";

function signUp(formData) {
    return request({
        url: '/submit_registration_request',
        method: 'POST',
        data: formData,
        handleHeaders: 2
    });
}

function login(formData) {
    return request({
        url: '/auth/sign_in',
        method: 'POST',
        data: formData,
        handleHeaders: 1,
    });
}

function logout() {
    return request({
        url: '/auth/sign_out',
        method: 'DELETE',
        handleHeaders: 0,
    });
}

function changePassword(formData, headers) {
    return request({
        url: '/users/create_password',
        method: 'POST',
        data: formData,
        headers: headers
    });
}


function requestReset(formData) {
    return request({
        url: '/auth/password',
        method: 'POST',
        data: formData,
    });
}

function updatePassword(formData) {
    return request({
        url: '/auth/password',
        method: 'Put',
        data: formData
    })
}


const AuthClient = {
    signUp, login, logout, changePassword, requestReset, updatePassword
};

export default AuthClient;