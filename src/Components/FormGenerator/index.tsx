import { DatePicker } from "@material-ui/pickers";
import React, { Component } from "react";
// import {
//   Form,
//   Loader,
//   Dimmer,
//   Button,
//   Divider,
//   Message,
// } from "semantic-ui-react";
import InputComponent from "./input_component";
import SelectComponent from "./select_component";
import UploadFilesComponent from "./uploadButton_component";
import DatePickerSelectComponent from "./select_with_datepicker_component";
import InputWithDropdownComponent from "./input_with_dropdown";
import MultipleSelect from "./multi_select_component";
import AddressComponent from "./address_component";
import DatePickerComponent from "./datepicker_component";
import UploadComponent from "./upload_component";

export default function FormComponent(props: any) {

   const onChangeItem = (selectedItemValue: any) => {
        console.log(selectedItemValue)
    };

  const renderInputComponents = (componentObject: any, indexer: any, index: any) => {
    componentObject["indexKey"] = indexer;
    componentObject["index"] = index;
    switch (componentObject.componentType) {
      case "input":
        return <InputComponent key={index} componentObject={componentObject} />;
      case "select":
        return <SelectComponent key={index} componentObject={componentObject} />;
      case "MultipleSelect":
        return <MultipleSelect key={index} componentObject={componentObject} />;
      case "datePicker":
        return <DatePickerComponent key={index} componentObject={componentObject} />;
      case "selectWithDatePicker":
        return <DatePickerSelectComponent key={index} componentObject={componentObject} />;
      case "uploadFiles":
        return <UploadFilesComponent key={index} componentObject={componentObject} />;
      case 'inputWithDropdown':
          return <InputWithDropdownComponent key={index} componentObject={componentObject} />;
      case 'address':
          return <AddressComponent key={index} componentObject={componentObject} />;
      case 'upload':
            return <UploadComponent key={index} componentObject={componentObject} />;
      // case 'textArea':
      //     return <TextAreaComponent key={index} componentObject={componentObject} />;
      // case 'fullNameInput':
      //     return <FullNameInputComponent key={index} componentObject={componentObject} />;
      // case 'fullAddressInput':
      //     return <FullAddressInputComponent key={index} componentObject={componentObject} />;
      // case 'fullAddressWithAdd':
      //     return <FullAddressInputWithAddComponent key={index} componentObject={componentObject} />;
      // case 'businessAddress':
      //     return <BusinessAddressComponent key={index} componentObject={componentObject} />;
      // case 'dropdown':
      //     return <DropDownComponent key={index} componentObject={componentObject} errors={this.state.errors} removeErrorFlag={this.removeErrorFlag}/>;
      // case 'double_dropdown':
      //     return <DoubleDropdownComponent key={index} componentObject={componentObject} errors={this.state.errors} removeErrorFlag={this.removeErrorFlag}/>;
      // case 'dropdownWithInvite':
      //     return <DropdownWithInviteComponent key={index} componentObject={componentObject} errors={this.state.errors} removeErrorFlag={this.removeErrorFlag} orgId={componentObject['orgId']}/>;
      // case 'imageUpload':
      //     return <ImageUploadComponent key={index} componentObject={componentObject}  handleImageUpload={this.handleImageUpload}/>;
      // case 'inputWithDropdown':
      //     return <InputWithDropdownComponent key={index} componentObject={componentObject} />;
      // case 'fileUploadWithDropdown':
      //     return <FileUploadWithDropdownComponent key={index} componentObject={componentObject} attachments={this.state.documents} handleCategorySelect={this.handleCategorySelect} handleFileUpload={this.handleFileUpload} handleRemoveFile={this.handleRemoveFile} />;
      // case 'fileUpload':
      //     return <FileUploadComponent key={index} componentObject={componentObject}  handlePlainFileUpload={this.handlePlainFileUpload} handlePlainFileRemove={this.handlePlainFileRemove} plainAttachments={this.state.plainAttachments}/>;
      // case 'inputWithAdd':
      //     return <InputWithAddComponent key={index} componentObject={componentObject} />;
      // case 'dateTimeSlot':
      //     return <DateTimeSlotComponent key={index} componentObject={componentObject} />;
      // case 'selectDateTimeSlot':
      //     return <SelectDateTimeSlotComponent key={index} componentObject={componentObject} errors={this.state.errors} removeErrorFlag={this.removeErrorFlag}/>;
      // case 'checkbox':
      //     return <CheckboxComponent key={index} componentObject={componentObject} />;
      // case 'hiddenInput':
      //     return <input key={index} type="hidden" name={componentObject['name']} defaultValue={componentObject['defaultValue']}/>;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
        <div style={props.style ? props.style :{width:'80%',margin:'0 auto 55px 10px', paddingTop:'5%', paddingBottom:'5%'}}>
      {props.children.map((input: any, index: any) => {
        let indexer =
          input["componentType"] === "dropdown"
            ? input["multiple"] &&
              input["dropdownValue"] &&
              input["dropdownValue"].length > 0
              ? input["dropdownValue"][0]
              : input["dropdownValue"]
              ? input["dropdownValue"]
              : index
            : index;
        indexer = indexer.toString() + "-" + index;
        return renderInputComponents(input, indexer, index);
      })}
      </div>
    </React.Fragment>
  );
}
