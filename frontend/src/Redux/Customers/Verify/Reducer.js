// reducer.js
import {
    VERIFY_SUCCESS,
    VERIFY_FAILURE,
    Genterate_OTP_SUCCESS,
    Genterate_OTP_FAILURE
  } from './ActionTyp';
  
  const initialState = {
    reviews: [],
    ratings: [],
    error: '',
    loading:false
  };
  
  const sentOtpReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case VERIFY_SUCCESS:
        return {
          ...state,
          reviews: [...state.reviews, action.payload],
          error: ''
        };
      case VERIFY_FAILURE:
        return {
          ...state,
          error: action.payload
        };
        case Genterate_OTP_SUCCESS:
          return {
            ...state,
            reviews: [...state.reviews, action.payload],
            error: ''
          };
        case Genterate_OTP_FAILURE:
          return {
            ...state,
            error: action.payload
          };
      default:
        return state;
    }
  };
  
  export default sentOtpReducer;
  