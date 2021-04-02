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
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    commonReducer,
    stepperReducer,
    organisationDetailsReducer,
    organisationProfileReducer,
    organisationContactReducer,
    organisationPreContractReducer,
    organisationGeneralReducer,
    organisationContractReducer,
    organisationActivityReducer,
    snackbarReducer
});

// Commenting the persist logic as it fails to clear data on browser refresh or session break
const config = {
    key: 'acuity',
    storage: storage
}

// const persistedReducer = persistReducer(config, rootReducer);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store