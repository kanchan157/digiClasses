import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import commonReducer from "./commonReducer";
import organisationDetailsReducer from "../Pages/Roles/Admin/Organisation/Create/OrganisationDetails/OrganisationDetailsReducer";
import organisationProfileReducer from "../Pages/Roles/Admin/Organisation/Create/Profile/OrganisationProfileReducer";
import organisationContactReducer from "../Pages/Roles/Admin/Organisation/Create/Contact/OrganisationContactReducer";
import organisationPreContractReducer from "../Pages/Roles/Admin/Organisation/Create/PreContract/OrganisationPreContractReducer";
import organisationGeneralReducer from "../Pages/Roles/Admin/Organisation/Create/General/OrganisationGeneralReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    commonReducer,
    organisationDetailsReducer,
    organisationProfileReducer,
    organisationContactReducer,
    organisationPreContractReducer,
    organisationGeneralReducer
});

const config = {
    key: 'acuity',
    storage: storage
}

const persistedReducer = persistReducer(config, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store