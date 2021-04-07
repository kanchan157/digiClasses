import React, { useEffect } from 'react';
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
    console.log(props.defaultValue)
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState("");

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value)
        var dataIndex = props.dataIndex == undefined ? 0 : props.dataIndex
        props.parentcall({value: event.target.value, id: props.id, dataIndex: dataIndex })
    };
    useEffect(() => {
        props.defaultValue!=undefined && setSelectedValue(props.defaultValue)
    }, [props])

    return (

        <FormControl variant={props.variant} className={classes.formControl} error={props.error}>
            <Select {...props} value={selectedValue} onChange={handleChange} >
                <MenuItem value="">Select Role</MenuItem>
                {
                    props.itemArr.map((option: any, index: any) => {
                        return <MenuItem value={option}>{option}</MenuItem>
                    })
                }
            </Select>
            {
                props.helperText && <FormHelperText>{props.helperText}</FormHelperText>
            }
        </FormControl>
    )
}

export default CustomSelect
