import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
    email: '',
    loading: false,
    prediction:''
};

const reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
        case types.EMAIL_TYPE_PREDICT_REQUEST:
            draft.loading = false;
            break;
        case types.EMAIL_TYPE_PREDICT_SUCCESS:
            draft.prediction = payload.prediction;
            draft.loading = false;
            break;
        case types.EMAIL_TYPE_PREDICT_FAILURE:
            draft.loading = false;
            console.log('payload', payload)
            break;
      default:
        return INITIAL_STATE;
    }
  
  });

export default reducer;
