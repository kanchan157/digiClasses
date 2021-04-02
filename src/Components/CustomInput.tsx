import { TextField } from '@material-ui/core'
import React from 'react'
import { Typography } from '@material-ui/core';

function CustomInput(props: any) {
    console.log(props)
    return <>

        <TextField
            classes={{
                // root: "classes-root", // class name, e.g. `root-x`
                // disabled: "classes-disabled", // class name, e.g. `disabled-x`
                // label:"asdasd"
            }}
            className="h5"
            {...props}
            fullWidth
            margin="8px"

            onChange={(e: any) => {
                var  dataIndex= props.dataIndex == undefined ? 0 : props.dataIndex

                props.parentcall(e.target.value, props.id, dataIndex)
            }}
        />
    </>
}

export default CustomInput
