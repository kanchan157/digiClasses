import React, { useEffect, useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Chip, TextField } from '@material-ui/core';

function CustomMultiSelectAutoComplete(props: any) {

    const fixedOptions = [props.itemArr[6]];
    const [defaultValue, setDefaultValue] = useState(props.defaultValue)

    console.log(props)
    useEffect(() => {
        setDefaultValue(props.defaultValue)
    }, [props])
    return (
        <Autocomplete
        defaultValue={defaultValue}
            multiple
            id="combo-box-demo"
            options={props.itemArr}
            onChange={(event: any, newValue: any) => {
                props.parentcall(newValue, props.id);
            }}
            onInputChange={(event, newInputValue) => {
                props.parentcall(newInputValue);
            }}

            renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                    <Chip
                        label={option}
                        {...getTagProps({ index })}
                        disabled={fixedOptions.indexOf(option) !== -1}
                    />
                ))
            }
            getOptionLabel={(option) => option}
            style={{ width: "100%" }}
            renderInput={(params) =>
                <TextField {...params} className="h5"
                    style={{ marginBlock: 10 }}
                    fullWidth
                    label="Combo box"
                    variant="outlined"
                    {...props}
                />
            }
        />
    )
}

export default CustomMultiSelectAutoComplete
