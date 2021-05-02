import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import commonReducer from "./commonReducer";
import organisationDetailsReducer from "../Pages/Roles/Admin/Organisation/Create/OrganisationDetails/OrganisationDetailsReducer";
import organisationProfileReducer from "../Pages/Roles/Admin/Organisation/Create/Profile/OrganisationProfileReducer";
import organisationContactReducer from "../Pages/Roles/Admin/Organisation/Create/Contact/OrganisationContactReducer";
import organisationPreContractReducer from "../Pages/Roles/Admin/Organisation/Create/PreContract/OrganisationPreContractReducer";
import organisationGeneralReducer from "../Pages/Roles/Admin/Organisation/Create/General/OrganisationGeneralReducer";
import organisationContractReducer from "../Pages/Roles/Admin/Organisation/Create/Contract/OrganisationContractReducer";
import organisationActivityReducer from "../Pages/Roles/Admin/Organisation/Create/Activity/OrganisationActivityReducer";
import snackbarReducer from "../Components/Snackbar/SnackbarReducer";
import stepperReducer from "../Pages/Roles/StepperComponent/stepperReducer";
import contactAreaReducer from "../Pages/Roles/Admin/Employee/Create/ContactArea/ContactAreaReducer";
import workInformationReducer from "../Pages/Roles/Admin/Employee/Create/WorkInformation/WorkInformationReducer";
import mentoringCapacityReducer from "../Pages/Roles/Admin/Employee/Create/MentoringCapacity/MentoringCapatityReducer";
import trainingAndDevelopmentReducer from "../Pages/Roles/Admin/Employee/Create/TrainingAndDevelopment/TrainingAndDevelopmentReducer";
import coachingCapacityReducer from "../Pages/Roles/Admin/Employee/Create/CoachingCapacity/CoachingCapatityReducer";
import coachingProfileReducer from "../Pages/Roles/Admin/Employee/Create/CoachingProfile/CoachingProfileReducer";
import mentorProfileReducer from "../Pages/Roles/Admin/Employee/Create/MentorProfile/MentorProfileReducer";
import facilitationReducer from "../Pages/Roles/Admin/Employee/Create/Facilitation/FacilitationReducer";
import accessmentReducer from "../Pages/Roles/Admin/Employee/Create/Accessment/AccessmentReducer";
import gdprReducer from "../Pages/Roles/Admin/Employee/Create/Gdpr/GdprReducer";
import organisationListReducer from "../Pages/Roles/Admin/Organisation/List/ListReducer";
import organisationBusinessDevelopmentReducer from "../Pages/Roles/Admin/Organisation/Create/OrganisationBusinessDevelopment/OrganisationBusinessDevelopmentReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    commonReducer,
    stepperReducer,
    // organisationDetailsReducer,
    // organisationProfileReducer,
    // organisationContactReducer,
    // organisationPreContractReducer,
    // organisationGeneralReducer,
    // organisationContractReducer,
    // organisationActivityReducer,
    snackbarReducer,
    // contactAreaReducer,
    // workInformationReducer,
    // trainingAndDevelopmentReducer,
    // coachingCapacityReducer,
    // mentoringCapacityReducer,
    // coachingProfileReducer,
    // mentorProfileReducer,
    // facilitationReducer,
    // accessmentReducer,
    // gdprReducer,
    // organisationListReducer,
    // organisationBusinessDevelopmentReducer
});

// Commenting the persist logic as it fails to clear data on browser refresh or session break
const config = {
    key: 'acuity',
    storage: storage
}

// Divesh - Please do not uncomment the persist code until we discuss the below points
// What issues does persist solve that we are unable to solve with redux?
// When storing the data in something similar to local storage is not ideally the best way since the data remains even after the session ends?
// Why should we use persist when we already have redux for global state management?

const persistedReducer = persistReducer(config, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store