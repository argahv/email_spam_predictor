import { predictEmail } from '../../../api'
import * as types from './types'


export const emailPredictRequest = payload => ({
    type: types.EMAIL_TYPE_PREDICT_REQUEST,
    payload
})
export const emailPredictSuccess = payload => ({
    type: types.EMAIL_TYPE_PREDICT_SUCCESS,
    payload
})
export const emailPredictFailure = payload => ({
    type: types.EMAIL_TYPE_PREDICT_FAILURE,
    payload
})

export const emailPredictPost = payload => async dispatch => {
  dispatch(emailPredictRequest(payload));
  try {
    const response = await predictEmail(payload);
    dispatch(emailPredictSuccess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(emailPredictFailure(err.response.data));
    } else {
      dispatch(emailPredictFailure(err.message));
    }
  }
};
