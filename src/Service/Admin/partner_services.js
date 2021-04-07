import request from "../api_client";

const BasicInfo = (formData) => {
    return request({
        url: '/partner_profiles',
        method: 'POST',
        data: formData,
    });
}
const BasicInfo_get = (role, id) => {
    const formDataa = new FormData();
    formDataa.append("role", "admin");
    return request({
        url: '/partner_profiles/' + id,
        method: 'Get',
        params: formDataa,
        // paramsSerializer: (params) => {
        //     let result = '';
        //     Object.keys(params).forEach(key => {
        //         if (params[key] != null) {
        //             result += `${key}=${encodeURIComponent(params[key])}&`;
        //         }
        //     });
        //     return result.substr(0, result.length - 1);
        // }
    });
}
const share_login_credentials = (formData) => {
    return request({
        url: '/partner_profile/share_login_credentials',
        method: 'Post',
        params: formData
    });
}
const Nda = (formData) => {
    return request({
        url: '/partner_profile/nda',
        method: 'Post',
        params: formData
    });
}
const Nda_get = (params) => {
    console.log(params)
    return request({
        url: '/partner_profile/nda_document',
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
            console.log("=====", result.substr(0, result.length - 1))
            return result.substr(0, result.length - 1);
        }
    });
}
const wwa = (formData) => {
    return request({
        url: '/partner_profile/wwa_document',
        method: 'Post',
        params: formData
    });
}
const wwa_get = (params) => {
    return request({
        url: '/partner_profile/wwa_document',
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
            console.log("=====", result.substr(0, result.length - 1))
            return result.substr(0, result.length - 1);
        }
    });
}
const Questionnaire = (formData) => {
    return request({
        url: '/partner_questionnaires',
        method: 'POST',
        data: formData,
    });
}
const Questionnaire_get = (params) => {
    return request({
        url: '/partner_questionnaires',
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
            console.log("=====", result.substr(0, result.length - 1))
            return result.substr(0, result.length - 1);
        }
    });
}
const ReferenceQuestionnaire = (formData) => {
    return request({
        url: '/partner_reference_qas',
        method: 'POST',
        data: formData,
    });
}
const ReferenceQuestionnaire_get = (params) => {
    return request({
        url: '/partner_reference_qas',
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
            console.log("=====", result.substr(0, result.length - 1))
            return result.substr(0, result.length - 1);
        }
    });
}
const DueDiligenceCall = (formData) => {
    
    return request({
        url: '/partner_due_diligence_calls',
        method: 'POST',
        data: formData,
    });
}
const DueDiligenceCall_get = (params) => {
    return request({
        url: '/partner_due_diligence_calls/' + params.id,
        method: 'GET',
        params: {},
        // paramsSerializer: (params) => {
        //     // Sample implementation of query string building
        //     let result = '';
        //     Object.keys(params).forEach(key => {
        //         if (params[key] != null) {
        //             result += `${key}=${encodeURIComponent(params[key])}&`;
        //         }
        //     });
        //     console.log("=====", result.substr(0, result.length - 1))
        //     return result.substr(0, result.length - 1);
        // }
    });
}
const Ranking = (formData) => {
    return request({
        url: '/partner_rankings',
        method: 'POST',
        data: formData,
    });
}
const Ranking_get = (params) => {
    return request({
        url: '/partner_rankings',
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
            console.log("=====", result.substr(0, result.length - 1))
            return result.substr(0, result.length - 1);
        }
    });
}
const OtherQuestions = (formData) => {
    return request({
        url: '/partner_extra_questions',
        method: 'POST',
        data: formData,
    });
}
const OtherQuestions_get = (params) => {
    return request({
        url: '/partner_extra_questions',
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
            console.log("=====", result.substr(0, result.length - 1))
            return result.substr(0, result.length - 1);
        }
    });
}
const Review = (formData) => {
    return request({
        url: '/partner_reviews',
        method: 'POST',
        data: formData,
    });
}
const Review_get = (params) => {
    return request({
        url: '/partner_reviews',
        params: params,
        paramsSerializer: (params) => {
            // Sample implementation of query string building
            let result = '';
            Object.keys(params).forEach(key => {
                if (params[key] != null) {
                    result += `${key}=${encodeURIComponent(params[key])}&`;
                }
            });
            console.log("=====", result.substr(0, result.length - 1))
            return result.substr(0, result.length - 1);
        }
    });
}
const ContractDocumentition = (formData) => {
    return request({
        url: '/partner_contract_documents',
        method: 'POST',
        data: formData,
    });
}
const ContractDocumentition_get = (formData) => {

    return request({
        url: '/partner_contract_documents',
        method: 'GET',
        data: formData,
    });
}
const source_get = (formData) => {

    return request({
        url: '/sources',
        method: 'GET',
        data: {},
    });
}

const AdminPartnerClient = {
    BasicInfo, share_login_credentials, Nda, wwa, DueDiligenceCall, Questionnaire, ReferenceQuestionnaire, Ranking, OtherQuestions, Review, ContractDocumentition,
    BasicInfo_get, Nda_get, source_get, DueDiligenceCall_get, Questionnaire_get, ReferenceQuestionnaire_get, ContractDocumentition_get, OtherQuestions_get, Review_get, Ranking_get
}
export default AdminPartnerClient;