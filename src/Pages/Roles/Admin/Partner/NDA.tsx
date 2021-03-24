import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

function NDA() {
    return (
        <PDFViewer
            document={{
                url: '../../../assets/sample.pdf',
            }}
        />
    )
}

export default NDA
