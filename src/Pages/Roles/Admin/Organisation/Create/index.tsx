import React from 'react';
import HorizontalLinearStepper from '../../../../../Components/HorizontalLinearStepper';

export default function OrganisationCreate() {
    const createOrganisationLayout = {
        width: '75%',
        margin: '0 auto',
        marginTop: '80px'
      };

    return (
        <div style={createOrganisationLayout}>
        <h1>Create Organisation Profile</h1>
        <HorizontalLinearStepper />
        </div>
    )
};