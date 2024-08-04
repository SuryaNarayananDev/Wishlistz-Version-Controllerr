

import {
    VERIFY_SUCCESS,
    VERIFY_FAILURE,
    Genterate_OTP_FAILURE,
    Genterate_OTP_SUCCESS
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
      console.log("verified Res from server",response.data)
    } catch (error) {
      dispatch({
        type: VERIFY_FAILURE,
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
        console.log("Q succesfully OTP genterated",response.data)
      dispatch({
        type: Genterate_OTP_SUCCESS,
        payload: response.data
      });
      
    } catch (error) {
      dispatch({
        type: Genterate_OTP_FAILURE,
        payload: error.message
      });
    }
  };
};



