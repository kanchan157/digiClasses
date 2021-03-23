import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import CloudUpload from '@material-ui/icons/CloudUpload';
import CloseSharp from '@material-ui/icons/CloseSharp';
import { Grid, Typography } from '@material-ui/core';
import CustomInput from './CustomInput';

export class CustomUploadFiles extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event: any) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        return (
            <div>
                <label htmlFor="upload-photo">
                    <input accept="application/pdf, application/vnd.ms-excel,image/gif, image/jpeg" style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" onChange={this.handleChange} />
                    <Button color="secondary" variant="contained" component="span" style={{ fontSize: 12 }}><CloudUpload style={{ marginRight: 10 }} />Upload</Button>
                </label>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs={2} style={{ marginRight: 20, width: 100, height: 100, backgroundColor: "#ddd", marginBlock: 10, borderRadius: 5 }}>
                        <div style={{ position: "relative", flex: .5 ,padding:10}}>
                            <CloseSharp style={{ marginRight: 10, position: "absolute", top: -9, right: -18, fontSize: 16 }} />
                            <Typography variant="h5" style={{color:"#3B86FF"}}>26 Jan 2018</Typography>
                            <Typography variant="h5">Jones Resume.pdf</Typography>
                            {/* <img src={this.state.file} /> */}
                        </div>
                    </Grid>
                    <Grid item xs={2} style={{ marginRight: 20, width: 100, height: 100, backgroundColor: "#ddd", marginBlock: 10, borderRadius: 5 }}>
                        <div style={{ position: "relative", flex: .5,padding:10 }}>
                            <CloseSharp style={{ marginRight: 10, position: "absolute", top: -9, right: -18, fontSize: 16 }} />
                            <Typography variant="h5" style={{color:"#3B86FF"}}>26 Jan 2018</Typography>
                            <Typography variant="h5">Jones Resume.pdf</Typography>
                        </div>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default CustomUploadFiles
