import { TextField } from '@material-ui/core'
import React from 'react'
import { Typography } from '@material-ui/core';

function CustomInput(props: any) {
    return <>

        <TextField
            classes={{
                // root: "classes-root", // class name, e.g. `root-x`
                // disabled: "classes-disabled", // class name, e.g. `disabled-x`
                // label:"asdasd"
            }}
            className="h5"
            {...props}
            style={{ marginBlock: 10 }}
            fullWidth
            margin="8px"
            

            onChange={(e: any) => { props.parentcall(e.target.value, props.id) }}
        />
    </>
}

export default CustomInput
