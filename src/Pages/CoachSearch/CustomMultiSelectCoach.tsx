import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Chip, TextField } from '@material-ui/core';

function CustomMultiSelectCoach(props: any) {
    const dataArr = [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      
    ];
    const fixedOptions = [dataArr[6]];

    return (
        <Autocomplete
            multiple
            id={props?.values.name}
            options={props?.values.values}
            onChange={(event: any, newValue: any) => {
                props.parentcall(newValue, props?.values.name);
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
            style={{ width: "100%",borderWidth:0  }}
            renderInput={(params) =>
                <TextField {...params} className="h5"
                    style={{ marginBlock: 10,backgroundColor:'#fff', borderRadius:9,borderWidth:0}}
                    fullWidth
                    label={props?.values.name}
                    variant="outlined"
                />
            }
        />
    )
}

export default CustomMultiSelectCoach
