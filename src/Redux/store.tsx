import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import commonReducer from "./commonReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    commonReducer: commonReducer,
});

const config = {
    key: 'acuity',
    storage: storage
}

const persistedReducer = persistReducer(config, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store