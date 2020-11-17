import { combineReducers } from "redux";

/**
 * Merges the main reducer with dynamically injected reducers
 */
function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({

    ...injectedReducers
  });
  return rootReducer;
}

export default createReducer;
