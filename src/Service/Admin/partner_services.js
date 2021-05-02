import request from "../api_client";

const serviceUrl = {
    CoachingProfileField: "partner_commission_informations",
    ProfileRole:"profile_roles"
}

const CommisionInfoAdmin = (id, formData, method) => {
    return request({
        url: '/partner_commission_informations/' + id,
        method: method,
        data: formData,
    });
}
const AssessmentProfile = (id, formData, method) => {
    return request({
        url: '/partner_assessment_profiles/' + id,
        method: method,
        params: formData,
    });
}
const AssociateCoaches = (id, formData, method) => {
    return request({
        url: '/partner_associate_coaches/' + id,
        method: method,
        params: formData,
    });
}
const FacilitationProfile = (id, formData, method) => {
    return request({
        url: '/partner_facilitation_profiles/' + id,
        method: method,
        params: formData,
    });
}
const MentoringProfile = (id, formData, method) => {
    return request({
        url: '/partner_mentoring_profiles/' + id,
        method: method,
        params: formData,
    });
}

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
    });
}
const BasicInfo_put = (id, formDataa) => {
    return request({
        url: '/partner_profiles/' + id,
        method: 'Put',
        params: formDataa,
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
    });
}
const Questionnaire = (formData) => {
    return request({
        url: '/partner_questionnaires',
        method: 'POST',
        data: formData,
    });
}
const Questionnaire_put = (id, formData) => {
    return request({
        url: '/partner_questionnaires/' + id,
        method: 'PUT',
        data: formData,
    });
}
const Questionnaire_get = (id, params) => {
    return request({
        url: '/partner_questionnaires/' + id,
        method: 'GET',
        params: params,

    });
}
const ReferenceQuestionnaire = (formData) => {
    return request({
        url: '/partner_reference_qas',
        method: 'POST',
        data: formData,
    });
}
const ReferenceQuestionnaire_put = (id, formData) => {
    return request({
        url: '/partner_reference_qas/' + id,
        method: 'PUT',
        data: formData,
    });
}
const ReferenceQuestionnaire_get = (id, params) => {
    return request({
        url: '/partner_reference_qas/' + id,
        method: 'GET',
        params: params,
    });
}
const WorkInfo = (formData) => {

    return request({
        url: '/partner_work_infos',
        method: 'POST',
        data: formData,
    });
}
const WorkInfo_get = (id, params) => {
    return request({
        url: '/partner_work_infos/' + id,
        method: 'GET',
        params: params,

    });
}
const WorkInfo_put = (id, params) => {
    return request({
        url: '/partner_work_infos/' + id,
        method: 'Put',
        params: params,

    });
}
const CoachingProfileField = (formData) => {

    return request({
        url: '/partner_coaching_profiles',
        method: 'POST',
        data: formData,
    });
}
const CoachingProfileField_get = (id, params) => {
    return request({
        url: '/partner_coaching_profiles/' + id,
        method: 'GET',
        params: params,

    });
}
const CoachingProfileField_put = (id, params) => {
    return request({
        url: '/partner_coaching_profiles/' + id,
        method: 'Put',
        params: params,

    });
}
const QualityAssurance = (formData) => {

    return request({
        url: '/partner_quality_assurances',
        method: 'POST',
        data: formData,
    });
}
const QualityAssurance_get = (id, params) => {
    return request({
        url: '/partner_quality_assurances/' + id,
        method: 'GET',
        params: params,

    });
}
const QualityAssurance_put = (id, params) => {
    return request({
        url: '/partner_quality_assurances/' + params.id,
        method: 'Put',
        params: params,

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

    });
}
const DueDiligenceCall_put = (id, params) => {
    return request({
        url: '/partner_due_diligence_calls/' + params.id,
        method: 'Put',
        params: params,

    });
}
const Ranking = (formData) => {
    return request({
        url: '/partner_rankings',
        method: 'POST',
        data: formData,
    });
}
const Ranking_put = (id, params) => {
    return request({
        url: '/partner_rankings/' + id,
        method: 'Put',
        params: params,
    });
}
const Ranking_get = (id, params) => {
    return request({
        url: '/partner_rankings/' + id,
        method: 'GET',
        params: params,
    });
}
const OtherQuestions = (formData) => {
    return request({
        url: '/partner_extra_questions',
        method: 'POST',
        data: formData,
    });
}
const OtherQuestions_put = (id, formData) => {
    return request({
        url: '/partner_extra_questions/' + id,
        method: 'PUT',
        data: formData,
    });
}
const OtherQuestions_get = (id, params) => {
    return request({
        url: '/partner_extra_questions/' + id,
        method: 'GET',
        params: params,

    });
}
const Review = (formData) => {
    return request({
        url: '/partner_reviews',
        method: 'POST',
        data: formData,
    });
}
const Review_put = (id, params) => {
    return request({
        url: '/partner_reviews/' + id,
        method: 'Put',
        params: params,
    });
}
const Review_get = (id, params) => {
    return request({
        url: '/partner_reviews/' + id,
        method: 'GET',
        params: params,
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
const list_search = (data) => {
    return request({
        url: '/partner_profiles?search=' + data,
        method: 'GET',
        data: {},
    });
}
const dropdown_get = (url) => {
    return request({
        url: serviceUrl[url],
        method: 'GET',
        data: {},
    });
}
const AdminPartnerClient = {
    BasicInfo, share_login_credentials, Nda, wwa, WorkInfo, CoachingProfileField, FacilitationProfile,MentoringProfile, CommisionInfoAdmin, AssessmentProfile, AssociateCoaches, QualityAssurance, DueDiligenceCall, Questionnaire, ReferenceQuestionnaire, Ranking, OtherQuestions, Review, ContractDocumentition,
    BasicInfo_get, Nda_get, wwa_get, source_get, WorkInfo_get, CoachingProfileField_get, QualityAssurance_get, DueDiligenceCall_get, Questionnaire_get, ReferenceQuestionnaire_get, ContractDocumentition_get, OtherQuestions_get, Review_get, Ranking_get,
    BasicInfo_put, WorkInfo_put, CoachingProfileField_put, QualityAssurance_put, Questionnaire_put, ReferenceQuestionnaire_put, OtherQuestions_put, Review_put, Ranking_put, DueDiligenceCall_put,
    list_search,
    dropdown_get
}
export default AdminPartnerClient;