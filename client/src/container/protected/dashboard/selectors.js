import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "pred";

export const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectPrediction = createSelector([selectRoot], (state) => state.prediction);

