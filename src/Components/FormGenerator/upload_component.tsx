import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { InputLabel, Grid, Typography } from "@material-ui/core";
import { Cancel, CloudUpload } from '@material-ui/icons';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            width: "100%",
        },
        input: {
            display: 'none',
        },
        gridRoot: {
            flexGrow: 1,
            marginBottom: "20px",
        },
        button: {
            margin: "0px",
            backgroundColor: "#3b86ff",
            color: "#fff"

        },
        labelText: {
            color: '#4D4F5C',
            fontSize: '14px',
            lineHeight: '18px',
        },
    })
);

export const Upload = (props: any) => {

    const classes = useStyles();

    const {
        // label,

        variable,
        handleChange
    } = props.componentObject;
    console.log('object :>> ', variable && variable.length);

    return (
        <div>
            <label htmlFor="upload-photo">
                {/* <div>{variable.length > 0 ? variable[0].attributes.file_name :'hi'}</div> */}
                <input onChange={(e) => { handleChange(e, 'passport') }} accept="application/pdf, application/vnd.ms-excel,image/gif, image/jpeg" style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
                <Button className={classes.button} variant="contained" component="span" style={{ fontSize: 12 }}><CloudUpload style={{ marginRight: 10 }} />Upload</Button>
            </label>
        </div>
    );
};




export default function UploadComponent(props: any) {
    const classes = useStyles();
    const { label } = props.componentObject;
    const [visaArr, setVisaArr]: any = useState([]);

    return (
        // <form style={{ display: "flex", marginBottom: '20px' }} noValidate autoComplete="off">
        <Grid container className={classes.gridRoot}>
            {/* <div style={{ width: "25%" }}>{label}</div> */}

            <Grid item xs={12} md={4}>
                {label} 
            </Grid>
            {/* <div style={{ width: "70%" }}> */}
            <Grid item xs={12} md={7}>
                <Upload componentObject={props.componentObject} />
            </Grid>
            <Grid container direction="row" alignItems="center"  >
                                <Grid item xs={4}>

                                </Grid>
                                <Grid item xs={8} >
                                    <Grid container direction="row" alignItems="center" spacing={10}>
                                        {visaArr.length > 0 && visaArr.map((option: any) => <Grid item xs={3} >
                                            <div style={{ marginRight: 15, width: 100, height: 100, backgroundColor: "#ddd", marginBlock: 10, borderRadius: 5 }}>
                                                <div style={{ position: "relative", flex: .5, padding: 10 }}>
                                                    <Cancel style={{ marginRight: 10, position: "absolute", top: -9, right: -18, fontSize: 16 }} />
                                                    <Typography variant="h5" style={{ color: "#3B86FF", fontSize: 12, }}>{option.attributes.created_at.split("T")[0]}</Typography>
                                                    <Typography variant="h5" style={{ fontSize: 12, }}>{option.attributes.file_name}</Typography>
                                                </div>
                                            </div>
                                        </Grid>)}

                                    </Grid>
</Grid>
                                </Grid>
            </Grid>
  );
}
