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
import EmployeeCreate from './Pages/Roles/Admin/Employee/Create';
import ComponentList from './Components/ComponentList';
import CustomUploadFiles from './Components/CustomUploadFiles';
import ManageInfo from './Pages/Auth/ManageInfo';
import PartnerList from './Pages/Roles/Partner/PartnerList';
import OrganisationList from './Pages/Roles/Admin/Organisation/List/index';
import EmployeeView from './Pages/Roles/Admin/Employee/EmployeeView/index';
import EmployeeList from './Pages/Roles/Admin/Employee/List/index';
import CoachList from './Pages/AcuityOrganizationHome/CoachList';
import Location from './Components/location';
import CoachSearch from './Pages/CoachSearch/CoachSearch';
import ModelCardSelectedCoach from './Pages/CoachSearch/CustomMultiSelectCoach';
import SearchResult from './Pages/CoachSearch/SearchResult';
import CustomMultiSelectCoach from './Pages/CoachSearch/CustomMultiSelectCoach';
import HomeHeaderMenu from './Pages/AcuityOrganizationHome/HomeHeaderMenu';
import FooterCoachSearch from './Pages/CoachSearch/FooterCoachSearch';

// import ContractDocumentition from './Pages/Roles/Partner/ContractDocumentition';

export const App = () => {
  const global_data = useSelector((state) => state.commonReducer);

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
        <Route exact path="/admin/organisation/:id/employee/create"><EmployeeCreate /></Route>
        <Route exact path="/admin/organisation/:id/edit"><OrganisationCreate /></Route>
        <Route exact path="/admin/organisation/:id/employee/list"><EmployeeList /></Route>
        <Route exact path="/admin/partner/list"><PartnerList /></Route>
        <Route exact path="/admin/organisation/list"><OrganisationList /></Route>
        <Route exact path="/admin/organisation/:id"><EmployeeView /></Route>
        <Route exact path="/admin/partner/onboarding"><OnboardingPartnerAdmin /></Route>
        <Route exact path="/partner/onboarding"><OnboardingPartner /></Route>
        <Route exact path="/partner"><PartnerList /></Route>
        <Route exact path="/custom"><CustomUploadFiles /></Route>
        <Route exact path="/ManageInfo"><ManageInfo /></Route>
        <Route exact path="/CoachList"><CoachList /></Route>
        <Route exact path="/location"><Location /></Route>
        <Route exact path="/coachSearch"><CoachSearch /></Route>
        <Route exact path="/modelCardSelectedCoach"><ModelCardSelectedCoach /></Route>
        <Route exact path="/searchResult"><SearchResult /></Route>
        <Route exact path="/customMultiSelectCoach"><CustomMultiSelectCoach /></Route>
        <Route exact path="/homeHeaderMenu"><HomeHeaderMenu /></Route>
        <Route exact path="/footerCoachSearch"><FooterCoachSearch /></Route>

{/* admin/org/emp/view/list
admin/org/edit */}
        {/* <Route exact path="/login"><LoginPage /></Route>
        <Route exact path="/forgotPassword"><ForgotPassword /></Route> */}

      </Switch>
    </Router>
  </div>
}
export default App