import { combineReducers } from "redux";
import globalReducer from "../container/reducer";

/**
 * Merges the main reducer with dynamically injected reducers
 */
function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,

    ...injectedReducers
  });
  return rootReducer;
}

export default createReducer;
