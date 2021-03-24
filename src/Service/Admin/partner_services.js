import request from "../api_client";

const BasicInfo = (formData) => {
    return request({
        url: '/partner_profiles',
        method: 'POST',
        data: formData,
        handleHeaders: 2
    });
}
const DueDiligenceCall = (formData) => {
    return request({
        url: '/partner_due_diligence_calls',
        method: 'POST',
        data: formData,
        handleHeaders: 2
    });
}
const Ranking = (formData) => {
    return request({
        url: '/partner_rankings',
        method: 'POST',
        data: formData,
        handleHeaders: 2
    });
}
const OtherQuestions = (formData) => {
    return request({
        url: '/partner_extra_questions',
        method: 'POST',
        data: formData,
        handleHeaders: 2
    });
}
const Review = (formData) => {
    return request({
        url: '/partner_reviews',
        method: 'POST',
        data: formData,
        handleHeaders: 2
    });
}

const AdminPartnerClient ={
    BasicInfo,DueDiligenceCall,Ranking,OtherQuestions,Review,
}
export default AdminPartnerClient;