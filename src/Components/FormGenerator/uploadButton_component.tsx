import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Grid } from "@material-ui/core";

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
  })
);


export function FileUpload(props: any) {
  const classes = useStyles();

  const {handleChange, index} = props.componentObject;

  return (
    <div>
      <input
        // accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(e: any) => handleChange(e.target.files[0], index)}
      />
      <label htmlFor="contained-button-file">
        <Button 
        size="small"
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
         component="span">
          Upload
        </Button>
      </label>
      {/* <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
      <Button
        size="small"
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onChange={(e) => handleChange(e, index)}
      >
        Upload
      </Button>
      </label> */}
    </div>
  );
}

export default function UploadFilesComponent(props: any) {
    const classes = useStyles();
    const { label, componentType } = props.componentObject;
  
    return (
        <Grid container className={classes.gridRoot}>
          <Grid xs={12} md={4}>
            {label}
          </Grid>
          <Grid xs={12} md={7}>
           {/* <SimpleSelect componentObject={props.componentObject} /> */}
           <FileUpload componentObject={props.componentObject} />
          </Grid>
        </Grid>
    );
  };