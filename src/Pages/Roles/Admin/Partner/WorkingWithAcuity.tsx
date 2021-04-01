import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

function WorkingWithAcuity(props:any) {
    return (
        <PDFViewer
            document={{
                url: '../../../assets/sample.pdf',
            }}
        />
    )
}

export default WorkingWithAcuity
