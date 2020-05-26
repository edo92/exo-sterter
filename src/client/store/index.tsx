import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import * as app from "./reducers";

const rootReducer = combineReducers({ ...app });

// Creating store and apply thunk redux middleware
const configureStore = (): any => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

const store = configureStore();

export default store;
