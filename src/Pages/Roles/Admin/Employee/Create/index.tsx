import React from 'react';
import EmployeeLinearStepper from '../EmployeeLinearStepper';

export default function OrganisationCreate() {
    const createOrganisationLayout = {
        width: '90%',
        margin: '0 auto',
        marginTop: '80px'
      };

    return (
        <div style={createOrganisationLayout}>
        <h1>Create Employee Profile</h1>
        <EmployeeLinearStepper />
        </div>
    )
};