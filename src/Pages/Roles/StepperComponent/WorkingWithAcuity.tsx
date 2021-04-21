import PDFViewer from 'pdf-viewer-reactjs'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import Header from './header';

function WorkingWithAcuity(props: any) {
    const global_data = useSelector((state: any) => state.stepperReducer);
    const [pdfData, setPdfData]: any = useState({});

    useEffect(() => {
        console.log(props.profileId)
        AdminPartnerClient.wwa_get({ partner_profile_id: global_data.partner_profile }).then((response: any) => {
            setPdfData(response)
        });
    }, [])

    const onSubmit = () => {
        // AdminPartnerClient.BasicInfo(userData).then((response: any) => {
        //     props.parentSetProfileId(response.data.id,response.data.attributes.acuity_people_profile_id);
        // }).catch(error => alert(JSON.stringify(error.errors)));
        props.parentHandleNext(props.activeIndex + 1)
    }
    const onBack = () => {
        props.parentHandleNext(props.activeIndex - 1)
    }

    return (
        <>
            <Header saveBtnTitle={'Save and Send WWA'} isBack={true} parentcall={onSubmit}  parentBackCall={onBack}/>
            <iframe
                title="file"
                style={{ width: '100%', height: 'calc(100vh - 201px)' }}
                src={pdfData.url}
            />
            <Header saveBtnTitle={'Save and Send WWA'} isBack={true} parentcall={onSubmit}  parentBackCall={onBack}/>
        </>
    )
}

export default WorkingWithAcuity
