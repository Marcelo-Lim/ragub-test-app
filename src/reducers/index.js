import { combineReducers } from "redux";
import auth from './auth';
import staffReducers from './staffReducers'
export default combineReducers({auth,staffReducers});
