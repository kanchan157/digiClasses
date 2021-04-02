import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Snackbar from "./Components/Snackbar";
import Dashboard from './Pages/Auth/Dashboard';
import OnboardingPartnerAdmin from './Pages/Roles/Admin/Partner/OnboardingPartnerAdmin';
import OnboardingPartner from './Pages/Roles/Partner/OnboardingPartner';
import CommonUnAuth from './Pages/UnAuth/CommonUnAuth';
// import LoginPage from './Pages/UnAuth/LoginPage';
import ForgotPassword from './Pages/UnAuth/ForgotPassword';
import OrganisationCreate from './Pages/Roles/Admin/Organisation/Create';
import ComponentList from './Components/ComponentList';
import CustomUploadFiles from './Components/CustomUploadFiles';
import CoachSearch from './Pages/CoachSearch/CoachSearch';
// import ContractDocumentition from './Pages/Roles/Partner/ContractDocumentition';

export const App = () => {
  const global_data = useSelector((state: any) => state.commonReducer);

  return <div className="wrapper">
    <Snackbar />
    <Router>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            global_data.token === "" ?
              // <Redirect to="ComponentList" /> :
              <Redirect to="/auth/login" /> :
              <Redirect to="/dashboard" />
            // <Redirect to="/table" />
          )
        }} />
        <Route exact path="/ComponentList"><ComponentList /></Route>
        <Route exact path="/dashboard"><Dashboard /></Route>
        <Route exact path="/auth/:path"><CommonUnAuth /></Route>
        <Route exact path="/admin/organisation/create"><OrganisationCreate /></Route>
        <Route exact path="/admin/partner/onboarding"><OnboardingPartnerAdmin /></Route>
        <Route exact path="/partner/onboarding"><OnboardingPartner /></Route>
        <Route exact path="/custom"><CustomUploadFiles /></Route>
        <Route exact path="/coachSearch"><CoachSearch /></Route>


        {/* <Route exact path="/login"><LoginPage /></Route>
        <Route exact path="/forgotPassword"><ForgotPassword /></Route> */}

      </Switch>
    </Router>
  </div>
}
export default App