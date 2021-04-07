import axios from "axios";
import { BASE_API_URL } from "../constants";

export const request = (options) => {

    const authHeaders = JSON.parse(sessionStorage.getItem('authorization_headers'));
    // const users = JSON.parse(sessionStorage.getItem('user'));
    // const organisation = JSON.parse(sessionStorage.getItem('organisation'));
    // if (users != null && users.role === "super_admin") {
    //     options['url'] != '/organisations/organisation_login' && (options['url'] = options['url'] + '?organisation_id=' + organisation.id)
    // }
    const client = axios.create({
        baseURL: BASE_API_URL,
        headers: options.headers || authHeaders
    });

    const onSuccess = (response) => {
        if (options.handleHeaders === 1) {
            if (response && response.data) {
                sessionStorage.setItem('authorization_headers', JSON.stringify(response.headers));
                // const userRole = response.data.user_role;
                const user = JSON.stringify({ ...response.data });
                sessionStorage.setItem("user", user);
                // const permissions = JSON.stringify(response.data.permissions);
                // const organisation = JSON.stringify(response.data.organisation);
                // permissions && sessionStorage.setItem('permissions', permissions);
                // organisation && sessionStorage.setItem('organisation', organisation);
            }
        }
        // if (options.handleHeaders === 3) {
        //     if (response && response.data && response.data.user) {
        //         console.log(response)

        //         const userRole = response.data.user.role;
        //         const user = JSON.stringify({ ...response.data.user, role: userRole });
        //         const organisation = JSON.stringify(response.data.organisation);
        //         sessionStorage.setItem("user", user);
        //         sessionStorage.setItem('authorization_headers', JSON.stringify(response.headers));
        //         organisation && sessionStorage.setItem('organisation', organisation);
        //     }
        // }
        if (options.handleHeaders === 0) {
            sessionStorage.clear();
            window.location.href = '/auth/login';
        }
        const resp = response.data;
        if (resp.hasOwnProperty("success")) {
            return resp;
        }
        else {
            return { ...resp, success: true }
        }
    };

    const onError = (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                window.location.href = '/auth/login';
            }
        }
        //Check API and return response in accepted state with error data and success equals false flag to avoid catch block in all api requests.
        return Promise.reject(error.response ? error.response.data : { message: "something went wrong", success: false } || error.message || error.errors);
    };

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default request;


