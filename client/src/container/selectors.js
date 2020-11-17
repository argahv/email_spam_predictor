import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

const selectGlobal = (state) => state.global || INITIAL_STATE;

export const selectToken = createSelector(
  [selectGlobal],
  (state) => state.token
);
export const selectIsLoggedIn = createSelector(
  [selectToken],
  (token) => !!token
);
export const selectUser = createSelector([selectGlobal], (state) => state.user);
export const selectClient = createSelector(
  [selectGlobal],
  (state) => state.client
);
