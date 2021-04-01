import request from "../api_client";

const BasicInfo = (formData) => {
    // const formDataa = new FormData();
    // for (const i in formData) {
    //     formDataa.append(i, formData[i]);
    // }

    return request({
        url: '/partner_profiles',
        method: 'POST',
        data: formData,
    });
}
const Nda = (formData) => {
    return request({
        url: '/partner_profile/nda',
        method: 'GET',
        data: formData,
    });
}
const DueDiligenceCall = (formData) => {
    // const formDataa = new FormData();
    // for (const i in formData) {
    //     formDataa.append(i, formData[i]);
    // }
    return request({
        url: '/partner_due_diligence_calls',
        method: 'POST',
        data: formData,
    });
}
const Ranking = (formData) => {
    // const formDataa = new FormData();
    // for (const i in formData) {
    //     formDataa.append(i, formData[i]);
    // }
    return request({
        url: '/partner_rankings',
        method: 'POST',
        data: formData,
    });
}
const OtherQuestions = (formData) => {
    // const formDataa = new FormData();
    // for (const i in formData) {
    //     formDataa.append(i, formData[i]);
    // }
    return request({
        url: '/partner_extra_questions',
        method: 'POST',
        data: formData,
    });
}
const Review = (formData) => {
    // const formDataa = new FormData();
    // for (const i in formData) {
    //     formDataa.append(i, formData[i]);
    // }
    return request({
        url: '/partner_reviews',
        method: 'POST',
        data: formData,
    });
}
const ContractDocumentition = (formData) => {
    // const formDataa = new FormData();
    // for (const i in formData) {
    //     formDataa.append(i, formData[i]);
    // }
    return request({
        url: '/partner_contract_documents',
        method: 'POST',
        data: formData,
    });
}

const AdminPartnerClient ={
    BasicInfo,Nda,DueDiligenceCall,Ranking,OtherQuestions,Review,ContractDocumentition,
}
export default AdminPartnerClient;