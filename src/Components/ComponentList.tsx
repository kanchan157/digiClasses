
import { Grid, FormControlLabel, Checkbox, Typography, Link, Button } from '@material-ui/core'
import React from 'react';
import CustomDatePicker from './CustomDatePicker'
import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import CustomRadioButton from "./CustomRadioButton";
import CustomAutoComplete from "./CustomAutoComplete";
import CustomUploadFiles from "./CustomUploadFiles";
import CustomMultiSelectAutoComplete from "./CustomMultiSelectAutoComplete";

function ComponentList() {
    const onChangeItem = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const onChangeDate = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };
    const setInputState = (inputStateValue: any, inputId: any) => {
        inputId == 'Username' && console.log(inputStateValue);
    }
    const OnChangeRadioStatus = (inputStateValue: any) => {
        console.log(inputStateValue);
    }
    const OnChangeAutocompleteStatus = (inputStateValue: any) => {
        console.log(inputStateValue);
    }
    const OnUploadFiles = (files: any) => {
        console.log(files);
        if (files) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                console.log(e)
                // $('#imageResult')
                //     .attr('src', e.target.result);
            };
            reader.readAsDataURL(files[0]);
        }
    }

    return (
        <div>
            <Grid container direction="row" alignItems="center" style={{ padding: 30 }}>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <CustomInput id="Username" placeholder="Username" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>Input With Label</Typography>
                    <CustomInput id="Username" placeholder="Username" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <CustomInput id="Username" variant="outlined" placeholder="Username" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>Input With Label</Typography>
                    <CustomInput id="Username" variant="outlined" placeholder="Username" parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>TextArea</Typography>
                    <CustomInput id="Username" variant="outlined" placeholder="Username" multiline={true} rows={4} parentcall={setInputState} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <CustomSelect id="role" displayEmpty variant="outlined" itemArr={['Organization', 'Partner']} parentcall={onChangeItem} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>Select With Label</Typography>
                    <CustomSelect id="role" displayEmpty variant="outlined" helperText="dfsdfsfsd" itemArr={['Organization', 'Partner']} parentcall={onChangeItem} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <CustomDatePicker id="date" variant="outlined" parentcall={onChangeDate} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>DatePicker With Label</Typography>
                    <CustomDatePicker id="date" variant="outlined" parentcall={onChangeDate} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>DatePicker With Label</Typography>
                    <CustomRadioButton itemArr={["Yes", "None", "Noned"]} parentcall={OnChangeRadioStatus} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>AutoComplete With Label</Typography>
                    <CustomAutoComplete parentcall={OnChangeAutocompleteStatus} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>Multiselect AutoComplete With Label</Typography>
                    <CustomMultiSelectAutoComplete parentcall={OnChangeAutocompleteStatus} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: 5 }}>Multiselect AutoComplete With Label</Typography>
                    <CustomUploadFiles/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ComponentList
