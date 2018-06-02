import { combineReducers } from "redux";
import Locations from './Locations.js'
import Messages from './Messages'
import Phone from "./Phone";
const appReducer = combineReducers({
    Locations,
    Messages,
    Phone
});
const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer;
