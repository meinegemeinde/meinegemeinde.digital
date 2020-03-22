import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import mediaReducer from "./mediaReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  main: mainReducer,
  media: mediaReducer,
  admin: adminReducer
});
