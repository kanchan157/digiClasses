import React, { useEffect } from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import AdminPartnerClient from '../../../../Service/Admin/partner_services';

function NDA(props: any) {
    useEffect(() => {
        AdminPartnerClient.Nda({ partner_profile_id: props.profileId }).then((response: any) => {
            console.log(response)
        });
    }, [])

    return (
        <PDFViewer
            document={{
                url: '../../../assets/sample.pdf',
            }}
        />
    )
}

export default NDA
