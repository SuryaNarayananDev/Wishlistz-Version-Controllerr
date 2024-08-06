

import {
    VERIFY_SUCCESS,
    VERIFY_FAILURE,
    Genterate_OTP_FAILURE,
    Genterate_OTP_SUCCESS,
    VERIFY_FORGOTPASS_SUCCESS,
    VERIFY_FORGOTPASS_FAILURE
  } from './ActionTyp';
import api from '../../../config/api';

export const sentOtp = (resData) => {
  console.log("Otp sent Successfully",resData)
  return async (dispatch) => {
    try {
      const response = await api.post('/api/verify/email', 
        resData);
      dispatch({
        type: VERIFY_SUCCESS,
        payload: response.data
      });
      console.log("verified Res from server",response.da)
    } catch (error) {
      dispatch({
        type: VERIFY_FAILURE,
        payload: error.message
      });
    }
  };
};



export const resetPassFunction = (resData) => {
  console.log("Successfully sent forgot pass data to server",resData)
  return async (dispatch) => {
    try {
      const response = await api.post('/api/verify/resetpass', 
        resData);
      dispatch({
        type: VERIFY_FORGOTPASS_SUCCESS,
        payload: response.data
      });
      console.log("forgot reset Done",response.message,response.data.message)
    } catch (error) {
      dispatch({
        type: VERIFY_FORGOTPASS_FAILURE,
        payload: error.message
      });
    }
  };
};

export const generateOtpAndSent = (resData) => {
  console.log("Q Otp Generate req",resData)
  return async (dispatch) => {
    try {
      const response = await api.post('/api/verify/otp', 
        resData);
        console.log("Q succesfully OTP genterated",response)
      dispatch({
        type: Genterate_OTP_SUCCESS,
        payload: response.data
      });
      console.log("otp generate and update succesfully",response);
    } catch (error) {
      dispatch({
        type: Genterate_OTP_FAILURE,
        payload: error.message
      });
    }
  };
};



