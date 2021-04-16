import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            width: "100%",
        },
    }),
);


function CustomDatePicker(props: any) {
    const classes = useStyles();
    const handleChange = (event: any) => {
        // console.log(event.target.value)
        var dataIndex = props.dataIndex == undefined ? 0 : props.dataIndex
        props.parentcall(event.target.value, props.id, dataIndex)
    };
    return (
        <>
            <TextField
                {...props}
                type="date"
                defaultValue="24-05-2021"
                className={`datepicker ${classes.textField}`}
                onChange={handleChange}

            />
        </>
    )
}

export default CustomDatePicker
