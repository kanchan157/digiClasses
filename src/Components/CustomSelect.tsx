import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            width: "100%",
        }

    }),
);
function CustomSelect(props: any) {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value)
        var dataIndex = props.dataIndex == undefined ? 0 : props.dataIndex
        props.parentcall({ index: event.target.value, value: props.itemArr[event.target.value - 1], id: props.id, dataIndex: dataIndex })
    };

    return (

        <FormControl variant={props.variant} className={classes.formControl} >
            <Select {...props} value={selectedValue} onChange={handleChange} >
                <MenuItem value="">Select Role</MenuItem>
                {
                    props.itemArr.map((option: any, index: any) => {
                        return <MenuItem value={index + 1} >{option}</MenuItem>
                    })
                }
            </Select>
            {
                props.helperText && <FormHelperText>Some important helper text</FormHelperText>
            }
        </FormControl>
    )
}

export default CustomSelect
