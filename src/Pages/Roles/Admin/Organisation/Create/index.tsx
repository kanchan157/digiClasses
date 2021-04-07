import React from 'react';
import OrganisationLinearStepper from '../OrganisationLinearStepper';

export default function OrganisationCreate() {
    const createOrganisationLayout = {
        width: '90%',
        margin: '0 auto',
        marginTop: '80px'
      };

    return (
        <div style={createOrganisationLayout}>
        <h1>Create Organisation Profile</h1>
        <OrganisationLinearStepper />
        </div>
    )
};