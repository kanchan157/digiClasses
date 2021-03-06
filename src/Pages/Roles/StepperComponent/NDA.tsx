import React, { useEffect, useState } from 'react'
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import Header from './header';
import { useSelector } from 'react-redux';
import { Document, Page } from 'react-pdf';

function NDA(props: any) {
    const global_data = useSelector((state: any) => state.stepperReducer);
    const [pdfData, setPdfData]: any = useState({});
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);


    useEffect(() => {
        AdminPartnerClient.Nda_get({ partner_profile_id: 28 }).then((response: any) => {
            console.log(response)
            setPdfData(response)
        });
    }, [])

    const onSubmit = () => {
        AdminPartnerClient.Nda({ partner_profile_id: global_data.partner_profile }).then((response: any) => {
            // props.parentSetProfileId(response.data.id,response.data.attributes.acuity_people_profile_id);
        }).catch(error => alert(JSON.stringify(error.errors)));
        props.parentHandleNext(props.activeIndex + 1)
    }
    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }

    return (
        <>
            <Header isBack={true} saveBtnTitle={'Save and Send NDA'} parentcall={onSubmit} parentBackCall={onBack} />
            <iframe
                title="file"
                style={{ width: '100%', height: 'calc(100vh - 201px)' }}
                src={pdfData.url}
            />
            <Header isBack={true} saveBtnTitle={'Save and Send NDA'} parentcall={onSubmit} parentBackCall={onBack} />
        </>
    )
}

export default NDA
