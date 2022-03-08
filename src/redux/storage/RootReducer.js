import { applyMiddleware, combineReducers, createStore } from "redux";

import UserReducer from "../reducers/UserReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  user: UserReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
