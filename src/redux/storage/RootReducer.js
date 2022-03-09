import { applyMiddleware, combineReducers, createStore } from "redux";

import ActivosReducer from "../reducers/ActivosReducer";
import UserReducer from "../reducers/UserReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  user: UserReducer,
  activos: ActivosReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
