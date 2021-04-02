import PDFViewer from 'pdf-viewer-reactjs'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminPartnerClient from '../../../Service/Admin/partner_services';
import Header from './header';

function WorkingWithAcuity(props: any) {
    const global_data = useSelector((state: any) => state.stepperReducer);

    useEffect(() => {
        console.log(props.profileId)
        AdminPartnerClient.wwa({ partner_profile_id: global_data.partner_profile }).then((response: any) => {
            console.log(response)
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

            <PDFViewer
                document={{
                    url: '../../../assets/sample.pdf',
                }}
            />
            <Header saveBtnTitle={'Save and Send WWA'} isBack={true} parentcall={onSubmit}  parentBackCall={onBack}/>
        </>
    )
}

export default WorkingWithAcuity
