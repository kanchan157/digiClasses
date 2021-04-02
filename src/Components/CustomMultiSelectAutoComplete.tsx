import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Chip, TextField } from '@material-ui/core';

function CustomMultiSelectAutoComplete(props: any) {
    const dataArr = [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      
    ];
    const fixedOptions = [dataArr[6]];

    return (
        <Autocomplete
            multiple
            id="combo-box-demo"
            options={dataArr}
            onChange={(event: any, newValue: any) => {
                props.parentcall(newValue, props.id);
            }}
            onInputChange={(event, newInputValue) => {
                props.parentcall(newInputValue);
            }}
            renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                    <Chip
                        label={option.title}
                        {...getTagProps({ index })}
                        disabled={fixedOptions.indexOf(option) !== -1}
                    />
                ))
            }
            getOptionLabel={(option) => option.title}
            style={{ width: "100%" }}
            renderInput={(params) =>
                <TextField {...params} className="h5"
                    style={{ marginBlock: 10 }}
                    fullWidth
                    label="Combo box"
                    variant="outlined"
                />
            }
        />
    )
}

export default CustomMultiSelectAutoComplete
