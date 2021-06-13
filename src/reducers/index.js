import { combineReducers } from "redux";
import authReducer from "./authReducer";
import carReducer from "./carReducer";
import packageReducer from "./packagesReducer";
import washReducer from './washReducer';
import faqReducer from './faqReducer';


export default combineReducers({
    auth: authReducer,
    car: carReducer,
    packages: packageReducer,
    wash: washReducer,
    faq: faqReducer
});