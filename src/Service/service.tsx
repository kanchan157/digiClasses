// THIS FILE TO BE REMOVED
import request  from "./api_client";

export const something = () => {

};


// export const Post_API = (params: any, url: any, callback: any, formDataFlag: any = false) => {
//     console.log(params, url)
//     common('POST', url, params, formDataFlag)
//         .then((response) => {
//             console.log("response.data", response);
//             response.status == 200 ? callback({ data: response.data, error: false, }) :
//                 callback({ data: response.data, error: true, });
//         })
//         .catch((error) => {
//             console.log("error")

//             // console.log("error",error);
//             callback({ data: error, error: true })
//         })
// }

// export const Get_API = (params: any, url: any, callback: any, formDataFlag: any = false) => {

//     common('GET', url, params, formDataFlag)
//         .then((response) => {
//             console.log(response);
//             response.status === 200 && callback({ data: response.data, error: false, });
//         })
//         .catch((error) => {
//             console.log(error);

//             callback({ data: error, error: true })
//         })
// }
