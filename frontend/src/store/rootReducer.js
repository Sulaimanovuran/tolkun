import {combineReducers} from "redux";
import usersSlice from "./slices/usersSlice";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
});

export default rootReducer;